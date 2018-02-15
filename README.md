# Example of REST API Using MongoDB, Node.js and JWT Authentication

### Technologies:
- node.js;
- mongodb;

#### node_modules:
- jasonwebtoken;
- bcrypt;
- bluebird;
- express;
- mongoose;
- cors;
- error-factory;

### How to run this projects:
First of all you need to clone this project in your location folder. You can put this command:

`git clone https://github.com/AlexandreYembo/webapi-nodejs-jwt.git`





After that you need either install/create your local mongo instance or you can set any cloud service to test.

Before run this project you need to install the node modules. You may execute this command in your console or window prompt:

`cd webapi-nodejs-jwt/ `

and after:

`npm-install`

and you will see some packages installing, as the image below:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/npm-install.png "Installing Node Modules")

After that, the project will be able to run, therefore just start the application running this command:

`npm start`

![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/project-running.png "Project running")

The image above points that the application is running. You can test using some third application. I recommend to use Postman, but you are free to choose anyone.

The images bellow point the application running on Postman:

#### login sucessfully:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/PostmanSignIn-Sucess.png "Login sucessfully")

#### login failed:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/User%20invalid.png "Login failed")

#### Token Valid:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/Valid%20Token.png "Token valid")

#### Token expired:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/expired-token.png "Token expired")


#### User registred:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/User%20registred.png "User registred")



