/*
  Author: Jordan Flagg
  Date: 9/30/2021
  MGT 3745 B Fall 2021
  Homework 5

  Instructions
  // Step 1 - Register for an API key from Unsplash
  // Step 2 - Read GIPHY API Docs for image search
  // Step 3 - Test API endpoint with your API Key using Postman
  // Step 4 - Write JavaScript, with references to elements using getElementById
  // Step 5 - Test, Fix, Retry
  References: 
    https://developers.giphy.com/
    https://developers.giphy.com/docs/api#quick-start-guide
    https://developers.giphy.com/explorer#explorer
    https://developers.giphy.com/docs/api/endpoint#search

  Desired behavior:
  A user types text into a search input field. When the user clicks the button labeled 'Search', no more than 15 giphy images are returned based on the search term(s) entered. Each image should have a height set to 200 pixels. Make sure the images returned are rated 'g' and the default country/region is set to 'en'.

  Considerations: 
     - avoid code redundancy
     - use constants to ensure changes (api key, number of results, rating, image height) can be made easily (e.g., template literals)
     - use a primary or main function to start your code (e.g., make an HTTP request to retrieve data from GIPHY, update the DOM, etc.). You are allowed to use parameters 
     - clear the contents of the result div before running a search 
*/

const API_KEY = "OxJTGYmGKc4YaJu6OdW17MZ6O5aFoD9b"
const MAX_HEIGHT = 200
const NUM_OF_RESULTS = 15
const RATING = "g"
document.getElementById("btn").addEventListener("click",main)

function main(){
  document.getElementById("result").innerHTML = ""
  //get the value from the search field
  const term = document.getElementById("search_field").value
  //run the unsplash search with the search value
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=${NUM_OF_RESULTS}&offset=0&rating=${RATING}&lang=en`)
  .then(response => response.json())
  .then(data =>{
    
    //console.log(data.results[0].urls.regular)
  //take response data and parse / break down values needed for display

   data.data.forEach(function(item){
       //format the display 

    document.getElementById("result").innerHTML += `<img src='${item.images.original.url}'height=${MAX_HEIGHT}><br>`
    
   })

  })

}