import { Injectable } from '@angular/core'
import {
    addBreadcrumb,
    captureMessage,
    captureException,
    captureEvent,
    configureScope,
    withScope,
    Breadcrumb,
    Severity,
    Event,
    Scope,
} from '@sentry/browser'
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
    public captureException<T = unknown>(exception: T): string {
        return captureException(exception)
    }

    /**
     * Capture an {@link Event}.
     *
     * @param - The event to report
     * @returns - Returns the generated event id
     */
    public captureEvent(event: Event): string {
        return captureEvent(event)
    }

    /**
     * Configure a {@link Scope}.
     *
     * @param - A callback for configuring the scope
     */
    public configureScope(callback: (scope: Scope) => void): void {
        configureScope(callback)
    }

    /**
     * Using a local {@link Scope}.
     *
     * @param - A callback for using the scope
     */
    public withScope(callback: (scope: Scope) => void): void {
        withScope(callback)
    }
}
