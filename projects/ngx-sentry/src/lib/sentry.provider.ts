import { EnvironmentProviders, ErrorHandler, makeEnvironmentProviders } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { init, showReportDialog } from '@sentry/browser'
import { SentryErrorHandler } from './sentry.handler'
import { SentryErrorInterceptor } from './sentry.interceptor'
import { SentryOptions, OPTIONS, INITIALIZER } from './tokens'

/**
 * Initializer function to setup sentry logging.
 *
 * @param - The module options
 * @returns - A promise for waiting to be resolved
 */
function initializer(options: SentryOptions): void {
    // configure sentry's browser library
    if (options.enabled) {
        // show report dialog
        if (options.dialog) {
            options.sentry.beforeSend = event => {
                if (event.exception) {
                    // show dialog with options
                    if (typeof options.dialog === 'object') {
                        showReportDialog(options.dialog)
                        return event
                    }

                    // show dialog without options
                    showReportDialog()
                }

                return event
            }
        }

        init(options.sentry)
    }
}

export const provideSentry = (options: SentryOptions): EnvironmentProviders => {
    return makeEnvironmentProviders([
        {
            provide: OPTIONS,
            useValue: options,
        },
        {
            provide: INITIALIZER,
            useFactory: initializer,
            deps: [OPTIONS],
        },
        {
            provide: ErrorHandler,
            useClass: SentryErrorHandler,
            deps: [OPTIONS, INITIALIZER],
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: SentryErrorInterceptor,
            deps: [OPTIONS, INITIALIZER],
            multi: true,
        },
    ])
}
