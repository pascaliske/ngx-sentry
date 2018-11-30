import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SentryModule } from '@pascaliske/ngx-sentry'
import { AppComponent } from './app.component'
import { environment } from '../environments/environment'

@NgModule({
    imports: [
        BrowserModule,
        SentryModule.forRoot({
            enabled: environment.production,
            sentry: environment.sentry,
        }),
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
