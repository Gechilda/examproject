import React, { useState } from "react";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <section class="page_404">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <meta name="description" content="This is the Signin page" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 ">
            <div class="col-sm-10 col-sm-offset-1  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/menu" class="link_404">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
