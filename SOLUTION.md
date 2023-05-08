# AVIV technical test solution

You can use this file to write down your assumptions and list the missing features or technical revamp that should
be achieved with your implementation.

## Notes

This React app was developed as a test for a larger application, and therefore, some implementation choices and assumptions were made to simplify the development process, but at the same time reflect somehow the structure of a more complex application.

The app uses SWR to fetch data from the backend API, allowing for caching and reducing the number of API requests made. For POST requests, the app uses the Fetch API instead of SWR for the sake of simplicity. It could be that for a larger application I would have used axios on top of it for more advanced HTTP capabilities, but I decided to keep it more simple here.

To simplify also form validation, the app uses React Hook Form, a lightweight library for managing form state and validation.

While these choices and assumptions were made to simplify development, they may not be suitable for all use cases or applications. Future development and scaling may require different approaches to caching, API requests, and form validation.

## Questions

- **What is missing with your implementation to go to production?**

  To deploy the app, the first crucial need is to find a suitable hosting provider to run the application on a server. In addition, production endpoints are necessary for any backend queries that the app relies on to ensure the app is interacting with the correct data sources. To make the app more robust in a production environment, it would be desirable to perform end-to-end testing.

  In addition to the steps mentioned earlier, we would need to implement some precommit tools to ensure that the code is formatted and follows the best practices. 
  Since the listings are going to be accesible from different countries, it would also be useful to consider internationalization to make the app more accessible for users from different regions. 
  Additionally, we could consider using code generation tools to speed up the development process and avoid hardcoding models.

- **How would you deploy your implementation?**
  As mentioned earlier, once I have a hosting provider, I can trigger the deployment to production by pushing the code to the main branch. Since a pipeline of GitHub Actions is already implemented, it's a good idea to trigger the deployment from here. Additionally, merging from a release branch is recommended to keep track of changes made in the code with each release. In the case of the app developed here, I only have a develop branch for development purposes. Any changes made in develop should be merged into the release branch before merging into main.

- **If you had to implement the same application from scratch, what would you do differently?**

  For such a small project, I would probably not use container and presentational components. Using hooks and SWR enables me to have more concise and readable components without having to implement the presentational container pattern.

- **The application aims at storing hundreds of thousands listings and millions of prices, and be accessed by millions
  of users every month. What should be anticipated and done to handle it?**

  First of all, we would need to implement a strategy for fetching data by chunks in the client, such as infinite scrolling or pagination, to ensure that the app can handle a large amount of data and a high volume of users. Additionally, we could consider implementing server-side rendering (SSR) to improve performance and SEO, as well as reducing the load on the client-side.
 
  It would also be needed to design a caching strategy so we don't overload both the server and browser with calls to the API. Some possible solutions are the implementation of some fetching tool like SWR, the one I used on the app, or using a context management tool like Redux, so we avoid going to the database repeatedly.

  Last, it would be very important to implement some kind of monitoring to the app in order to keep track of the health of the app.

  NB : You can update the [given architecture schema](./schemas/Aviv_Technical_Test_Architecture.drawio) by importing it
  on [diagrams.net](https://app.diagrams.net/) 
