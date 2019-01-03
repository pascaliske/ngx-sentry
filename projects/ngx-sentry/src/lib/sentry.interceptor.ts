import { Injectable, Inject } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http'
import { captureMessage, showReportDialog } from '@sentry/browser'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ModuleOptions, OPTIONS } from './tokens'

/**
 * Injectable HTTP interceptor for Sentry.
 */
@Injectable()
export class SentryErrorInterceptor implements HttpInterceptor {
    /**
     * Initializes the sentry connected HTTP interceptor.
     *
     * @param - The module options.
     */
    public constructor(@Inject(OPTIONS) private options: ModuleOptions) {}

    /**
     * Intercepts HTTP requests and handles any HTTP errors.
     *
     * @param - The intercepted request.
     * @returns - An observable with the request
     */
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).pipe(
            catchError(res => {
                // log to Sentry
                if (res instanceof HttpErrorResponse && this.filter(res)) {
                    captureMessage(`Http request failed (${req.method}, ${res.status}, ${req.url})`)
                }

                // show report dialog
                if (this.options.reporting) {
                    showReportDialog()
                }

                // re-throw error
                return throwError(res)
            }),
        )
    }

    /**
     * Checks if the response should be sent to Sentry.
     *
     * @param - The HttpErrorResponse
     * @returns - An boolean describing if the response should be handled
     */
    private filter(response: HttpErrorResponse): boolean {
        if (!this.options.enabled || (this.options.http && this.options.http.enabled === false)) {
            return false
        }

        // apply whitelist
        if (this.options.http.whitelist && this.options.http.whitelist.length > 0) {
            return this.options.http.whitelist.includes(response.status)
        }

        // apply blacklist
        if (this.options.http.blacklist && this.options.http.blacklist.length > 0) {
            return !this.options.http.blacklist.includes(response.status)
        }

        return true
    }
}
