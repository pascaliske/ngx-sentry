import { Injectable, Inject, ErrorHandler } from '@angular/core'
import { captureException } from '@sentry/browser'
import { ModuleOptions, OPTIONS } from './options'

/**
 * Injectable error handler for sentry.
 */
@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    /**
     * Initializes the sentry connected error handler.
     *
     * @param - The module options.
     */
    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {}

    /**
     * Handles any errors.
     *
     * @param - The error to handle.
     */
    public handleError(error: any): void {
        // log to sentry
        if (this.options.enabled) {
            captureException(error.originalError || error)
        }

        // re-throw error
        throw error
    }
}
