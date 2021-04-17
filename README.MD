# swagger-express-api-baseline

Creates a simple swagger express API endpoint baseline using nodejs.

The main goal of this project is to quickly spin up a project that allows you to define api's using the OpenApi Specification.

# Running locally
1. Run `npm install`
2. Run `npm start`

Visit http://localhost:10014/api-docs to see the documentation. Note: If no PORT is defined on the .env file, the default port is assigned: 10014.

To test visit http://localhost:10014/v1/hello using your browser or postman.

# Defining new endpoints
To define new endpoints, create a new path in the ~/swagger/swagger.yaml file.
You can assign a new controller or use the existing one.

The `x-swagger-router-controller` property needs to have the same name as the new controller filename.
The `operationId` is the exported name function for the controller.
The `basePath` property is optional, in case you need your endpoint to have a base path.

Visit https://swagger.io/specification/v2/ for more information on how to use the open API specification.
