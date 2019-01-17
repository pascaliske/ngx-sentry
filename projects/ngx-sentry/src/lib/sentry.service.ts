import { Injectable } from '@angular/core'
import {
    addBreadcrumb,
    captureMessage,
    captureException,
    captureEvent,
    Breadcrumb,
    Severity,
    SentryEvent,
} from '@sentry/browser/esm'
import { OPTIONS, INITIALIZER } from './tokens'

@Injectable({
    providedIn: 'root',
    deps: [OPTIONS, INITIALIZER],
})
export class SentryService {
    /**
     * Add an {@link Breadcrumb} to Sentry.
     *
     * @param - The breadcrumb to add
     * @returns - Returns nothing
     */
    public addBreadcrumb(breadcrumb: Breadcrumb): void {
        return addBreadcrumb(breadcrumb)
    }

    /**
     * Capture a message.
     *
     * @param - The message to report
     * @param - The severity level of the message
     * @returns - Returns the generated event id
     */
    public captureMessage(message: string, level: Severity): string {
        return captureMessage(message, level)
    }

    /**
     * Capture an exception.
     *
     * @param - The exception to report
     * @returns - Returns the generated event id
     */
    public captureException(exception: any): string {
        return captureException(exception)
    }

    /**
     * Capture an {@link SentryEvent}.
     *
     * @param - The event to report
     * @returns - Returns the generated event id
     */
    public captureEvent(event: SentryEvent): string {
        return captureEvent(event)
    }
}
