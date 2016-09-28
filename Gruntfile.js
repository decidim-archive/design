'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    cfg: {
      iconsPath: 'source/icons',
      imagesPath: 'source/images'
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
            cwd: '<%= cfg.iconsPath %>/',
            src: ['*.svg'],
            //src: ['*.svg', '*/*.svg'], //with subfolders
            dest: '<%= cfg.iconsPath %>/'
          }
        ]
      }
    },

    // SVG Sprite generator
    svgstore: {
      dev: {
        options: {
          prefix : 'icon-',
          cleanup: false,
          svg: {
            viewBox : '0 0 100 100',
            xmlns: 'http://www.w3.org/2000/svg',
            style: 'display:none'
          }
        },
        src: ['<%= cfg.iconsPath %>/*.svg'],
        //src: ['<%= cfg.iconsPath %>/*.svg', '<%= cfg.shapesPath %>/*/*.svg'],
        dest: '<%= cfg.imagesPath%>/icons.svg'
      },
    },
  });

  grunt.registerTask('svg', ['svgmin', 'svgstore:dev']);
}
