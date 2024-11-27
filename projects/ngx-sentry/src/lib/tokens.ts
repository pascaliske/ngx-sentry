import { InjectionToken } from '@angular/core'
import { BrowserOptions, ReportDialogOptions } from '@sentry/browser'

/**
 * Module options.
 */
export interface SentryOptions {
    enabled: boolean
    sentry: BrowserOptions
    dialog?: true | ReportDialogOptions
    http?: {
        enabled?: boolean
        message?: string
        whitelist?: number[]
        blacklist?: number[]
    }
}

/**
 * Injection tokens.
 */
export const INITIALIZER = new InjectionToken<void>('initializer')
export const OPTIONS = new InjectionToken<SentryOptions>('options')
