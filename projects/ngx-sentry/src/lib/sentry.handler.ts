import { Injectable, ErrorHandler, inject } from '@angular/core'
import { captureException } from '@sentry/browser'
import { SentryOptions, OPTIONS } from './tokens'

/**
 * Injectable error handler for Sentry.
 */
@Injectable({
    providedIn: 'root',
})
export class SentryErrorHandler implements ErrorHandler {
    private readonly options: SentryOptions = inject<SentryOptions>(OPTIONS)

    /**
     * Handles any errors.
     *
     * @param - The error to handle.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public handleError(error: any): void {
        // log to Sentry
        if (this.options.enabled) {
            captureException(error?.originalError ?? error)
        }
    }
}
