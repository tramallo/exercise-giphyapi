## Exercise giphy api connection

### Objetive: Html, Css & JS practice
The proposal for this exercise is to create a webpage that connects and retrieves gif images from giphy.

- The webpage must have a search bar and a main grid (with 3 columns on desktop, 2 on tablet, and 1 for mobile) that shows random gifs
- When the user types 3 characters in the search bar, it must show gifs related to the search input

### Build
For the sake of easing the build & test steps, the project was initialized using **create-react-app** template.

To execute the project you need to:

- Clone the repository
> **git clone https://github.com/tramallo/exercise-giphyapi.git**

- Install the dependencies
> **npm install**

- Add your giphy api key to env variables

> Create **.env** file.  
> Add **REACT_APP_GIPHYAPI_APIKEY** entry with your api key as value (see .env.template file for an example).  
> How to create a giphy api key: see [giphyapi-docs]  


- Run the start command
> **npm run start**


[giphyapi-docs]: https://developers.giphy.com/docs/api/#quick-start-guide
