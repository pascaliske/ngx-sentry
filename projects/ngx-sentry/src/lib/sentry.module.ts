import { NgModule, ModuleWithProviders, ErrorHandler, APP_INITIALIZER } from '@angular/core'
import { init } from '@sentry/browser'
import { SentryErrorHandler } from './sentry.handler'
import { ModuleOptions, OPTIONS } from './options'

/**
 * Initializer function to setup sentry logging.
 *
 * @param - The module options
 * @returns - A promise for waiting to be resolved
 */
export function initialize(options: ModuleOptions): () => Promise<void> {
    // configure sentry's browser library
    const promise = async (): Promise<void> => {
        if (options.enabled) {
            init(options.sentry)
        }
    }

    return promise
}

/**
 * Injectable http interceptor for sentry.
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
                    provide: APP_INITIALIZER,
                    useFactory: initialize,
                    deps: [OPTIONS],
                    multi: true,
                },
                {
                    provide: ErrorHandler,
                    useClass: SentryErrorHandler,
                },
            ],
        }
    }
}
