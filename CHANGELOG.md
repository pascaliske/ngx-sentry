## [6.0.3](https://github.com/pascaliske/ngx-sentry/compare/v6.0.2...v6.0.3) (2024-12-11)


### Features

* upgrade angular to v19.0.4 ([e992f10](https://github.com/pascaliske/ngx-sentry/commit/e992f10b175fba65fccd12b8adc65498215a1856))



## [6.0.2](https://github.com/pascaliske/ngx-sentry/compare/v6.0.1...v6.0.2) (2024-12-05)


### Features

* upgrade angular to v19.0.3 ([30c7845](https://github.com/pascaliske/ngx-sentry/commit/30c7845cd6a005d9ed567df4e45ac05636f04949))



## [6.0.1](https://github.com/pascaliske/ngx-sentry/compare/v6.0.0...v6.0.1) (2024-11-27)



# [6.0.0](https://github.com/pascaliske/ngx-sentry/compare/v5.0.1...v6.0.0) (2024-11-27)


### Features

* migrate to a provider function based library ([e5319dc](https://github.com/pascaliske/ngx-sentry/commit/e5319dcb58f7cb32c73ce06f23f48d1b2c1b275a))
* rename options token in preparation for provider based library ([d560da8](https://github.com/pascaliske/ngx-sentry/commit/d560da8f960246fbebd10e3fe9c589a497705468))
* upgrade angular to v19 ([d09fd93](https://github.com/pascaliske/ngx-sentry/commit/d09fd93f847a936a5ee81bf86b892cf47a56fe72))


### BREAKING CHANGES

* The bootstrap process of this library changed from a
module based one to a provider function based one. Replace calls to
`SentryModule.forRoot()` with `provideSentry()`.
* In preparation for a standalone compatible library the
options token interface was renamed from `ModuleOptions` to
`SentryOptions`.



## [5.0.1](https://github.com/pascaliske/ngx-sentry/compare/v5.0.0...v5.0.1) (2024-08-24)


### Bug Fixes

* **deps:** update dependency zone.js to ~0.15.0 ([8da4b18](https://github.com/pascaliske/ngx-sentry/commit/8da4b184f2f63956d7a11c5ed7cdbd57769b2209))


### Features

* update angular to v18.2.1 ([20a811c](https://github.com/pascaliske/ngx-sentry/commit/20a811c5e4f5308758e6b2cc4097616f0a4fff85))



# [5.0.0](https://github.com/pascaliske/ngx-sentry/compare/v4.2.0...v5.0.0) (2024-08-19)


### Bug Fixes

* **deps:** update dependency zone.js to ~0.14.0 ([cd3ce42](https://github.com/pascaliske/ngx-sentry/commit/cd3ce42116acb5cd36169fd0bc4f88f28f9faf41))


### Features

* update angular to v18 ([4626928](https://github.com/pascaliske/ngx-sentry/commit/4626928acc6358f6c9fb91c838cc06e9799adca4))
* update angular-eslint stack to latest versions ([7441a77](https://github.com/pascaliske/ngx-sentry/commit/7441a77ef018ac3185382dcbab2c75c4a9db3e19))



# [4.2.0](https://github.com/pascaliske/ngx-sentry/compare/v4.1.0...v4.2.0) (2023-06-19)


### Bug Fixes

* **deps:** update dependency rxjs to ~7.6.0 ([26c2357](https://github.com/pascaliske/ngx-sentry/commit/26c23570d9da6fd11674e9688c557d9d0babb1c7))
* **deps:** update dependency rxjs to ~7.8.0 ([ad871f0](https://github.com/pascaliske/ngx-sentry/commit/ad871f0527d4465105ce1d225a2b2bb0f2eb9d81))
* **deps:** update dependency zone.js to ~0.12.0 ([8264bbb](https://github.com/pascaliske/ngx-sentry/commit/8264bbb02aca4ffb421ce5e118acdf0d4d60b161))
* **deps:** update dependency zone.js to ~0.13.0 ([e883112](https://github.com/pascaliske/ngx-sentry/commit/e883112a5f8129ba39cd3b2fec148cb5a7b9bfac))


### Features

* upgrade angular to v16 ([dc9b5d2](https://github.com/pascaliske/ngx-sentry/commit/dc9b5d29d1c1c9de7945bb83e9ff476eeccc7200))



# [4.1.0](https://github.com/pascaliske/ngx-sentry/compare/v4.0.2...v4.1.0) (2022-07-12)


### Features

* implement angular 14 compatibility ([66ca897](https://github.com/pascaliske/ngx-sentry/commit/66ca897a2dbdcd99e260d985d9dc07edab170efa))



## [4.0.2](https://github.com/pascaliske/ngx-sentry/compare/v4.0.1...v4.0.2) (2022-03-03)



## [4.0.1](https://github.com/pascaliske/ngx-sentry/compare/v4.0.0...v4.0.1) (2022-02-15)



# [4.0.0](https://github.com/pascaliske/ngx-sentry/compare/v3.0.1...v4.0.0) (2022-02-14)


### Features

* enable partial compilation mode using ivy ([14c3b9b](https://github.com/pascaliske/ngx-sentry/commit/14c3b9bd6425b5d9b0a65f3af4492686d441f2f9))


### BREAKING CHANGES

* This library is now distributed using partial compilation mode for Angular Ivy.
See here for more information: https://github.com/angular/angular/issues/38366



## [3.0.1](https://github.com/pascaliske/ngx-sentry/compare/v3.0.0...v3.0.1) (2021-05-02)


### Bug Fixes

* rename deprecated peer dependency setting ([bca8611](https://github.com/pascaliske/ngx-sentry/commit/bca8611ce70461ca07a571378a0b021784ab2f42))
* **handler:** do not re-throw error after logging to sentry ([f0a2bb0](https://github.com/pascaliske/ngx-sentry/commit/f0a2bb0124f980989981e4b133955c61cef65f8b))
* **handler:** provide handler service in root injector ([63d0c90](https://github.com/pascaliske/ngx-sentry/commit/63d0c9036b2d1007abea2587aded74342ed09828))



# [3.0.0](https://github.com/pascaliske/ngx-sentry/compare/v2.3.1...v3.0.0) (2021-05-01)



## [2.3.1](https://github.com/pascaliske/ngx-sentry/compare/v2.3.0...v2.3.1) (2020-07-25)



# [2.3.0](https://github.com/pascaliske/ngx-sentry/compare/v2.2.3...v2.3.0) (2020-07-25)



## [2.2.3](https://github.com/pascaliske/ngx-sentry/compare/v2.2.2...v2.2.3) (2020-03-24)



## [2.2.2](https://github.com/pascaliske/ngx-sentry/compare/v2.2.1...v2.2.2) (2020-02-28)


### Bug Fixes

* **interceptor:** always clone requests before handling ([52eb9d6](https://github.com/pascaliske/ngx-sentry/commit/52eb9d60b410ac54aa3b70b2a3d4ff76f6dbc139))



## [2.2.1](https://github.com/pascaliske/ngx-sentry/compare/v2.2.0...v2.2.1) (2020-02-14)



# [2.2.0](https://github.com/pascaliske/ngx-sentry/compare/v2.1.3...v2.2.0) (2020-02-14)



## [2.1.4](https://github.com/pascaliske/ngx-sentry/compare/v2.1.3...v2.1.4) (2020-01-13)



## [2.1.3](https://github.com/pascaliske/ngx-sentry/compare/v2.1.2...v2.1.3) (2019-06-28)



## [2.1.2](https://github.com/pascaliske/ngx-sentry/compare/v2.1.1...v2.1.2) (2019-06-27)



## [2.1.1](https://github.com/pascaliske/ngx-sentry/compare/v2.1.0...v2.1.1) (2019-06-18)



# [2.1.0](https://github.com/pascaliske/ngx-sentry/compare/v2.0.0...v2.1.0) (2019-06-05)


### Features

* compatibility update for angular v8 ([288fc99](https://github.com/pascaliske/ngx-sentry/commit/288fc99)), closes [#42](https://github.com/pascaliske/ngx-sentry/issues/42) [#43](https://github.com/pascaliske/ngx-sentry/issues/43) [#47](https://github.com/pascaliske/ngx-sentry/issues/47) [#48](https://github.com/pascaliske/ngx-sentry/issues/48) [#49](https://github.com/pascaliske/ngx-sentry/issues/49)



# [2.0.0](https://github.com/pascaliske/ngx-sentry/compare/v1.4.1...v2.0.0) (2019-04-03)


### Bug Fixes

* **package:** update core-js to version 3.0.0 ([e26b349](https://github.com/pascaliske/ngx-sentry/commit/e26b349))


### BREAKING CHANGES

* Upgrade peer dependency of @sentry/browser to >= v5.0.5 for smaller bundle sizes.



## [1.4.1](https://github.com/pascaliske/ngx-sentry/compare/v1.4.0...v1.4.1) (2019-03-19)


### Bug Fixes

* optional and missing http property should not raise error ([375ff99](https://github.com/pascaliske/ngx-sentry/commit/375ff99))



# [1.4.0](https://github.com/pascaliske/ngx-sentry/compare/v1.3.4...v1.4.0) (2019-03-04)


### Bug Fixes

* **sentry:** change sentry imports ([255ec57](https://github.com/pascaliske/ngx-sentry/commit/255ec57))
* **sentry:** move sentry library to peer dependencies ([e882e02](https://github.com/pascaliske/ngx-sentry/commit/e882e02))



## [1.3.4](https://github.com/pascaliske/ngx-sentry/compare/v1.3.3...v1.3.4) (2019-02-22)



## [1.3.3](https://github.com/pascaliske/ngx-sentry/compare/v1.3.2...v1.3.3) (2019-02-22)


### Bug Fixes

* **exports:** export all parts manually ([cdcc86a](https://github.com/pascaliske/ngx-sentry/commit/cdcc86a))


### Features

* **sentry:** add scope methods for configuring and using sentry scopes ([cd6e299](https://github.com/pascaliske/ngx-sentry/commit/cd6e299))



## [1.3.2](https://github.com/pascaliske/ngx-sentry/compare/v1.3.1...v1.3.2) (2019-02-01)



## [1.3.1](https://github.com/pascaliske/ngx-sentry/compare/v1.2.2...v1.3.1) (2019-01-17)


### Bug Fixes

* **sentry:** move report dialog call to init function ([ae35c04](https://github.com/pascaliske/ngx-sentry/commit/ae35c04))


### Features

* **sentry:** use new esm build for smaller build sizes ([5d8ed70](https://github.com/pascaliske/ngx-sentry/commit/5d8ed70))



## [1.2.2](https://github.com/pascaliske/ngx-sentry/compare/v1.2.1...v1.2.2) (2019-01-14)


### Bug Fixes

* **interceptor:** fix http message placeholder replacement ([8d17135](https://github.com/pascaliske/ngx-sentry/commit/8d17135)), closes [#6](https://github.com/pascaliske/ngx-sentry/issues/6)



## [1.2.1](https://github.com/pascaliske/ngx-sentry/compare/v1.2.0...v1.2.1) (2019-01-09)


### Bug Fixes

* **demo:** update demo app ([222c530](https://github.com/pascaliske/ngx-sentry/commit/222c530))
* **exports:** export service in public api ([5183f8a](https://github.com/pascaliske/ngx-sentry/commit/5183f8a))



## [1.2.0](https://github.com/pascaliske/ngx-sentry/compare/v1.1.0...v1.2.0) (2019-01-08)


### Bug Fixes

* **interceptor:** move interceptor config into http namespace and allow disabling http interception ([5cbfcc5](https://github.com/pascaliske/ngx-sentry/commit/5cbfcc5))


### Features

* **handler,interceptor:** allow optional user reporting with the built in report dialog ([733c589](https://github.com/pascaliske/ngx-sentry/commit/733c589))
* **interceptor:** allow custom message for capturing http errors ([441694f](https://github.com/pascaliske/ngx-sentry/commit/441694f))
* **sentry:** add an sentry service for reporting manual events to sentry ([fb19f9c](https://github.com/pascaliske/ngx-sentry/commit/fb19f9c))
* **sentry:** allow configuring the report dialog ([dd60724](https://github.com/pascaliske/ngx-sentry/commit/dd60724))



## [1.1.0](https://github.com/pascaliske/ngx-sentry/compare/v1.0.0...v1.1.0) (2018-12-04)


### Features

* **module:** add injectable sentry http interceptor ([0a7d936](https://github.com/pascaliske/ngx-sentry/commit/0a7d936))



