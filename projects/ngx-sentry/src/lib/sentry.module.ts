import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { init } from '@sentry/browser'
import { SentryErrorHandler } from './sentry.handler'
import { SentryErrorInterceptor } from './sentry.interceptor'
import { ModuleOptions, OPTIONS, INITIALIZER } from './tokens'

/**
 * Initializer function to setup sentry logging.
 *
 * @param - The module options
 * @returns - A promise for waiting to be resolved
 */
export function initializer(options: ModuleOptions): void {
    // configure sentry's browser library
    if (options.enabled) {
        init(options.sentry)
    }
}

/**
 * Angular module for importing all Sentry related stuff.
 */
@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})
export class SentryModule {
    /**
     * Provides all necessary providers for sentry connection.
     *
     * @param - The module options
     * @returns - The module with all providers
     */
    public static forRoot(options: ModuleOptions): ModuleWithProviders {
        return {
            ngModule: SentryModule,
            providers: [
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
            ],
        }
    }
}
