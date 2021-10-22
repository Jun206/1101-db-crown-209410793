# First One


## 1. ##
#### Chrome 截圖 ####
![](https://img.onl/ZNAlVf)

``` html
<h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <p></p>
  <h3>My name is
    <%= name %>
  </h3>
  <h3>My student id is
    <%= id %>
  </h3>
  ```
  ### index js ###
  ```js
  router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'JunKai Huang',
    id: '209410793',
  });
});

```
***
## 2. ##
#### Chrome 截圖 ####
![](https://i.imgur.com/efMVfVH.jpg)
#### js 截圖 ####
![](https://img.onl/g73N9A)
#### ejs 截圖 ####
![](https://img.onl/pOKktW)
***
## 3. ## 
#### pgAdmin 截圖 ####
![](https://img.onl/FvNwgg)
#### tar Restore 截圖 ####
![](https://i.imgur.com/igBLdP0.png)
#### node database 截圖 ####
![](https://i.imgur.com/3H9a76Z.png)

``` database.js code
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'crown_93',
    password: '0000',
    port: '5432',
});

pool.query('SELECT * from category_93', (err, res) => {
    console.log(JSON.stringify(res.rows));
    pool.end();
});

module.exports = pool;
```
***
## 4. ##
#### Chrome 截圖 ####
![](https://img.onl/0cfBO2)
#### GitHub Repositories URL ####
![](https://img.onl/Oca6ay)
#### Heroku URL ####
![](https://img.onl/yetdoW)

***

## 5. ##

#### pgAdmin截圖 ####
![](https://img.onl/adIX5R)
***
![](https://img.onl/aYZpAF)
#### Heroku 截圖 ####
![](https://img.onl/wHJmLH)

#### Heroku DATABASE_URL ####

```
postgres://meychmjnqhpfdh:63e485854897644773333c96ea6b10bdcf4c1db5f9e599a132266ae3aeb4910c@ec2-3-222-24-200.compute-1.amazonaws.com:5432/dafarn62f3tu40

host: ec2-3-222-24-200.compute-1.amazonaws.com
port: 5432
database: dafarn62f3tu40
username: meychmjnqhpfdh
password: 63e485854897644773333c96ea6b10bdcf4c1db5f9e599a132266ae3aeb4910c
```
***
## 6. ##

#### app.js
```
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
let crown_93Router = require("./routes/crown_93");
let crown2_93Router = require("./routes/crown2_93");
let api_93Router = require("./routes/api_93");
const cors = require("cors");
var app = express();

//API Setting
app.use(
  cors({
    origin: ["https://heroku-crown-93.herokuapp.com/"],
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/crown_93", crown_93Router);
app.use("/crown2_93", crown2_93Router);
app.use("/api_93", cors(), api_93Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
```
***

#### crown2_93.js ####
```
var express = require("express");
var router = express.Router();
const crown2Controller_93 = require("../controllers/crown2Controller_93");

/* GET home page. */
router.get("/", crown2Controller_93.getCategories);

module.exports = router;
```
***
#### crown2_ejs ####

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crown Clothing</title>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
    <div class="header">
        <a href="/" class="logo-container">
            <img src='./assets/crown.svg' />
        </a>
        <div class="options">
            <a href="./overview.html" class="option">Shop</a>
            <a href="/shop" class="option">Contact</a>
            <a href="/signin" class="option">Sign In</a>
            <div class="cart-icon" onclick="cartToggle()">
                <img class="shopping-icon" src="./assets/shopping-bag.svg" alt="">
            </div>
            <div class="cart-dropdown">
                <div class="cart-items">
                    <div class="cart-item">
                        <img src="https://i.ibb.co/QdJwgmp/brown-cowboy.png" alt="item">
                        <div class="item-details">
                            <span class="name">Brown Cowboy</span>
                            <span class="price">4 * $35</span>
                        </div>
                    </div>
                    <div class="cart-item">
                        <img src="https://i.ibb.co/mJS6vz0/blue-jean-jacket.png" alt="item">
                        <div class="item-details">
                            <span class="name">Blue Jean Jacket</span>
                            <span class="price">1 * $90</span>
                        </div>
                    </div>
                </div>
                <button class="custom-button">GO TO CHECKOUT</button>
            </div>
        </div>
    </div>
    <p>
        <%= title %> --<%= name %>
                <%= id %>
    </p>
    <div class="homepage">
        <div class="directory-menu">
            <% data.forEach((item)=>{ %>
                <div class="large menu-item">
                    <img class="background-image" src=<%=item.remote_url %> alt="">
                    <a href="./mens.html" class="content">
                        <h1 class="title">
                            <%= item.name %>
                        </h1>
                        <span class="subtitle">SHOP NOW</span>
                    </a>
                </div>
                <% })%>
        </div>
    </div>

    <script>
        function cartToggle() {
            p = document.querySelector('.cart-dropdown');
            p.classList.toggle("show");
        }
    </script>
</body>

</html>
```
![](https://i.imgur.com/SPytYP4.jpg)

***

## 8. ##

![](https://i.imgur.com/5n60cAT.png)

# [Github連結](https://github.com/Jun206/1101-db-crown-209410793)
***

## 9. ##
![](https://i.imgur.com/r0I6sJK.png)
