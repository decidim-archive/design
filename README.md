# Decidim Design ([Demo](https://decidim-design.herokuapp.com)) [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy) [![Travis](https://img.shields.io/travis/AjuntamentdeBarcelona/decidim-design.svg)](https://travis-ci.org/AjuntamentdeBarcelona/decidim-design) [![License: AGPL v3](https://img.shields.io/github/license/AjuntamentdeBarcelona/decidim-design.svg)](https://github.com/AjuntamentdeBarcelona/decidim-design/blob/master/LICENSE-AGPLv3.txt)

Decidim Design is an open source project that contains the new design and the front-end implementation of [Decidim Barcelona](http://decidim.barcelona) platform for [Ajuntament de Barcelona](http://ajuntament.barcelona.cat/en/). The platform code can be found at its [own repository](https://github.com/AjuntamentdeBarcelona/decidim).

Uses Grunt to automatize SVG inline generation.

## Development

```
npm install
bundle install
bower install
bundle exec middleman server
```

To update the SVG shapes, place the needed SVG files inside source/shapes and
call:

```
grunt svg
```

## Compatibility

**Browser compatibility:**

* Chrome (current version)
* Safari (current version)
* Firefox (current version)
* Internet Explorer 10 (and upwards)
* Android (current version)
* iOS (current version)

**Supported Resolutions:**

* 320px to 480px (Landscape and portrait)
* 500px to 768px (Portrait versions)
* 768px to 1024px (Landscape versions)
* 1024px to anything (Desktop versions)


