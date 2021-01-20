import React from 'react';
import SceneTitleSection from '@components/SceneTitleSection';
import AuthSettings from '@modules/Settings/AuthSettings';
import AppSettings from '@modules/Settings/AppSettings';
import { translate } from '@i18n';
import { Container } from './styled';

export default () => (
	<Container>
		<SceneTitleSection
			title={translate('settings.sceneTitle')}
			subtitle={translate('settings.sceneSubtitle')}
		/>
		<AuthSettings />
		<AppSettings />
	</Container>
);
