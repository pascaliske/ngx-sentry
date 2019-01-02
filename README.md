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

## License

MIT © [Pascal Iske](https://pascal-iske.de)
