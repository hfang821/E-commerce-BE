# E-commerce Back End

npm Sequelize & Object-Relational Mapping

## Description:

* This program is designed to perform CRUD (Create, Read, Update, Delete) operations from a relational databse.
* This project was completed based on the Node.js, mysql database, npm Sequelize and tested in a backend environment (Insomnia).
* I have learned the ways to work at the server-side of javaScript database development, so that the front-end is able to retrieve the data by a set of sequelize statements.

## Built By:
* JavaScript
* Node.js
* npm (mysql2)
* npm (sequelize)
* npm (dotenv)
* Prettier

# Wall-Around Installation Video
* How to install & how to use: 
* Testing the CRUD Operations: 


## How to Install:
* Open Gitbash/terminal, navigate towards your project location from your root by using "cd ./ project location"
* Choose a clone option from the "E-commerce-BE" repository (either HTTPS or SSH should work)
* In Gitbash, type "git clone HTTPS or SSH"
* Once the clone is successful, navigate to the root directory of this repo.
* Enter `npm i` into the terminal to install all dependencies linked in the `package.json` file.

## How to initialize the database:
1. In your command window/gitbash shell, enter `mysql -u root -p` and then type your password of your sql account.
![image](https://user-images.githubusercontent.com/95199209/169615610-46de210e-2e5b-4b8b-8c59-6ee869850ec2.png)

2. type in `source db/schema.sql` to feed the relational tables into the database.
![image](https://user-images.githubusercontent.com/95199209/169615691-104af2c3-036e-46bc-9c4e-aca7b25d122d.png)


3. Exit the sql CLI, and seed the database by typing `npm run seeds`.
![image](https://user-images.githubusercontent.com/95199209/169615758-724fe95a-9491-4310-aac5-c0c930a94994.png)


## How to Use:
1. Type `npm start` or `node server.js` to start the local server.
![image](https://user-images.githubusercontent.com/95199209/169616730-e3e9c7d0-28ff-47fc-9fde-94caa747e5ad.png)

2. Open the Insomnia app, perform the necessary `GET` `POST` `Delete` `PUT` requests with the appropriate routes. (Will be shown in details in the demonstration video)
![image](https://user-images.githubusercontent.com/95199209/169616769-ed8cd847-9342-42b2-ad00-e6b381b74548.png)


---

### ©️2022 Kevin (Haoyu) Fang
