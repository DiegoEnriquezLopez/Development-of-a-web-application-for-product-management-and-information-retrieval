# Web Application for Product Management
## Description
This project consists of a web application for browsing and managing products related to video games and gaming accessories. It provides a web interface for viewing product information, exploring categories, managing a shopping cart, and administering product records through a backend connected to a MySQL database.The repository also includes a personal portfolio website and several web development exercises.
## Features
- Product Catalog: Browse products and view their information.
- Product Details: Retrieve information about individual products.
- Product Categories: Explore products organized by category.
- Shopping Cart: Access the shopping cart interface.
- Product Management: Create, retrieve, update, and delete product records through the backend.
- Administration Interface: Access the product administration page.
- Personal Portfolio: Includes personal information, skills, projects, hobbies, and contact pages.
- Web Development Exercises: Contains examples and exercises involving HTML, CSS, JavaScript, the DOM, APIs, forms, and other web development concepts.
## Technologies Used
- HTML5: Web page structure.
- CSS3: Styling and layout.
- JavaScript: Client-side functionality and API requests.
- Node.js: Backend runtime environment.
- Express.js: Web server and HTTP request handling.
- MySQL: Relational database for product information.
- npm: Dependency management.
## Installation and Setup
**Prerequisites**
- Make sure the following software is installed:
- Node.js
- npm, included with Node.js
- MySQL

1. Clone the Repository
git clone https://github.com/DiegoEnriquezLopez/Development-of-a-web-application-for-product-management-and-information-retrieval.git
2. Navigate to the API Directory
cd Development-of-a-web-application-for-product-management-and-information-retrieval/API
3. Install Dependencies
npm install
4. Configure the Database
Make sure MySQL is running and configure the database connection in server.js to match your local MySQL installation.

The current server configuration uses the following settings:
- Host: localhost
- User: root
- Database: mysql
- Port: 3000 for the web server

The application expects a database table named products with fields for product ID, name, price, image, category, and description.

If necessary, update the database connection settings and create the required database and table before starting the application.

5. Start the Server
Run the following command from the API/ directory:
node server.js

When the server starts successfully, open the following address in your browser:
http://localhost:3000
## Portfolio and Web Development Exercises
The `Portafolio/` directory contains a personal website with sections featuring fictional personal information, skills, projects, hobbies, and contact information.

It also includes practical exercises covering HTML, CSS, JavaScript, DOM manipulation, APIs, forms, Bootstrap, and other web development topics.
