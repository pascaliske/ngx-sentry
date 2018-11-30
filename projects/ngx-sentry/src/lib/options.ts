import { InjectionToken } from '@angular/core'
import { BrowserOptions } from '@sentry/browser'

export interface ModuleOptions {
    enabled: boolean
    sentry: BrowserOptions
}

export const OPTIONS = new InjectionToken<ModuleOptions>('options')
