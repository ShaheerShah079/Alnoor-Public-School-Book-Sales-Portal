<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
<body>

<h1>Alnoor Public School Book Sales Portal</h1>

<h2>Project Overview</h2>
<p>This project is a web portal developed for Alnoor Public School in Lahore to manage book sales for new school sessions. The portal includes functionalities for adding publishers, updating book information, selling books to customers (parents of children in the school), returning books, and generating bills.</p>

<h2>Technologies Used</h2>
<ul>
    <li>Frontend: React</li>
    <li>Backend: Node.js, Express.js</li>
    <li>Database: MongoDB</li>
    <li>HTTP Client: Axios</li>
</ul>

<h2>Prerequisites</h2>
<ul>
    <li>Node.js installed</li>
    <li>npm installed</li>
</ul>

<h2>Getting Started</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone https://github.com/yourusername/your-repo-name.git</code></pre>

<h3>Backend Setup</h3>
<ol>
    <li>Navigate to the backend directory: <pre><code>cd backend</code></pre></li>
    <li>Install the required dependencies: <pre><code>npm install</code></pre></li>
    <li>Start the backend server: <pre><code>npm start</code></pre></li>
</ol>

<h3>Frontend Setup</h3>
<ol>
    <li>Navigate to the frontend directory: <pre><code>cd frontend</code></pre></li>
    <li>Install the required dependencies: <pre><code>npm install</code></pre></li>
    <li>Start the React development server: <pre><code>npm start</code></pre></li>
</ol>

<h2>Project Structure</h2>

<h3>Frontend</h3>
<p>The frontend is developed using React and includes various components screens Navigate through NavBar and API calls using Axios to backend.</p>
<pre><code>
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── AddBooks.js
│   │   ├── UpdateBook.js
│   │   ├── PurchaseBooks.js
│   │   ├── ReturnBooks.js
│   │   ├── GenerateBill.js
│   │   ├── Publishers.js
│   │   ├── Intro.js
│   │   ├── Navbar.js
│   │   ├── Table.js
│   │   ├── UpdateBooks.js  
│   │   └── ViewBooks.js
│   ├── Services/
│   │   ├──api.js  
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── ...
</code></pre>
<h2>Frontend Screens Explanation</h2>
  <h3>App.js</h3>
  <p><strong>Purpose:</strong> The main component that initializes the application and sets up routing.</p>
  <p><strong>Data Flow:</strong> Routes different paths to specific components. It doesn't directly interact with Axios 
    but enables navigation to other screens that do.</p>
  
  <h3>Intro.js</h3>
  <p><strong>Purpose:</strong> Displays the introductory information about the application.</p>
  <p><strong>Data Flow:</strong> Mostly static content, minimal data interaction.</p>
  
  <h3>Publisher.js</h3>
  <p><strong>Purpose:</strong> AlLow Book Store Owner to manages the addition and display of publishers. 
    User Add publisher Information when he Receive Books From a New Publisher In Market</p>
  <p><strong>Data Flow:</strong> Sends data to Axios for adding new publishers and fetching the list of publishers from the backend and change the Publisher Document in DataBase.</p>
  
  <h3>Navbar.js</h3>
  <p><strong>Purpose:</strong> Provides navigation links to different Screens of the application.</p>
  <p><strong>Data Flow:</strong> Handles user navigation without direct data interaction.</p>
  
  <h3>AddBook.js</h3>
  <p><strong>Purpose:</strong> Allows Owner to add new books.The user fills out a form with book details such as Name, Grade, Quantity, Purchase Rate, Sell Rate, and Publisher Name.
  Upon form submission, the data is sent to the backend using Axios. User Use This Screen when he Receive Books From any Publisher to Store for Resale</p>
  <p><strong>Data Flow:</strong> Sends book details to Axios, which then makes a POST request to the backend to store the book data and change the Book Document in DataBase.</p>
  
  <h3>Generate Bill.js</h3>
  <p><strong>Purpose:</strong> Generates a bill of all purchased books by any unique Customer from the store They Need the Bill id to Generate Bill.</p>
  <p><strong>Data Flow:</strong> Sends a request with bill number to Axios, which fetches the bill details from the backend.</p>
  
  <h3>PurchaseBook.js</h3>
  <p><strong>Purpose:</strong> Manages By owner of store to Sale different book to any customer and after the end Genearte the Bill id of customer transactions.</p>
  <p><strong>Data Flow:</strong> Sends purchase details to Axios, which makes a POST request to the backend to record the purchase by the customer and change the Customer Document in DataBase.</p>
  
  <h3>Return Book.js</h3>
  <p><strong>Purpose:</strong> Manages By owner to return the books Purchased by customer Erlier Use the bill id,Book Name , and Quantity of Books Return bu Customer.</p>
  <p><strong>Data Flow:</strong> Sends return details to Axios, which updates the purchase record of Customer and book inventory in the backend and change the Book or Cutomer Document in DataBase.</p>
  
  <h3>Table.js</h3>
  <p><strong>Purpose:</strong> Displays data in a tabular format, such as lists of all books or all publishers.</p>
  <p><strong>Data Flow:</strong> Fetches data via Axios to display in the table.</p>
  
  <h3>Updatebook.js</h3>
  <p><strong>Purpose:</strong> Allows Owner of Store to update book information(that he Added Earlier in Book Inventory 
    When he Receive Books from Publisher to Store For Resale) if any of the information about books change later.</p>
  <p><strong>Data Flow:</strong> Sends updated book details to Axios, which makes a POST request to update the book data in the backend and change the Book Document in DataBase.</p>
  
  <h3>ViewBook.js</h3>
  <p><strong>Purpose:</strong> Displays the list of all books Detail in the store.</p>
  <p><strong>Data Flow:</strong> Fetches book data from Data base Book Document and display via Axios to in the viewBook Screen.</p>
    
