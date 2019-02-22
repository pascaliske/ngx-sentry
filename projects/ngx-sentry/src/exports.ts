/*
 * Public API Surface of ngx-sentry
 */
export { ModuleOptions, INITIALIZER, OPTIONS } from './lib/tokens'
export { SentryModule, initializer } from './lib/sentry.module'
export { SentryErrorHandler } from './lib/sentry.handler'
export { SentryErrorInterceptor } from './lib/sentry.interceptor'
export { SentryService } from './lib/sentry.service'
