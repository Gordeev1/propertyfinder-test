import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { SearchStackParamList } from '@scenes/search';
import { SEARCH_SCENES } from '@scenes/search/enums';
import { IStoreState } from '@store';
import { loadMovieDetails, selectMovieById, selectMovieLoadingById } from '@store/slices/movies';
import FloatingStackHeader from '@components/FloatingStackHeader';
import WebviewPanel from '@components/WebviewPanel';
import ContainerCenter from '@components/ContainerCenter';
import Spinner from '@components/Spinner';
import { useToogleState } from '@hooks/useToogleState';
import MovieDetailsInfo from '@modules/MovieDetails/MovieDetailsInfo';
import MovieDetailsBackdrop from '@modules/MovieDetails/MovieDetailsBackdrop';
import { ConfiguredScrollView } from './styled';

interface IProps {
	route: RouteProp<SearchStackParamList, SEARCH_SCENES.MovieDetails>;
}

export default ({ route }: IProps) => {
	const { id } = route.params;

	const data = useSelector<IStoreState, ReturnType<typeof selectMovieById>>((state) =>
		selectMovieById(state, id),
	);

	const loading = useSelector<IStoreState, ReturnType<typeof selectMovieLoadingById>>((state) =>
		selectMovieLoadingById(state, id),
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadMovieDetails(id));
	}, [dispatch, id]);

	const scrollY = useRef(new Animated.Value(0));

	const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: scrollY.current } } }], {
		useNativeDriver: true,
	});

	const headerOpacity = scrollY.current.interpolate({
		inputRange: [0, 215, 220, 221],
		outputRange: [0, 0, 1, 1],
	});

	const headerStyle = { opacity: headerOpacity };

	const [websiteVisible, openWebsite, closeWebsite] = useToogleState(false);

	return (
		<>
			<ConfiguredScrollView
				testID="movieDetails.scrollView"
				scrollEventThrottle={16}
				onScroll={onScroll}
			>
				{!data ? (
					<ContainerCenter>
						<Spinner paddingAreaSize={150} />
					</ContainerCenter>
				) : (
					<>
						<MovieDetailsBackdrop backdrop={data.backdrop_path || data.poster_path} />
						<MovieDetailsInfo
							loading={loading}
							onWebsiteOpenPress={openWebsite}
							{...data}
						/>
						{'homepage' in data && Boolean(data.homepage) && (
							<WebviewPanel
								testID="movieDetails.webview"
								isVisible={websiteVisible}
								uri={data.homepage}
								onClosed={closeWebsite}
							/>
						)}
					</>
				)}
			</ConfiguredScrollView>
			{data && (
				<FloatingStackHeader
					testID="movieDetails.floatingHeader"
					title={data.title}
					style={headerStyle}
				/>
			)}
		</>
	);
};
