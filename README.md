# datasheet-storefront

Datasheet generator from BigCommerce Storefront API
Uses tokens to access queries from graphql api provided by Bigcommerce.

This is inherited code that was originally decoupled as two separate applications.
I have moved the client into the server to make working with the application easier and efficient.

The application logic is all in the Home.js file within the client/src/pages in the front end.  There is currently a localhost version working with the api using
A localhost token. This results in a graphql 200 code in the network tab of the developer tools in chrome. Success!
But when changing the token to the url that is online as required and pushing to heroku, running the app returns with no errors but because it does not access the api it defaults to hard coded product in chunks files. It looks like the api call is not happening online.The token for online seems to work on the cors issues correctly but the data is not there.

My goal is to focus on getting the code working on heroku like it does on localhost.


I have been using jet debugger to verify that tokens I use are valid.
https://jwt.io/


This is a link to what I am trying to replicate. This is the application that I got the code from. It works in the current heroku hosting it is in and now I’m trying to do the same.
https://datasheet-demo.herokuapp.com/?id=1984&sku=CPA307H

Unfortunately no one in the company has access to that heroku account. This is why I am trying t replicate and host our own version. I need to get it up and running for now.
I plan on remaking it later with next.js

