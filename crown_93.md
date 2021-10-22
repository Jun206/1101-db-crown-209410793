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