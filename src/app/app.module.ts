import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SentryModule } from '@pascaliske/ngx-sentry'
import { AppComponent } from './app.component'

@NgModule({
    imports: [
        BrowserModule,
        SentryModule.forRoot({
            enabled: true,
            sentry: {
                dsn: 'https://your-sentry-dsn@sentry.io',
            },
            reporting: false,
            http: {
                enabled: true,
                blacklist: null,
                whitelist: null,
            },
        }),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
