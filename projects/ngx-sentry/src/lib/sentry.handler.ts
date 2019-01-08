import { Injectable, Inject, ErrorHandler } from '@angular/core'
import { captureException, showReportDialog } from '@sentry/browser'
import { ModuleOptions, OPTIONS } from './tokens'

/**
 * Injectable error handler for Sentry.
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
        // log to Sentry
        if (this.options.enabled) {
            captureException(error.originalError || error)
        }

        // show report dialog
        if (this.options.dialog) {
            showReportDialog(typeof this.options.dialog === 'object' ? this.options.dialog : null)
        }

        // re-throw error
        throw error
    }
}
