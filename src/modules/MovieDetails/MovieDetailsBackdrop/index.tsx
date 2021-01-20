import React, { memo } from 'react';
import { Container, OverlayTop, OverlayBottom, BackgroundImage } from './styled';
import { getMovieDBImageFullPath } from '@utils/images';
interface IProps {
	backdrop: string | null;
}

export default memo(({ backdrop }: IProps) => (
	<Container>
		<BackgroundImage source={{ uri: getMovieDBImageFullPath(backdrop) }} />
		<OverlayTop />
		<OverlayBottom />
	</Container>
));
