/*
 * Public API Surface of ngx-sentry
 */
export { provideSentry } from './lib/sentry.provider'
export { SentryOptions, INITIALIZER, OPTIONS } from './lib/tokens'
export { SentryErrorHandler } from './lib/sentry.handler'
export { SentryErrorInterceptor } from './lib/sentry.interceptor'
export { SentryService } from './lib/sentry.service'
