import styled from '@utils/styled-components';
import { ActivityIndicator } from 'react-native';
import { scale } from '@utils/styles';

interface IProps {
	paddingAreaSize?: number;
}

export default styled(ActivityIndicator)<IProps>`
	${(p) =>
		p.paddingAreaSize &&
		`
		padding-horizontal: ${scale(p.paddingAreaSize)(p)};
		padding-vertical: ${scale(p.paddingAreaSize)(p)};
	`}
`;
