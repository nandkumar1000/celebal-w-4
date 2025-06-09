
# 🌐 Express.js Basic Routing & Middleware | Week-4 Task

This repository contains a simple web server built with **Express.js** as part of a Week-4 task for Celebal Technologies. The server demonstrates how to implement basic routing and middleware in a Node.js application.

## 🔧 Technologies Used

- Node.js
- Express.js

## 🚀 Features

- ✅ Setup of a basic web server using Express.js
- ✅ Implementation of middleware for authentication
- ✅ Multiple route handlers (`GET`, `POST`, `PUT`, `DELETE`)
- ✅ Protected routes using middleware
- ✅ Clear structure and easy-to-understand code

## 📂 Project Structure

```

celebal-w-4/
├── index.js         # Main server file
├── package.json     # Node project metadata

````

## 🧠 How It Works

1. The server uses a simple hardcoded authentication middleware to check user credentials.
2. Routes like `/home`, `/post`, `/put`, and `/delete` are **protected** and require successful authentication.
3. The `/login` route is public and does not go through middleware.

## 🛠️ Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

```bash
git clone https://github.com/nandkumar1000/celebal-w-4.git
cd celebal-w-4
npm install
````

### Run the Server

```bash
node index.js
```

Server will start on: `http://localhost:3000`

## 🔐 Middleware Auth Logic

```js
function middlewareAuth(req, res, next) {
  if (name === "nand" && password === "123456") {
    console.log("Authenticated");
    next();
  } else {
    res.send("Cannot Authenticate");
  }
}
```

## 🌍 Available Routes

| Method | Endpoint  | Description         | Auth Required |
| ------ | --------- | ------------------- | ------------- |
| GET    | `/login`  | Login page (public) | ❌             |
| GET    | `/`       | Universal route     | ✅             |
| GET    | `/home`   | Home page           | ✅             |
| POST   | `/post`   | Sample POST route   | ✅             |
| PUT    | `/put`    | Sample PUT route    | ✅             |
| DELETE | `/delete` | Sample DELETE route | ✅             |



## 🙋‍♂️ Author

**Nand Kumar Sahu**
[GitHub Profile](https://github.com/nandkumar1000)

---


