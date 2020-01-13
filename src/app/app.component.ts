import { Component } from '@angular/core'
import { SentryService } from '@pascaliske/ngx-sentry'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private sentryService: SentryService) {}

    public trigger(): void {
        this.sentryService.captureException(new Error('DEMO!'))
    }
}
