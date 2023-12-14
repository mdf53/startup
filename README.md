# Startup
## Website:
https://dailydevotional.click/
## Description:
Daily Devotional is a website designed to inspire holy envy within you. Every day you will be presented with a different spiritual message from a religion picked from your preselected list, exposing you to the good and truth found in religions from around the world. From these messages you will gain an inscreased understanding and love for other faiths and grow a deeper connection to your own.

## Design:
Daily Devotional will have a list of all of the religions that it offers info from so that you can learn about them. You will need to login in order for your choices of religions to stay (authentication), you'll need to choose religions to recieve devotionals from (stored data), it will have a help/chat feature (sending to and from with web sockets), the daily devotional itself will be from a websource.

![image](https://github.com/mdf53/startup/assets/102641657/434e3bf2-3897-4a5c-a4e2-5bfcc0bfc513)

## Simon:
Added the Simon-React to https://simon.dailydevotional.click

## Startup React


## Startup Websocket
Added in the Chat/Help feature at the bottom of the website.

## Startup Login:
Most of the implementation was done in database.
Changed the code so it would compare login to users in the database instead of the local storage.

## Startup Database:
Setup acces to a MongoDB in the database.js file.
Redid setup of the JavaScript and Services to better match how I wanted to save things in the database.
Made it so that it will store 2 different collections within the database. 
The first one stores username and password pairs, the other stores a username and the list of checkboxes.

## Startup Service:
1: Setup web service with express and made sure the Express server runs and I can access the necessary files.
2: Reformatted folders and some lines of code to ensure that the website runs properly on the Express server.
3: Edited the JS code so that it would load and save which checkboxes were checked to the API

## Startup JavaScript
Added the login button taking you to the devotional page
Made it so you can save your religion preferences in local storage
Made it so every night at midnight the quote/picture/citation is changed to another one in the list build in JavaScript
Added support for the Help Queue

## Using Required Technologies:
I am going to use the required technologies in the following ways.

    HTML - Uses correct HTML structure for application. Four HTML pages: home page, about, info on religions with links to their websites, the daily devotional
    CSS - Making the website look good
    JavaScript - Provides login, ability to choose which religions you want to see, implementing chat/support feature.
    Service - Backend service with endpoints for:
        login
        retrieving choices
        getting devotional
    DB - Store users and thier religion choices
    Login - Register and login users. Credentials securely stored in database. Can't choose which religions you'd like to see if not authenticated.
    WebSocket - Chat/support feature.
    React - Application ported to use the React web framework.
    
## HTML Deliverable
For this deliverable I built out the structure of my application using HTML.

    HTML pages - Four HTML pages: home page, about, links to the scriptures of the religions, the daily devotional
    Links - Links between pages and to the sites with the scriptures
    Text - Descriptions on different things
    Images - Image on about and devotional page
    Login - Input box and submit button for login.
    Database - Scriptures/Quotes pulled from databases
    WebSocket - Online chat/support feature

## WebSocket Data
Currently the placeholder is the button found at the bottom of each page titled Live Help Support

## Third Party Service Calls
Placeholder is found on the devotional page. The scripture will be pulled from 3rd party service calls.

## Database data
Found on the religions tab. Check boxes for which religions they want to see devotionals from.



## Accessing the server:
IP address: 3.218.16.7
Command line argument to access server: 
ssh -i 'Computer Science'/production.pem ubuntu@3.218.16.7
