import { InjectionToken } from '@angular/core'
import { BrowserOptions } from '@sentry/browser'

export interface ModuleOptions {
    enabled: boolean
    sentry: BrowserOptions
    whitelist?: number[]
    blacklist?: number[]
}

export const OPTIONS = new InjectionToken<ModuleOptions>('options')
