const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const db = require("./db"); // your SQLite database
const path = require("path");

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: true
}));

// Serve static files from views
app.use(express.static(path.join(__dirname, "views")));

// Auth middleware
function auth(req, res, next) {
    if (!req.session.user) return res.redirect("/login.html");
    next();
}

// Root → index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Register routes
app.get("/register.html", (req, res) => res.sendFile(path.join(__dirname, "views", "register.html")));

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    
    // Check if email already exists
    db.get("SELECT * FROM users WHERE email=?", [email], (err, row) => {
        if (row) return res.send("Email already exists! <a href='/login.html'>Login</a>");
        
        const hashed = bcrypt.hashSync(password, 10);
        db.run("INSERT INTO users (username,email,password) VALUES (?,?,?)", [username, email, hashed], err => {
            if (err) return res.send("Error: " + err.message);
            res.redirect("/login.html");
        });
    });
});

// Login routes
app.get("/login.html", (req, res) => res.sendFile(path.join(__dirname, "views", "login.html")));

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email=?", [email], (err, user) => {
        if (!user) return res.send("No user found! <a href='/register.html'>Register</a>");
        if (!bcrypt.compareSync(password, user.password)) return res.send("Wrong password!");

        req.session.user = user;
        res.redirect("/rate.html"); // redirect to rate page after login
    });
});

// Rate routes
app.get("/rate.html", auth, (req, res) => res.sendFile(path.join(__dirname, "views", "rate.html")));

app.post("/rate", auth, (req, res) => {
    const { store_id, rating } = req.body;
    db.run("INSERT INTO ratings (user_id, store_id, rating) VALUES (?, ?, ?)",
        [req.session.user.id, store_id, rating],
        err => {
            if (err) return res.send("Error storing rating!");
            res.redirect("/dashboard.html"); // go to dashboard after rating
        }
    );
});

// Dashboard route
app.get("/dashboard.html", auth, (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

// API to get all stores (optional, can be used to dynamically load store list)
app.get("/stores", (req, res) => {
    db.all("SELECT * FROM stores", (err, rows) => {
        if (err) return res.send("Error fetching stores!");
        res.json(rows);
    });
});

// Logout route (optional)
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/login.html");
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
