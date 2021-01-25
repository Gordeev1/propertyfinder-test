import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled, { css } from '@utils/styled-components';
import { scale, scaleVertical } from '@utils/styles';
import Card from '@components/Card';
import { mainFont, mainFontBold } from '@modules/Theme/styled';

const sectionMargin = css`
	margin-bottom: ${scaleVertical(20)};
`;

export const Container = styled(View)`
	padding-left: ${(p) => p.theme.insets.left + scale(30)(p)};
	padding-right: ${(p) => p.theme.insets.right + scale(30)(p)};
`;

export const MainSection = styled(View)`
	flex-direction: row;
	${sectionMargin};
`;

export const Poster = styled(FastImage).attrs({ resizeMode: 'cover' })`
	width: ${scale(125)};
	height: ${scale(200)};
	margin-right: ${scale(20)};
`;

export const MainSubsection = styled(View)`
	justify-content: center;
	align-items: flex-start;
	flex: 1;
`;

export const Title = styled(Text)`
	${mainFontBold};
	font-size: ${scale(28)};
	color: ${(p) => p.theme.colors.fontMain};
	text-align: left;
`;

export const SecondarySection = styled(Card)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	${sectionMargin};
	padding-vertical: ${scale(10)};
	padding-horizontal: ${scale(10)};
`;

export const SecondaryInfo = styled(Text)<{ huge?: boolean }>`
	${mainFont};
	color: ${(p) => p.theme.colors.fontMain};
	font-size: ${scale(18)};
	text-align: center;
	flex: ${(p) => (p.huge ? 1.5 : 1)};
`;

export const Devider = styled(View)`
	width: 1;
	height: 100%;
	background-color: ${(p) => p.theme.colors.border};
`;

export const Section = styled(View)`
	${sectionMargin};
`;

export const Genres = styled(View)`
	flex-direction: row;
	flex-wrap: wrap;
`;

export const SectionTitle = styled(Text)`
	${mainFontBold};
	font-size: ${scale(20)};
	color: ${(p) => p.theme.colors.fontSecondary};
	margin-bottom: ${scaleVertical(10)};
	text-align: left;
`;

export const Genre = styled(Text)`
	${mainFont};
	font-size: ${scale(16)};
	color: ${(p) => p.theme.colors.fontMain};
	margin-right: ${scale(5)};
	text-align: left;
`;

export const Description = styled(Text)`
	${mainFont};
	font-size: ${scale(16)};
	color: ${(p) => p.theme.colors.fontMain};
	text-align: left;
`;

export const Tagline = styled(Text)`
	${mainFont};
	font-size: ${scale(14)};
	color: ${(p) => p.theme.colors.fontMain};
	text-align: left;
	margin-top: ${scaleVertical(10)};
`;
