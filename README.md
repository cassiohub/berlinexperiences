# Demo

A Demo can be found at (https://berlin-experiences.surge.sh)

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

# Running the project

In the project directory, you can run:

### `npm install`
Installs all project's dependencies

### `npm start`
Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.