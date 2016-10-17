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

-------------------- Deploy Project on Heroku and Git ---------------

How to deploy on production/heroku or minimize the code.

1. Once you are done with the above steps able to run the code in local you can run the following command.

            grunt build  // It will create minified of your project and created a dist folder and minified code.
			in the dist folder create package.json, server.js and Procfile.
			edit the package.json and install express.
			
			npm install express --save
			
2. run the command grunt buildcontrol : pages	
          
            It will create a new branch in your git hub which have only dist folder.

congratulation you are done with this. You can access your project in following url. git-user-name.github.io/project-name

https://rknoulakha.github.io/anglr-rest-ws/			
			
3. run the command 

1. heroku login
2. heroku create url-name
3. grunt buildcontrol : heroku
4. heroku open

If you face the problem while deploy then deploying it better using Heroku Website. Follow the below instruction :
Personal apps : Go to your app : Deploy : Select GitHub on deployment method : Configure/Connect your app  with your Git URL and Path. 
You can automatically deploy your app or choose manually (for mnually click Deploy Branch). In this project I'm using gh-pages branch.

-------------------- URL of GIT and Heroku ---------------
		
eg : https://anglr-rest-ws.herokuapp.com
	 https://rknoulakha.github.io/anglr-rest-ws
	
			


