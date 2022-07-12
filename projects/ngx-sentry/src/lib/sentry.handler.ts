import { Injectable, Inject, ErrorHandler } from '@angular/core'
import { captureException } from '@sentry/browser'
import { ModuleOptions, OPTIONS } from './tokens'

/**
 * Injectable error handler for Sentry.
 */
@Injectable({
    providedIn: 'root',
})
export class SentryErrorHandler implements ErrorHandler {
    /**
     * Initializes the sentry connected error handler.
     *
     * @param - The module options.
     */
    public constructor(@Inject(OPTIONS) private readonly options: ModuleOptions) {}

    /**
     * Handles any errors.
     *
     * @param - The error to handle.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public handleError(error: any): void {
        // log to Sentry
        if (this.options.enabled) {
            captureException(error.originalError || error)
        }
    }
}
