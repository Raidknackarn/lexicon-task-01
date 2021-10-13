function JavaScriptFetch() {
    var script = document.createElement('script');
    script.src = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + document.getElementById("search").value;;
    document.querySelector('head').appendChild(script);
    }

    function jsonFlickrFeed(data) {
    var image = "";
    data.items.forEach(function (element) {
    image += "<img src=\"" + element.media.m + "\"/>";
    });
    document.getElementById("outputDiv").innerHTML = image;
    
    }


/* 3. Implementing Flickr Public API with JavaScript

We can also implement this Flickr API with JavaScript. As this API is returning jsonp, therefore I will create a script tag and assign its src property to the API url.
Next I append this script to the page head.
Finally create a JavaScript function called jsonFlickrFeed, which will be called automatically when the jsonp is downloaded completely.
To show the images you can loop through them with .forEach() method of JavaScript and show it inside the div. 

Förklaring på koden över. Själv har jag dålig koll men tog detta från sidan jag hittade koden aswell
*/








// function get_random_image(){

//     url = "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=bd40c7469c9b042159eefa6cdaca25d9&per_page=10&format=json&nojsoncallback=1";

//     fetch(url)
//     .then(function(response){
//         return response.json();
//     })

//     .then(function(data){
//         display_image(data)
//         console.log(data)
//     })

//     .catch(function(error){
//         console.log("Error" + error);

//     });
    
// }

// function display_image(image_url){
//     document.getElementById("image").src = image_url
// }




/* fetch('https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=bd40c7469c9b042159eefa6cdaca25d9&format=json&nojsoncallback=1')
 .then(response => response.json())
 .then(json => console.log(json)) */