# ski-resorts
[![travis-build](https://img.shields.io/travis/acareaga/ski-resorts.svg?style=flat-square)](https://travis-ci.org/acareaga/ski-resorts)
[![codecov coverage](https://img.shields.io/codecov/c/github/acareaga/ski-resorts.svg?style=flat-square)](https://codecov.io/github/acareaga/ski-resorts)
[![version](https://img.shields.io/npm/v/ski-resorts.svg?style=flat-square)](http://npm.im/ski-resorts)
[![downloads](https://img.shields.io/npm/dm/ski-resorts.svg?style=flat-square)](http://npm-stat.com/charts.html?package=ski-resorts&from=2015-12-22)
[![MIT License](https://img.shields.io/npm/l/ski-resorts.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## Description

The `ski-resorts` module provides an easy to use library of all ski resorts in the United States.

## Installation

With [npm](https://www.npmjs.com/) do:

```
npm install ski-resorts
```

## Usage

Get the entire list:

```
skiResorts.all
```

Or, a random number of resorts:

```
skiResorts.random(3)
```

## Dependencies

The module is built with the following versions:

```
"chai": "3.4.1",
"codecov.io": "0.1.6",
"commitizen": "2.4.6",
"cz-conventional-changelog": "1.1.5",
"ghooks": "1.0.1",
"istanbul": "0.4.1",
"mocha": "2.3.4",
"semantic-release": "^4.3.5"
```

## Built with `ski-resorts`

* [First Tracks](https://github.com/acareaga/first-tracks) - Weather, avalanche, and backcountry data for the snow community.

If you're integrating the module in a creative way, please submit a pull request so your application can be featured above.

## Contributing

To submit patches:
* Fork this repository
* Implement the desired feature with tests (and documentation if necessary)
* Submit a pull request

### Future

Features that would be nice to include: 
* Integration with Forecast.io's weather API

Please open an issue if you have any other updates that would be nice to have.


## License

The `ski-resorts` module is released under the [MIT license](https://opensource.org/licenses/MIT).
