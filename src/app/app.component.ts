import { Component, inject } from '@angular/core'
import { SentryService } from '@pascaliske/ngx-sentry'

@Component({
    selector: 'cmp-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    private readonly sentryService: SentryService = inject(SentryService)

    public trigger(): void {
        this.sentryService.captureException(new Error('DEMO!'))
    }
}
