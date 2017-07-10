module.exports = function (grunt) {
  //Imports
  // grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-exec");
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-properties-reader');



  grunt.initConfig({
    properties: {
      app: 'enviroment.properties'
    },
    exec: {
      dev: {
        cmd: 'ng serve --host 127.0.0.1 --port ' + '<%= app.deployDir %>'
      },
      prod: {
        cmd: 'ng serve --host 127.0.0.1  --port ' + '<%= app.deployDir %>'
      }

    },
    clean: {
      deployDir: '<%= app.deployDir %>'
    }
  });
  //Tasks
  grunt.registerTask("serveDev", ['properties','exec:dev']);
  grunt.registerTask("serveProd", ['properties','exec:prod']);
  grunt.registerTask('cleanDeploy', ['properties', 'clean:deployDir'])
};
