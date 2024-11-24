import { Component } from '@angular/core'
import { SentryService } from '@pascaliske/ngx-sentry'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public constructor(private readonly sentryService: SentryService) {}

    public trigger(): void {
        this.sentryService.captureException(new Error('DEMO!'))
    }
}
