This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run the code locally

* Make sure you have node installed on your machine.
* Clone the repo by running `git clone https://github.com/esthersong/simpleTask.git` in your console.
* Navigate to the project folder. 
* Install all the packages by running `npm install`.
* Run `npm start` to start up the server and the project should open up in the browser or go to [http://localhost:3000/](http://localhost:3000/) in the browser.

### Challenges/Design
* Organizing the project in a short amount of time. I could have split the project up into smaller components such as "search", "moviesList" and even a "movieDetails" which would have been an extra feature for a movie to be clickable to open a modal with details about the movie. I just created 2 clear components one stateful component the container component - "MovieSearch" and a stateless component - "Movie" which only display info.
* Trying to implement pagination quickly - I just installed a package to make it easier - I did not style it.
* Making the project pretty. I sacrificed styling for functionality. I wanted to make sure everything worked before Making the project pretty and therefor was not able to style the project or make it responsive and implemented very minimal styling. 
* I thought the api calls would be slower than they are and so I added a loading spinner. Even though it was never visible for me since the api calls ran really quickly, it's always good to have for users with slower connections. 

### Future Improvements
* Make the project more organized and also use Redux. 
* Style the project and make it responsive. 
