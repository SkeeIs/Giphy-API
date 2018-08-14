# Giphy-API

First use of an API!


# Link to deployed site
[Psychic Game](https://skeeis.github.io/Giphy-Search/)


# Images
![NBA Gifs](https://i.imgur.com/E9fTYLa.jpg)

# technology used

- HTML
- Javascript
- JQuery
- CSS
- Bootstrap
- Google Fonts
- Giphy API

# code snippets
```
    //The for loop that collects all the info I need to populate the gifs from the giphy API
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
```


# Learning points
I learned how to harness the power of existing application program interfaces to bolster my projects. I learned how to sort through the json & retrieve the data that is useful to my project. 
# Author 
Taylor Skeels

