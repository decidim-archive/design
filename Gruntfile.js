'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    cfg: {
      shapesPath: 'source/shapes',
      partialsPath: 'source/partials'
    },

    // Optimize the SVGs dropped inside the icons folder
    svgmin: {
      dev: {
        options: {
          plugins: [
            {
              removeTitle: true
            }
          ]
        },
        files: [
          {
            expand: true,
            cwd: '<%= cfg.shapesPath %>/',
            src: ['*.svg', '*/*.svg'],
            dest: '<%= cfg.shapesPath %>/'
          }
        ]
      }
    },

    // SVG Sprite generator
    svgstore: {
      dev: {
        options: {
          prefix : 'shape-',
          cleanup: false,
          svg: {
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            style: 'display:none'
          }
        },
        src: ['<%= cfg.shapesPath %>/*.svg', '<%= cfg.shapesPath %>/*/*.svg'],
        dest: '<%= cfg.partialsPath %>/_shapes.html.erb'
      },
    },
  });

  grunt.registerTask('svg', ['svgmin', 'svgstore:dev']);
}