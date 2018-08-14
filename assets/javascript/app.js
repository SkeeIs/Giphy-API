var apiKey = "3OGenoYoVp03aFwQXeFd0UZkWHGHKm2H";
var searchButtons = ["Michael Jordan","Stephen Curry","Lebron James", "Kevin Durant", "Shaquille O'Neal", "Kareem Abdul-Jabbar", "Kevin Garnett", "Hakeem Olajuwon", "Jerry West", "Giannis Antetokounmpo", "Klay Thompson", "Baron Davis"]

function createButtons () {
    $("#buttons-go-here").empty();
  for (var i = 0; i < searchButtons.length; i++) {  
    var newButton = $("<button>");
    newButton.addClass("btn btn-secondary");
    newButton.attr("data-search", searchButtons[i]);
    newButton.text(searchButtons[i]);
    $("#buttons-go-here").append(newButton);
  }
}  

$("#submit").on("click", function(event) {
  event.preventDefault();
  var searchTerm = $("#gif-search").val();
  searchButtons.push(searchTerm);
  createButtons();
  console.log(searchButtons);
})

createButtons();

$("#buttons-go-here").on("click", ".btn", function(){
    $("#gifs-go-here").empty();
    console.log(this);
    searchTerm = $(this).attr("data-search");
    var userQuery = "https://api.giphy.com/v1/gifs/search?api_key="+apiKey+"&q="+searchTerm+"&limit=10";
    
    $.ajax({
        url: userQuery,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var resultsGif = response.data;

        for (var i = 0; i < resultsGif.length; i++) {
          var gifDiv = $("<div>");
            var p = $("<p>");
            p.text("Rating: " + resultsGif[i].rating);
            var gifImage = $("<img>");
            gifImage.attr("src", resultsGif[i].images.fixed_height_still.url);
            gifImage.attr("data-still", resultsGif[i].images.fixed_height_still.url)
            gifImage.attr("data-animate", resultsGif[i].images.fixed_height.url)
            gifImage.attr("data-state", "still")
            gifImage.addClass("gif");
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $("#gifs-go-here").prepend(gifDiv);  
            console.log(gifImage);
        }    
    })
})    

$("#gifs-go-here").on("click", ".gif", function(){
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    console.log(this.src);
    $(this).attr("data-state", "animate");
  }
  
  else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
})