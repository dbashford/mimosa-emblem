"use strict";

exports.defaults = function() {
  return {
    emblem: {
      extensions: ["emblem", "embl"],
      helpers:["app/template/handlebars-helpers"],
      emberPath: "vendor/ember"
    }
  };
};

exports.placeholder = function() {
  return "\t\n\n" +
         "  emblem:                  # config settings for the Emblem compiler module\n" +
         "    lib: undefined         # use this property to provide a specific version of Emblem\n" +
         "    extensions: [\"emblem\", \"embl\"]  # default extensions for Emblem files\n" +
         "    handlebars: undefined  # Emblem uses Handlebars during compilation, use this property\n" +
         "                           # to provide a specific version of Handlebars for Emblem to use\n" +
         "    helpers:[\"app/template/handlebars-helpers\"]  # the paths from watch.javascriptDir to\n" +
         "                           # the files containing handlebars helper/partial registrations\n" +
         "    emberPath: \"vendor/ember\" # AMD path for the Ember library, this is used as a\n" +
         "                           # dependency in the compiled templates.\n";
};

exports.validate = function( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "emblem config", config.emblem ) ) {

    if ( !config.emblem.lib ) {
      config.emblem.lib = require( "emblem" );
    }

    if ( !config.emblem.handlebars ) {
      config.emblem.handlebars = require( "handlebars" );
    }

    var ec = require( "./resources/ember-compiler" );
    config.emblem.handlebars = ec.makeHandlebars( config.emblem.handlebars );

    if ( validators.isArrayOfStringsMustExist( errors, "emblem.extensions", config.emblem.extensions ) ) {
      if (config.emblem.extensions.length === 0) {
        errors.push( "emblem.extensions cannot be an empty array");
      }
    }

    validators.ifExistsIsArrayOfStrings( errors, "emblem.helpers", config.emblem.helpers );
    validators.ifExistsIsString( errors, "emblem.emberPath", config.emblem.emberPath );

  }

  return errors;
};
