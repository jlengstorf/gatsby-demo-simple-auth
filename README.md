# Gatsby Authentication Demo

This is a simplified demo to show how an authentication workflow is implemented in Gatsby.

The short version is:

* Gatsby statically renders all unauthenticated routes as usual
* Authenticated routes are whitelisted as client-only
* Logged out users are redirected to the login page if they attempt to visit private routes
* Logged in users will see their private content

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/gatsby-demo-simple-auth)
