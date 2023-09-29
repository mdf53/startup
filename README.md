# Startup
## Website:
https://dailydevotional.click/
## Description:
Daily Devotional is a website designed to inspire holy envy within you. Every day you will be presented with a different spiritual message from a religion picked from your preselected list, exposing you to the good and truth found in religions from around the world. From these messages you will gain an inscreased understanding and love for other faiths and grow a deeper connection to your own.

## Design:
Daily Devotional will have a list of all of the religions that it offers info from so that you can learn about them. You will need to login in order for your choices of religions to stay (authentication), you'll need to choose religions to recieve devotionals from (stored data), it will have a help/chat feature (sending to and from with web sockets), the daily devotional itself will be from a websource.

![image](https://github.com/mdf53/startup/assets/102641657/434e3bf2-3897-4a5c-a4e2-5bfcc0bfc513)

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


## Accessing the server:
IP address: 3.218.16.7
Command line argument to access server: 
ssh -i 'Computer Science'/production.pem ubuntu@3.218.16.7