<h3>Backend</h3>
<p>The backend is developed using Node.js and Express.js, with MongoDB as the database. It includes routes for managing books, publishers, and transactions.</p>
<pre><code>
backend/
├── models/
│   ├── BookModel.js
│   ├── PublisherModel.js
│   ├── PurchaseBookModel.js
│   └── ...
├── routes/
│   ├── books.js
│   ├── publisher.js
│   ├── PurchaseBooks.js
│   ├── ReturnBooks.js
│   ├── GenerateBill.js
│   ├── UpdateBook.js
│   └── ...
├── index.js
├── package.json
└── ...
</code></pre>
<h2>Backend Explanation</h2>

<h3>index.js</h3>
<p><strong>Purpose:</strong> Main entry point of the backend server they receive data from axios and send it to correspnd routes files.</p>
<p><strong>Data Flow:</strong> Sets up Express server, connects to MongoDB, and configures middleware (CORS, body-parser).</p>
<p><strong>Routing:</strong> Routes different API endpoints to corresponding route files (e.g., /AddBooks to books.js).</p>

<h3>Route Files</h3>

<h4>Book.js</h4>
<p><strong>Purpose:</strong> Manages book-related operations(ViewBooks , AddBooks , UpdateBooks) in the MongoDB.</p>
<p><strong>Data Flow:</strong> Handles GET and POST requests for book data, interacts with <code>BookModel</code> to fetch or store book information from MongoDB.</p>
<ul>
    <li>GET /ViewBooks - Retrieve all books</li>
    <li>POST /AddBooks - Add a new book</li>
    <li>POST /UpdateBooks - Update book quantity</li>
</ul>

<h4>GenerateBill.js</h4>
<p><strong>Purpose:</strong> Manages bill generation of Customer Purchased books by Bill id .</p>
<p><strong>Data Flow:</strong> Handles POST requests to generate a bill based on purchase books, interacts with <code>PurchaseBook</code> and <code>BookModel</code>.</p>
<ul>
    <li>POST /GenerateBill - Generate a bill for a purchased book by customers</li>
</ul>

<h4>Publisher.js</h4>
<p><strong>Purpose:</strong> Manages publisher-related operations.(GetPublissher , AddPublisher) in the MongoDB</p>
<p><strong>Data Flow:</strong> Handles GET and POST requests for publisher data, interacts with <code>PublisherModel</code> to fetch or store publisher information.</p>
<ul>
    <li>GET /getPublisers - Retrieve all publishers</li>
    <li>POST /Publisers - Add a new publisher</li>
</ul>

<h4>PurchaseBook.js</h4>
<p><strong>Purpose:</strong> Manages books purchase by customer.</p>
<p><strong>Data Flow:</strong> Handles POST requests to record book purchases, interacts with <code>BookModel</code> and <code>PurchaseBook</code> to update inventory and save purchase details.</p>
<ul>
    <li>POST /PurchaseBooks - Purchase books</li>
</ul>

<h4>ReturnBook.js</h4>
<p><strong>Purpose:</strong> Manages the return of books Purchased By Customer.</p>
<p><strong>Data Flow:</strong> Handles POST requests to record book returns, updates <code>PurchaseBook</code> and <code>BookModel</code> to reflect returned books.</p>
<ul>
    <li>POST /ReturnBooks - Return purchased books</li>
</ul>

<h4>UpdateBook.js</h4>
<p><strong>Purpose:</strong> Manages updating book information.</p>
<p><strong>Data Flow:</strong> Handles POST requests to update book details, interacts with <code>BookModel</code> to update inventory.</p>

<h2>Models Files</h2>

<p>The models define the schema for the MongoDB collections used in this project.</p>
<h4>BooksModel.js</h4>
    <p><strong>Purpose:</strong> Defines the schema for storing book data in MongoDB.</p>
    <p><strong>Schema:</strong> Includes fields like Name, Grade, Quantity, PurchaseRate, SellRate, TotalQuantity, PublisherId.</p>
<h4>PublisherModel.js</h4>
    <p><strong>Purpose:</strong> Defines the schema for storing publisher data in MongoDB.</p>
    <p><strong>Schema:</strong> Includes fields like PublisherName and PublisherCell.</p>
<h4>PurchaseBookModel.js</h4>
    <p><strong>Purpose:</strong> Defines the schema for storing purchase transactions in MongoDB.</p>
    <p><strong>Schema:</strong> Includes fields like parentName, studentName, bookId, and bookQuantity.</p>

<h2>How to Use</h2>
<ol>
    <li>Start the backend server as described in the setup section.</li>
    <li>Start the frontend server as described in the setup section.</li>
    <li>Access the web portal in your browser at <code>http://localhost:3000</code>.</li>
    <li>Use the portal to add publishers, manage book inventory, purchase books, return books, and generate bills.</li>
</ol>


</body>
</html>
