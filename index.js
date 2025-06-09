const express = require("express");
const app = express();
const PORT = 3000;

let name = "nand";
let password = "12346";

// Authenticated middleware
function Middlewareauth(req, res, next) {
  if (name === "nand" && password === "123456") {
    console.log("Authenticated");
    next();
  } else {
    res.send("Cannot Authenticate");
  }
}

// Login Route 
app.get("/login", (req, res) => {
  res.send("Welcome to the login page");
});

// Apply middleware to protected routes
app.use(Middlewareauth);
// universal route
app.get("/", (req, res) => {
  res.send("This is a universal route");
})
// Home Route
app.get("/home", Middlewareauth, (req, res) => {
  res.send("This is Home Page (week-4)");
});

// Post Route
app.post("/post", Middlewareauth, (req, res) => {
  res.send("This is a Post route");
});

// Put Method
app.put("/put", Middlewareauth, (req, res) => {
  res.send("This is a Put route");
});

// Delete Method
app.delete("/delete", Middlewareauth, (req, res) => {
  res.send("This is Delete route");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
