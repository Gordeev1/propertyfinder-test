import React from 'react';
import SceneTitleSection from '@components/SceneTitleSection';
import { translate } from '@i18n';

export default () => (
	<SceneTitleSection
		testID="profile.sceneTitleSection"
		title={translate('profile.sceneTitle')}
		subtitle={translate('profile.sceneSubtitle')}
	/>
);
