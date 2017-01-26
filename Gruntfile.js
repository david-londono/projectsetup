module.exports = function(grunt) {
grunt.initConfig({
  'http-server': {
      'dev': {

          // the server port
          // can also be written as a function, e.g.
          // port: function() { return 8282; }
          port: 8080,

          // the host ip address
          // If specified to, for example, "127.0.0.1" the server will
          // only be available on that ip.
          // Specify "0.0.0.0" to be available everywhere
          host: "0.0.0.0",

          showDir : true,
          autoIndex: true,

          // server default file extension
          ext: "html",

          // run in parallel with other tasks
          runInBackground: false,

          // specify a logger function. By default the requests are
          // sent to stdout.
          logFn: function(req, res, error) { },

          /// Use 'https: true' for default module SSL configuration
          /// (default state is disabled)
          // Tell grunt task to open the browser
          openBrowser : true,

          // customize url to serve specific pages
          customPages: {
              "/index.html": "index.html"
          }

      }

  },
    watch: {
    styles: {
      files: ['**/*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false,
      },
    },
  },sass: {
    dist: {                            // Target
      options: {                       // Target options
        style: 'compressed'
      },
      files: {                         // Dictionary of files
        'css/main.css': 'sass/main.scss'      // 'destination': 'source'
      }
    }
  },
  jasmine: {
    pivotal: {
      src: 'js/*.js',
      options: {
        specs: 'spec/*Spec.js',
        helpers: 'spec/*Helper.js'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-http-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-jasmine');

grunt.registerTask('default', ['jasmine:pivotal','sass','http-server:dev']);
};
