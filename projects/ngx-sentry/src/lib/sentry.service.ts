import { Injectable } from '@angular/core'
import {
    addBreadcrumb,
    captureMessage,
    captureException,
    captureEvent,
    getCurrentScope,
    withScope,
    Breadcrumb,
    SeverityLevel,
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
    public captureMessage(message: string, level: SeverityLevel): string {
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
     * Get the current {@link Scope}.
     *
     * @returns - Returns the current scope
     */
    public getCurrentScope(): Scope {
        return getCurrentScope()
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
