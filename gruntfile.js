module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            'build/*'
          ]
        }]
      }
    },

    copy: {
      build: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'public',
            src: [
              'assets/**/*',
              'css/**/*.css',
              'js/**/*.js'
            ],
            dest: 'build',
          },
        ],
      },
    },

    stylus: {
      compile: {
        options: {
          paths: ['public/css/main.styl'],
          use: [
            require('nib') // use stylus plugin at compile time
          ]
        },
        files: {
          'build/css/main.css': 'public/css/main.styl',
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          'build/index.html': ['views/index.jade']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-requirejs');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Build Tasks
  grunt.registerTask('build', [
    'clean',
    'copy',
    'stylus',
    'jade',
  ]);
};