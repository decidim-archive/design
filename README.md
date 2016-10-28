# Decidim Design

Decidim Design is an open source project that contains the new design and the front-end implementation of the [Decidim Barcelona](http://decidim.barcelona) platform, from [Ajuntament de Barcelona](http://ajuntament.barcelona.cat/en/).

Developed originally by [MarsBased](http://www.marsbased.com).
Developed with [Middleman](https://middlemanapp.com/).
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


