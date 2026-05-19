/**
 * Core barrel export.
 * Import anything from '@core' using the path alias (configure in tsconfig.json).
 *
 * Usage:
 *   import { ROLE_META, roleColor, formatINR, AUTH_ENDPOINTS } from '../../core';
 */
export * from './constants/roles.constants';
export * from './constants/api.constants';
export * from './constants/app.constants';
export * from './utils/format.utils';
export * from './models/api.models';
