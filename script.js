$(document).ready(function(){
    $("#search").focus(function() {
      $(".search-box").addClass("border-searching");
      $(".search-icon").addClass("si-rotate");
    });
    $("#search").blur(function() {
      $(".search-box").removeClass("border-searching");
      $(".search-icon").removeClass("si-rotate");
    });
    $("#search").keyup(function() {
        if($(this).val().length > 0) {
          $(".go-icon").addClass("go-in");
        }
        else {
          $(".go-icon").removeClass("go-in");
        }
    });
    $(".go-icon").click(function(){
      //$(".search-form").submit();
      main()
    });
});

var API_KEY = config.API_KEY
const MAX_HEIGHT = 200
const NUM_OF_RESULTS = 50
const RATING = "g"


function main(){
  document.getElementById("mainDiv").innerHTML = ""
  //get the value from the search field
  const term = document.getElementById("search").value
  //run the unsplash search with the search value
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${config.API_KEY}&q=${term}&limit=${NUM_OF_RESULTS}&offset=0&rating=${RATING}&lang=en`)
  .then(response => response.json())
  .then(data =>{
    console.log(data)
    //console.log(data.results[0].urls.regular)
  //take response data and parse / break down values needed for display

   data.data.forEach(function(item){
       //format the display 

    

document.getElementById("mainDiv").innerHTML += `<img id=”centerdImage” src='${item.images.original.url}'height=${MAX_HEIGHT}><\img>`
				
     
     //document.getElementById("result").innerHTML += `<img src='${item.images.original.url}'height=${MAX_HEIGHT}><br>`
    
   })

  })

}