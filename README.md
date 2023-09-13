# P5-Kanap - Build an e-commerce site in JavaScript

<p align="center">
   <img src="https://user.oc-static.com/upload/2021/09/29/16329291678171_image2.png">
</p>

##  Backend
The back folder is used to run the API containing the product data.
### Facility
Just position yourself in the backend folder with a terminal and enter the command ```npm install```
### Starting the server
Simply position yourself in the backend folder with a terminal and enter the command ```node start```
By default the server will be launched on port 3000 ( http://localhost:3000 )
### Route api
There are 3 routes available on the server:

#### GET /api/products/
Allows you to retrieve all available products
#### GET /api/products/{id}
{id}: unique identifier of a product
Allows you to retrieve a product by its identifier
#### POST /api/products/order
Send a command to save it
The command sent must be in the following JSON format:

     {
contact{
firstName: <string>,
lastName: <string>,
address: <string>,
city; <string>,
email: <string>
},
products: [<string>]
}

products being an array of product id.

## Front-end
The frontend present the user part of the application. It must be launched with a local server (live server with vscode for example), and requires that the backend is also launched to function correctly.

### Setup
The config file allows to define the base address of the server, with its host, port and if an ssl certificate is used or not.

<sub>*Warning, the architecture used in this example is a level much higher than expected on this project. Copying this code would result in a high risk of detection of plagiarism in the defense.*</sub>

