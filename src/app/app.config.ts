import type { ApplicationConfig } from '@angular/core'
import { provideZonelessChangeDetection } from '@angular/core'
import { provideSentry } from '@pascaliske/ngx-sentry'

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
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
