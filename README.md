# Angular Js Front End Calling Restful Webservices.


1. create clone of git project in your local.
   git clone < git url >
2. npm install
3. bower install
4. grunt serve // To Run the server

-------------------- Import Project in locally --------------------

How to import the node project in eclipse.

1. npm install -g nodeclipse // Globally  Install
2. nodeclipse -g // Locally install settings in your project, now you need to import the project only.

--------------------------------------------------------------------

How to deploy on production or minimize the code.

1. Once you are done with the above steps able to run the code in local you can run the following command.

            grunt build  // It will create minified of your project and created a dist folder and minified code.
			in the dist folder create package.json, server.js and Procfile.
			edit the package.json and install express.
			
			npm install express --save
			
2. run the command grunt buildcontrol : pages	
          
            It will create a new branch in your git hub which have only dist folder.

congratulation you are done with this. You can access your project in following url. <git-user-name>.github.io/project-name

https://rknoulakha.github.io/anglr-rest-ws/			
			
			
****************************************************************************************************

Note : We are using here https instead of ssh so we need to give the user-name/password in the file not a recommended way.

Grunt file : 

pages: {
      options: {
        remote: 'https://git-username:git-password@github.com/rknoulakha/anglr-rest-ws.git',   // git url of the project with username and password
        branch: 'gh-pages'     // Branch will create in git hub which have only dist code.
      }
    },
    heroku: {
      options: {
        remote: 'https://git.heroku.com/anglr-rest-ws.git', // Git URL for Heroku 
        branch: 'master',
        tag: pkg.version
      }
    },
	
We need to define the task as well for the pages need to remove some task because it is also copying the node_module on git which is not recommended.

	
	    grunt.registerTask('pages', [
   'clean:dist',
    'wiredep',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'ngtemplates',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

****************************************************************************************************
	
			


