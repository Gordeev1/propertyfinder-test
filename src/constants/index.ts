declare var process: any;

import { Platform } from 'react-native';
import { ENVIRONMENT } from '@constants/envs';

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';
export const isProductionBuild = process.env.NODE_ENV === 'production';

export const CACHE_VERSION = '1';
export const PERSIST_KEY = `propertyfindertest-${ENVIRONMENT}`;
export const PERSIST_TIMEOUT = 9000000000000000;
export const PERSIST_STORAGE_KEY = `${CACHE_VERSION}${PERSIST_KEY}`;
