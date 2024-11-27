import type { ApplicationConfig } from '@angular/core'
import { provideExperimentalZonelessChangeDetection } from '@angular/core'
import { provideSentry } from '@pascaliske/ngx-sentry'

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideSentry({
            enabled: true,
            sentry: {
                dsn: 'https://your-sentry-dsn@sentry.io',
            },
            http: {
                enabled: true,
            },
            dialog: true,
        }),
    ],
}
