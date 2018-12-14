# Project
The main idea of this applications is to provide a simple and curated list of top attractions available in the Berlin area;
Starting with the home page, the user can see experiences of three different categories: tours, eat & drink, passes;
It also possible to look up for an attraction's name using the search box positioned at the top of the page;

Dedicaded page for each category can be accessed when the "See More on..." link if followed and will list only attractions for that specific category;
Each experience item has its own details page where the user could find more information about it and related attractions;

Additional data was put together with the initially provided dataset;
Informations as a unique id for every attraction, it's duration estimative, which category it belongs, an image and brief description (markup text);

# Technology

Technologies on this applications lies on HTML, CSS, and Javascript; The UI library [React](https://react.org). The reason is it provides an easy to use, fast and simple API based on the reusable components concept;
[Create React App](https://github.com/facebook/create-react-app) boilerplate was used to scaffold the base structure of the project; It comes with a service-worker configuration file out-of-the-box, that enables offline cache capabilities to the application;

For styling an CSS-in-JS library was used. [ Styled-components](http://styled-components.com) works perfecty together with React to creates flexible way to style components dinamically;

Due the simpleness of the application and the fact it won't communicate with a remote server, therefore there is any data fetch delay, and a state management library, e.g Redux, wasn't necessary; To create the client-side routing mechanism it was used react-router-dom;


Beside that other external resources which can be found in the project are:
 - normalize.css - normalize and reset style across browsers;
 - Google Fonts - imported Lato free font-face;

The final total build size of the project approximately 62kb
It takes 2.7s seconds to load and the first meaningful UI painting occurs after the first second; (Audit result from Google Chrome DevTools);

# Considerations:

There was no time to implement testing of any kind. The project could have unit, integration and e2e tests to ensure it works and behaves as expected;

Since there are multiple images on every page a lazy load strategy would be beneficial for loading time decrease and better user experience;


# Running the project

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.