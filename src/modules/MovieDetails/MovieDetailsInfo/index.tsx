import React, { memo, useCallback } from 'react';
import { I18nManager, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatDuration } from 'date-fns';
import { IGenre, IMovie, IMoviePreview } from '@LTypes/api/movies';
import { translate } from '@i18n';
import { getMovieDBImageFullPath } from '@utils/images';
import { PrimaryButton } from '@components/Button';
import ContainerCenter from '@components/ContainerCenter';
import Spinner from '@components/Spinner';
import {
	Container,
	MainSection,
	Poster,
	MainSubsection,
	Title,
	SecondarySection,
	SecondaryInfo,
	Section,
	SectionTitle,
	Genres,
	Genre,
	Description,
	Devider,
	Tagline,
} from './styled';

interface IProps
	extends Pick<IMoviePreview, 'overview' | 'poster_path' | 'release_date' | 'title'>,
		Partial<Pick<IMovie, 'runtime' | 'genres' | 'status' | 'tagline' | 'homepage'>> {
	style?: ViewStyle;
	loading?: boolean;
	onWebsiteOpenPress?: () => void;
}

export default memo(
	({
		loading,
		style,
		overview,
		poster_path,
		release_date,
		title,
		runtime,
		genres,
		status,
		tagline,
		homepage,
		onWebsiteOpenPress,
	}: IProps) => {
		const renderGenreItem = useCallback((genre: IGenre, index: number, source: IGenre[]) => {
			const isLast = index === source.length - 1;
			const separator = !isLast && (I18nManager.isRTL ? '،' : ',');
			return (
				<Genre key={genre.id}>
					{I18nManager.isRTL && separator}
					{genre.name}
					{!I18nManager.isRTL && separator}
				</Genre>
			);
		}, []);

		const loader = loading && (
			<ContainerCenter>
				<Spinner paddingAreaSize={20} />
			</ContainerCenter>
		);

		return (
			<Container style={style}>
				<MainSection>
					<Poster source={{ uri: getMovieDBImageFullPath(poster_path) }} />
					<MainSubsection>
						<Title>{title}</Title>
						{Boolean(tagline) && <Tagline>{tagline}</Tagline>}
					</MainSubsection>
				</MainSection>

				<SecondarySection>
					<SecondaryInfo huge>{status}</SecondaryInfo>
					<Devider />
					<SecondaryInfo>{new Date(release_date).getFullYear()}</SecondaryInfo>
					<Devider />
					{Boolean(runtime) && (
						<SecondaryInfo huge>{formatDuration({ minutes: runtime })}</SecondaryInfo>
					)}
				</SecondarySection>

				{Boolean(overview) && (
					<Section>
						<SectionTitle>
							{translate('movieDetails.descriptionSectionTitle')}
						</SectionTitle>
						<Description>{overview}</Description>
					</Section>
				)}

				{genres && genres.length > 0 ? (
					<Section>
						<SectionTitle>{translate('movieDetails.genresSectionTitle')}</SectionTitle>
						<Genres>{genres.map(renderGenreItem)}</Genres>
					</Section>
				) : (
					loader
				)}

				{Boolean(homepage) && (
					<Section>
						<PrimaryButton
							testID="movieDetails.openWebsiteBtn"
							type="outline"
							icon={<Icon name="language" size={18} />}
							title={translate('movieDetails.openWebsiteBtnLabel')}
							onPress={onWebsiteOpenPress}
						/>
					</Section>
				)}
			</Container>
		);
	},
);
