import { InjectionToken } from '@angular/core'
import { BrowserOptions } from '@sentry/browser'

export const INITIALIZER = new InjectionToken<void>('initializer')
export const OPTIONS = new InjectionToken<ModuleOptions>('options')

export interface ModuleOptions {
    enabled: boolean
    sentry: BrowserOptions
    reporting?: boolean
    http?: {
        enabled?: boolean
        whitelist?: number[]
        blacklist?: number[]
    }
}
