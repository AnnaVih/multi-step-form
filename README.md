# Multi Step Form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technologies used to create this simple web app

-   React and React Hooks
-   TypeScript
-   Styled Components
-   React Hook Form
-   Prettier
-   Jest and React Testing Library
-   Cypress

Note! The only reason I did not go for a Redux is that I wanted to use all the power of React Hooks including a useReducer.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test:unit`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:integration`

Launches the local server and then Cypress test runner. If you having a trouble running an integration test on Apple M1 then spin up a local server by running this command `env FAST_REFRESH=false npm start` and then `yarn cy:run`. Not ideal but I did not want to spend more time on fixing that for Apple M1 machines.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn prettier`

Runs prettier and formats code follofing simple style rules

## Additional Information

If you have Apple M1 chip and having some issue running a script `yarn start` or `npm run start` try to use this command `env FAST_REFRESH=false npm start`
