
---

# E-commerce API Documentation

Welcome to the documentation for the E-commerce API. This API provides various endpoints to manage categories, products, users, and orders for an e-commerce platform. It is built using Node.js with the Express.js framework.

## Table of Contents

1. [Getting Started](#getting-started)
2. [API Endpoints](#api-endpoints)
   - [Category](#category)
   - [Products](#products)
   - [User](#user)
   - [Order](#order)
3. [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)

## Getting Started

To use the E-commerce API, you'll need to make HTTP requests to specific endpoints. This documentation will guide you through the available endpoints and their usage.

To run this application locally, follow these steps:

1. Clone the repository.
2. Create a `.env` file in the project root and define the necessary environment variables (see [Environment Variables](#environment-variables)).
3. Install the required dependencies using `npm install` or `yarn install`.
4. Start the server using `npm start` or `yarn start`.

## API Endpoints

### Category

- **GET /category**
  - Description: Get a list of all product categories.
  - Request: None
  - Response: Array of category objects.
  - Example:
    ```json
    [
      {
        "id": 1,
        "name": "Electronics"
      },
      {
        "id": 2,
        "name": "Clothing"
      }
    ]
    ```

- **POST /category**
  - Description: Create a new product category.
  - Request: JSON object with a "name" field.
  - Response: The newly created category object.
  - Example Request:
    ```json
    {
      "name": "Furniture"
    }
    ```
  - Example Response:
    ```json
    {
      "id": 3,
      "name": "Furniture"
    }
    ```

### Products

- **GET /products**
  - Description: Get a list of all products.
  - Request: None
  - Response: Array of product objects.
  - Example:
    ```json
    [
      {
        "id": 1,
        "name": "Smartphone",
        "price": 499.99,
        "category_id": 1
      },
      {
        "id": 2,
        "name": "T-shirt",
        "price": 19.99,
        "category_id": 2
      }
    ]
    ```

- **POST /products**
  - Description: Create a new product.
  - Request: JSON object with "name," "price," and "category_id" fields.
  - Response: The newly created product object.
  - Example Request:
    ```json
    {
      "name": "Laptop",
      "price": 899.99,
      "category_id": 1
    }
    ```
  - Example Response:
    ```json
    {
      "id": 3,
      "name": "Laptop",
      "price": 899.99,
      "category_id": 1
    }
