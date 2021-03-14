# NEWS API NODEJS APP

This app uses the [news api](https://newsapi.org/) and sends a EJS template as response, rendering the results.
The endpoint used in this app is the `Everything` endpoint, with some default filters.
Those can be changed after rendering the home page and press the button search to call the API again with different parameters.

## Installation

1. Download the repository
2. Fill the env variable with the API key needed and the port
3. Run `npm install` on the termilan from the root directory to install all dependecies
4. Run `npm start` on the terminal from the root directory
5. Open the browser for localhost:port (the app was configured for default in the port 3000, you can override)
6. Alternatively you can use it as microservice by using the command `docker-compose up` from the root directory
7. Run `npm run test` to run the test file

## Others

A CI/CD pipeline was added as a github action, this also runs the test for every commit in the repository
