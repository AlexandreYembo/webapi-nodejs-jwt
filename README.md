# Example of REST API using MongoDB, Node.js and JWT Authentication

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



After that you need either install/create your local mongo instance or you can set any cloud service to test. You need to change the config.js file, puting your connection string of mongodb, such as:

`src/config.js`

`module.exports = {
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING ||  [PUT_YOUR_CONNECTION_STRING_HERE],
  KEY_JWT: process.env.KEY_JWT || '4b40460a-3488-40d3-9f1e-7f1a2de5518a',
  TOKEN_EXPIRES_TIME: 60
} `


Before run this project you need to install the node modules. You may execute this command in your console or window prompt:

`cd webapi-nodejs-jwt/ `

and after:

`npm-install`

and you will see some packages installing, as the image below:
![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/npm-install.png "Installing Node Modules")

After that, the project will be able to run, therefore just start the application running this command:

`npm start`

![Alt text](https://github.com/AlexandreYembo/webapi-nodejs-jwt/blob/master/images/project-running.png "Project running")


The image above points that the application is running. You can test using some third application. 
I recommend to use Postman, but you are free to choose anyone. If you choose for Postman you can use this collection, just import this one using this link: https://www.getpostman.com/collections/2ae2cd24436d44c2d3be

If you prefer, you can run using curl command such as:

#### Executing login command
`curl --request POST   --url 'http://localhost:3000/signIn'   --data 'email=teste%40gmail.com&password=123'`

#### Executing Register command
`curl --request POST \
  --url 'http://localhost:3000/register' \
  --data 'email=teste%40gmail.co&password=123&fullName=Alexandre%20Yembo'`

#### Executing List command
`curl --request GET \
  --url 'http://{{API_URL}}/list' \
  --header 'Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQWxleGFuZHJlIFllbWJvIiwiX2lkIjoiNWE2MjdhZjJkNzVmNzA0MGNjY2RiODhmIiwiaWF0IjoxNTE2OTkwMDczLCJleHAiOjE1MTY5OTAxMzN9.eW-4p2DOo-IB7ZR_gEIznp_0U1Vz06tBXwfrN4d4WbQ'`


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




