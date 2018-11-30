# `@pascaliske/ngx-sentry`

[![npm (scoped)](https://img.shields.io/npm/v/@pascaliske/ngx-sentry.svg?style=flat-square)](https://www.npmjs.com/package/@pascaliske/ngx-sentry) [![GitHub Tag](https://img.shields.io/github/tag/pascaliske/ngx-sentry.svg?style=flat-square)](https://github.com/pascaliske/ngx-sentry) [![Travis CI](https://img.shields.io/travis/com/pascaliske/ngx-sentry/master.svg?style=flat-square)](https://travis-ci.com/pascaliske/ngx-sentry) [![Greenkeeper](https://badges.greenkeeper.io/pascaliske/ngx-sentry.svg?style=flat-square)](https://greenkeeper.io) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Installation

To install the module use the following command:

```bash
$ yarn add @pascaliske/ngx-sentry
```

## Usage

```typescript
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SentryModule } from '@pascaliske/ngx-sentry'
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
