mimosa-emblem
===========

## Overview

This is a Emblem compiler for the Mimosa build tool. This module is for use with Mimosa `2.0+`.  This replicates the functionality of the Emblem compiler that was built into Mimosa before `2.0`.

This module targets Emblem's use with Ember. If you are using Emblem outside of Ember, this will likely not work well for you.

For more information regarding Mimosa, see http://mimosa.io

## Usage

Add `'emblem'` to your list of modules.  That's all!  Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will compile Emblem files during `mimosa watch` and `mimosa build`.

This module utilizes all of the built-in template behavior that comes with Mimosa's basic template compiler.  See the [mimosa website](http://mimosa.io/compilers.html#mt) for more information about how templates are treated or check out the various [`template` configuration options](http://mimosa.io/configuration.html#templates).

## Default Config

```coffeescript
emblem:
  lib: undefined
  extensions: [ "embl", "emblem" ]
  helpers:["app/template/handlebars-helpers"]
  emberPath: "vendor/ember"
```

* `lib`: You may want to use this module but may not be ready to use the latest version of Emblem. Using the `lib` property you can provide a specific version of Emblem if the one being used by this module isn't to your liking. To provide a specific version, you must have it `npm install`ed into your project and then provide it to `lib`. For instance: `lib: require('emblem')`.
* `extensions`: an array of strings, the extensions of your Emblem files.
* `helpers`: an array of strings, the paths from `watch.javascriptDir` to the files containing handlebars helper/partial registrations
* `emberPath`: AMD path for the Ember library, this is used as a dependency in the compiled templates.

## Using specific Handlebars or Ember Template Compiler
* `npm install handlebars@` a specific handlebars version into your project and this module will use it.
* `npm install ember-template-compiler@` a specific version into your project and this module will use it.
