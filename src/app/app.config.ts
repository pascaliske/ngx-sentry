import type { ApplicationConfig } from '@angular/core'
import { provideExperimentalZonelessChangeDetection, importProvidersFrom } from '@angular/core'
import { SentryModule } from '@pascaliske/ngx-sentry'

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        importProvidersFrom(
            SentryModule.forRoot({
                enabled: true,
                sentry: {
                    dsn: 'https://your-sentry-dsn@sentry.io',
                },
                http: {
                    enabled: true,
                },
                dialog: true,
            }),
        ),
    ],
}
