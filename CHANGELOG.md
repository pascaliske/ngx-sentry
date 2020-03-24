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



