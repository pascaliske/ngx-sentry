# `@pascaliske/ngx-sentry`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/ngx-sentry.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/ngx-sentry) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/ngx-sentry.svg?style=flat-square)](https://github.com/pascaliske/ngx-sentry) [![Travis CI](https://img.shields.io/travis/com/pascaliske/ngx-sentry/master.svg?style=flat-square)](https://travis-ci.com/pascaliske/ngx-sentry) [![Greenkeeper](https://badges.greenkeeper.io/pascaliske/ngx-sentry.svg?style=flat-square)](https://greenkeeper.io) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

This library provides an [`ErrorHandler`](https://angular.io/api/core/ErrorHandler) and a [`HttpInterceptor`](https://angular.io/guide/http#intercepting-requests-and-responses) for connecting an Angular application with [Sentry](https://sentry.io) service.

## Installation

To install the module use the following command:

```bash
$ yarn add @pascaliske/ngx-sentry
```

## Usage

Add the Sentry config to your environment file:

```typescript
export const environment = {
    production: true,
    sentry: {
        dsn: 'https://your-sentry-dsn@sentry.io',
    },
}
```

Then import the `SentryModule` in your application. The `forRoot` method expects a boolean which enables the reporting and the sentry config.

```typescript
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SentryModule } from '@pascaliske/ngx-sentry'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'

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
```

## Options

You can configure the library for yourself. The possible options for the `forRoot()` method are:

### enabled

Type: `boolean`<br>
Required: `true`

This flag allows to enable or disable the whole sentry tracking.

### sentry

Type: `object`<br>
Required: `true`

Configure Sentry, see [here](https://docs.sentry.io/error-reporting/quickstart/?platform=browser#configure-the-sdk) for more information.

### reporting

Type: `boolean`<br>
Required: `false`<br>
Default: `false`

Enable or disable the [user reporting feature](https://docs.sentry.io/enriching-error-data/user-feedback/?platform=browser).

### http

Type: `object`<br>
Required: `false`<br>
Default: `null`

Configure the HTTP interceptor.

#### http.enabled

Type: `boolean`<br>
Required: `false`<br>
Default: `true`

Enable or disable HTTP intercepting.

#### http.whitelist

Type: `Array<number>`<br>
Required: `false`<br>
Default: `null`

Use a whitelist to filter the intercepted HTTP requests.

#### http.blacklist

Type: `Array<number>`<br>
Required: `false`<br>
Default: `null`

Use a blacklist to filter the intercepted HTTP requests.

## License

MIT © [Pascal Iske](https://pascal-iske.de)
