# `@pascaliske/ngx-sentry`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/ngx-sentry.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/ngx-sentry) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/ngx-sentry.svg?style=flat-square)](https://github.com/pascaliske/ngx-sentry) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/ngx-sentry/Test%20package/main?label=test&style=flat-square)](https://github.com/pascaliske/ngx-sentry/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![GitHub Last Commit](https://img.shields.io/github/last-commit/pascaliske/ngx-sentry?style=flat-square)](https://github.com/pascaliske/ngx-sentry) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

This library provides an [`ErrorHandler`](https://angular.io/api/core/ErrorHandler) and a [`HttpInterceptor`](https://angular.io/guide/http#intercepting-requests-and-responses) for connecting an Angular application with [Sentry](https://sentry.io) service.

## Requirements

To use this library you need to install the `@sentry/browser` library into your project

```bash
$ yarn add @sentry/browser
```

## Installation

To install the library itself use the following command:

```bash
$ yarn add @pascaliske/ngx-sentry
```

## Usage

Import the `provideSentry()` function in your application configuration file. The function expects an object with at least the following two keys: `enabled`, `sentry`. More options can be found in the [`SentryOptions` section](#sentryoptions) below.

```typescript
import type { ApplicationConfig } from '@angular/core'
import { provideSentry } from '@pascaliske/ngx-sentry'

export const appConfig: ApplicationConfig = {
    providers: [
        provideExperimentalZonelessChangeDetection(),
        provideSentry({
            enabled: true,
            sentry: {
                dsn: 'https://your-sentry-dsn@sentry.io',
            },
        }),
    ],
}
```

## `SentryService`

You can use the `SentryService` injectable to manually capture errors or events as follows:

```typescript
@Component({
    // [...]
})
export class AppComponent {
    public constructor(private sentryService: SentryService) {}

    public ngOnInit(): void {
        // capture single error
        this.sentryService.captureException(new Error(''))

        // capture single error with additional context information
        this.sentryService.withScope(scope => {
            scope.setExtra('currentPage', window.location.href)
            this.sentryService.captureException(new Error(''))
        })
    }
}

```

> **Note:** The `SentryService` inherits all methods directly from the Sentry library. For more information about their APIs you can visit [their documentation](https://docs.sentry.io/enriching-error-data/context/?platform=browser).

## `SentryOptions`

You can configure the library for yourself. The possible options for the `provideSentry()` function are:

### enabled

Type: `boolean`<br>
Required: `true`

This flag allows to enable or disable the whole sentry tracking.

### sentry

Type: `object`<br>
Required: `true`

Configure Sentry, see [here](https://docs.sentry.io/error-reporting/quickstart/?platform=browser#configure-the-sdk) for more information.

### dialog

Type: `boolean` | [`ReportDialogOptions`](https://docs.sentry.io/enriching-error-data/user-feedback/?platform=browser#customizing-the-widget)<br>
Required: `false`<br>
Default: `false`

Enable or disable the [reporting dialog](https://docs.sentry.io/enriching-error-data/user-feedback/?platform=browser).

### http

Type: `object`<br>
Required: `false`<br>

Configure the HTTP interceptor.

#### http.enabled

Type: `boolean`<br>
Required: `false`<br>
Default: `true`

Enable or disable HTTP intercepting.

#### http.message

Type: `string`<br>
Required: `false`<br>
Default: `Http request failed. ({method}, {status}, {url})`

Customize the captured message for all intercepted HTTP errors. There are a few placeholders which get replaced before sending:

- `{method}` - The request method
- `{url}` - The requested url
- `{status}` - The response status
- `{message}` - The response message

#### http.whitelist

Type: `Array<number>`<br>
Required: `false`<br>
Default: `null`

Use a whitelist of HTTP status codes to filter the intercepted HTTP requests. Only responses with whitelisted status codes get reported.

#### http.blacklist

Type: `Array<number>`<br>
Required: `false`<br>
Default: `null`

Use a blacklist of HTTP status codes to filter the intercepted HTTP requests. All responses with blacklisted status codes will be skipped.

## License

MIT © [Pascal Iske](https://pascaliske.dev)
