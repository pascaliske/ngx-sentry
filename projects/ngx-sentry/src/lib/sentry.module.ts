import { NgModule, ModuleWithProviders, ErrorHandler } from '@angular/core'
import { SentryErrorHandler } from './sentry.handler'
import { ModuleOptions, OPTIONS } from './options'

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
})
export class SentryModule {
    /**
     * Provides
     * @param options
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
                    provide: ErrorHandler,
                    useClass: SentryErrorHandler,
                },
            ],
        }
    }
}
