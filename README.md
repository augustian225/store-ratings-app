# store-ratings-app
# 🛒 Store Rating App  

A simple web application that allows users to **rate and review stores**, helping businesses build trust and customers make better choices.  

---

## ✨ Features  

- ⭐ Rate stores (1–5 stars)  
- 📝 Write and read reviews  
- 📊 View average ratings in real time  
- 🔍 Search for stores by name or category  
- 🔐 Optional login system to avoid spam  
- ⚡ Lightweight, fast, and easy to use  

---

## 🏗️ Tech Stack  

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js (Express)  
- **Database:** SQLite / MySQL (depending on your setup)  
- **Authentication:** Express-session / JWT (optional)  

---

## 🚀 How It Works  

1. **Users browse/search** for a store.  
2. They can **give a star rating** and leave an optional review.  
3. The system stores the rating/review in the database.  
4. The app calculates the **average rating** for each store.  
5. Reviews + ratings appear instantly for everyone.  

📌 Example:  
- Store: *Blueberry Café*  
- Ratings: ⭐⭐⭐⭐ (4.5 avg. from 120 reviews)  
- Reviews:  
   - “Best pancakes ever!”  
   - “Good vibe, but service is slow.”  

store-rating-app/📂 Project Structure
│
├── views/                # HTML templates
│   ├── index.html        # Homepage
│   ├── login.html        # Login page
│   ├── register.html     # Registration page
│   ├── dashboard.html    # User dashboard
│   └── rate.html         # Store rating page
│
├── public/               # Static files (CSS, JS, images)
│
├── db/                   # Database folder
│   └── store.db          # SQLite database file
│
├── server.js             # Main backend server (Express)
├── package.json          # Dependencies
└── README.md             # Project documentation

⚙️ Installation & Setup

step 1Clone the repo

git clone https://github.com/yourusername/store-rating-app.git
cd store-rating-app


 step2 Install dependencies

npm install


 step 3Run the server

node server.js


step 4Open in browser

http://localhost:3000
screenshots
<img width="1902" height="981" alt="image" src="https://github.com/user-attachments/assets/7827cedb-a3f6-48bb-ad65-1e8e5daa2cae" />
<img width="1912" height="987" alt="image" src="https://github.com/user-attachments/assets/e7400113-b884-47ad-bbbd-3c14cca0bc85" />
<img width="1915" height="983" alt="image" src="https://github.com/user-attachments/assets/69889cff-8f0d-47bf-ba92-c4e5bd9e46af" />







