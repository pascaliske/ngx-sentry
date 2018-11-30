import { Injectable, Inject, ErrorHandler } from '@angular/core'
import { init, captureException } from '@sentry/browser'
import { ModuleOptions, OPTIONS } from './options'

/**
 * Injectable error handler for sentry.
 */
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    /**
     * Initializes the sentry instance.
     *
     * @param - The module options.
     */
    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {
        // configure sentry's browser library
        if (this.options.enabled) {
            init(this.options.sentry)
        }
    }

    /**
     * Handles any errors.
     *
     * @param - The error to handle.
     */
    public handleError(error: any): void {
        // log to sentry in production
        if (this.options.enabled) {
            captureException(error.originalError || error)
        }

        // re-throw error
        throw error
    }
}
