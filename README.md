# ga-module [wip]

> A [Nuxt.js](https://github.com/nuxt/nuxt.js) tiny client-side module for tracking with [Google Analytics](https://analytics.google.com)

## Setup

- Add `@nuxtjs/ga-module` dependency using yarn or npm to your project
- Add `@nuxtjs/ga-module` to modules section of `nuxt.config.js`

```javascript
{
  modules: [
    [ '@nuxtjs/ga-module', { trackingID: 'UA-XXXXXXXX-X' }]
  ]
}
```

For `pageview` hits _only_, if no `params` are provided, then the `document.title` and `location.href` values will be auto-filled. This allows you to send valid requests by writing:

```ga.send('pageview')``` is the same as ```ga.send('pageview', { dt:document.title, dl:location.href })```

## API

### ga(trackerID, options)

#### trackingID
Type: `String`

Your Google Analytics tracker ID; eg `UA-XXXXXXXX-X`

#### options.aip
Type: `Integer`<br>
Default: `0`

Anonymize the sender's IP address. See [Anonymize IP](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aip).

#### options.an
Type: `String`

Specifies the application's name. See [Application Name](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#an).

#### options.aid
Type: `String`

Specifies the application identifier. See [Application ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aid).

#### options.aiid
Type: `String`

Specifies the application installer identifier. See [Application Installer ID](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#aiid).

#### options.av
Type: `String`

Specifies the application verison. See [Application Version](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#av).

#### options.ds
Type: `String`

Indicates the data source type of the hit; eg `web` or `app`. See [Data Source](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ds).


### ga.send(type, params)

#### type
Type: `String`<br>
Default: `pageview`

The type of hit to send. Must be one of these: `pageview`, `screenview`, `event`, `transaction`, `item`, `social`, `exception`, or `timing`.

#### params
Type: `Object`

The parameters to send based on the `type` of hit.

Please follow the links for each available parameter set:

* [Event](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#events)
* [Exception](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#exception)
* [Item](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)
* [Pageview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#content)
* [Screenview](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#cd)
* [Social](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#social)
* [Timing](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#timing)
* [Transaction](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#ecomm)

## License

[MIT](https://opensource.org/licenses/MIT)
