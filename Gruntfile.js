module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: [
        'js/**/*.js',
      ],
    },

    watch: {
      scripts: {
        files: ['js/**/*.js'],
        tasks: ['saved'],
        options: {
          spawn: false
        },
      },
    }

  });

  // Don't worry about this one - it just works. You'll see when you run `grunt`.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('default', [

  ]);

  grunt.registerTask('saved', [
    'jshint',
  ]);

};