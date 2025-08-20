const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ratings.db");

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT UNIQUE, password TEXT, role TEXT DEFAULT 'user')");
  db.run("CREATE TABLE IF NOT EXISTS stores (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS ratings (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INT, store_id INT, rating INT)");
});

// Insert some stores for testing
db.run("INSERT OR IGNORE INTO stores (id,name) VALUES (1,'Walmart'),(2,'Target'),(3,'Best Buy')");

module.exports = db;
