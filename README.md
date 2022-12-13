## Submission for Project 4


**Author:**
Harshit Gajjar Mihir Mesia

**Website Link**
[Link](https://mealbuddyimp.onrender.com/)

**Youtube Link**
[Youtube](https://youtu.be/ctrk_zofnHc)

**Slides**
[Slides](https://docs.google.com/presentation/d/1SA1F1KMbLwWGUKIu_JYuL1rBnGhLtNHnzWSbxaJKzks/edit#slide=id.g1b6a7a985ad_0_59)

**User Testing Report**
[Usability Report](https://drive.google.com/drive/folders/1HRiaKDMK-DO5QW7-mF_Sk6FsRrGpn90w?usp=share_link)

**Project Objective:**
A Fast food delivery application for user’s to order delicious , mouth-watering fast foods such as Pizza and Burger. The website allows users to customize their own pizza/burger and place the order. The website shows the calories for each food item, to help users track the calories they would intake. The users can see their recent order, wishlist, calories consumed so far and much more. The project is intended to get experience working with MongoDB, Express, React and nodeJS, making a MERN stack web application. Also, to make the website usable and accessible for all users

## Installation and running it in local monodb compass (it uses mongoimport)

1. Clone the repository
2. Open it in your favourite editor
3. Start the mongo local server
4. Run **yarn run installDb**
5. Run **yarn install**
6. Run **yarn start**
7. cd frontend
8. Run **yarn install**
9. Run **yarn start**
10. It will take you to localhost://3000

Note (for local running): for the app to work on local, replace the line 39 on package.json of frontend with this **http://localhost:4200** instead of **https://mealbuddy.onrender.com**

## Changes in Project 4
1. Typography
2. Color contrasts
3. Making application keyboard accessible
4. Having a definite color palette
5. Making it usable and accessible for all users

## CRUD OPERATIONS

**Harshit Gajjar**

1. **CREATE** -> Whenever a user clicks on "Proceed to checkout" btn in the cart (right side), a new collection is created named "allOrders", if not exist. If exists it will be updated.
2. **Read** -> On the home page of the app, 1k synthetic records of pizza is read from a collection named "allData"
3. **Update** -> On settings page, user can update their name and password, so the necessary row is updated in collection named "users"
4. **Delete** -> On settings page, user have the option to delete their profile, so we remove their entry from the collection named "users".

**Mihir Mesia**

1. **CREATE** -> User can create a account and a new collection called "users" is created
2. **Read** -> On the Burger-builder page, all the data shown is fetched from collection named "BuildBurger"
3. **Update** -> On home page, user can add a Pizza to wishlist. If the collection named "whishlist" doesn't existed it's created, else it is updated
4. **Delete** -> On wishlist page, user have the option to delete their whislist, so we remove the entry from "whishlist" collection.

## Features

1. Login Page -> The user can login to the MealBuddy app or create account
2. Create Account Page -> The User can register in the website.
3. Home Page -> This page shows the 1k synthetic records of pizza for users to choose and play around with filters
4. Past Orders Page -> Shows the history of all orders made by the loggedin user
5. Wishlist Page -> Shows all the pizza which are wishlist by user
6. Pizza Builder Page -> User can make their own pizza and see real time effects of addition of toppings with images
7. Burger builder Page -> User can make their own burger and see real time effects of addition of toppings with css
8. Calories page -> User can see the pie chart of the calories consumed by them
9. Settings Page -> Allows user to update their details

## Tech Requirements

1. ReactJS
2. CSS3
3. JavaScript
4. NodeJs
5. Express
6. MongoDB
7. Bycrypt

## Class Link

[CS5610 Web Development Course](https://johnguerra.co/classes/webDevelopment_fall_2022/)

## Screenshots


## Branching
We followed the concept of pair progarmming while working on this project

1. main - Contains the final code
2. master - Contains the final code
3. rls/harshit - All code commits by Harshit Gajjar
4. rls/mihir - All code commits by Mihir Mesia
5. rls/master - branch to merge changes from rls/harshit and rls/mihir and **Contains final changes for Project 4**
