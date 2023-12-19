# Creative Crafting - an ECommerce site for handmade items
This repository contains the front end piece of an online storefront for the display and purchase of handcrafted items (crochet hats, necklaces, keychains, etc).  It is written as a Single Page App in ReactJS, Redux, Javascript, and ReactStrap.  The shopping cart employs use_local_storage_state and is integrated with a payment gateway using the react_paypal_js package.

The image galleries are created using custom React components styled with CSS, I used nuka-carousel for the image carousel on the homepage, and the lightboxes on the product detail pages are implemented using fslightbox-react.
The server portion to which it connects (for user autentication, database access, user reviews and orders info., etc.) can be found in my [creative_crafting_server](https://github.com/tessiert/creative_crafting_server) repository on GitHub.

The site is hosted at https://creativecrafting.dreamhosters.com.