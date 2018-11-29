var topics = ["hamster", "space", "food", "raichu", "tea"]


//var queryURL = `https://api.giphy.com/v1/gifs/search?q=${topics}&api_key=UA4jHqQhXxYph6oiBOoI7fl8fNLsuZIt`;

//$.ajax({
//  url: queryURL,
// method: "GET"
// })


function renderButtons() {    
       
    $("#buttons").empty();

       
       for (var i = 0; i < topics.length; i++) {

         
         var a = $("<button>");
         
         a.addClass("favButton btn btn-info");
         
         a.attr("data-name", topics[i]);
         
         a.text(topics[i]);
         
         $("#buttons").append(a);
       }
}

     
$("#add-button").on("click", function(event) {
       
    event.preventDefault();

      
    var topic = $("#button-input").val().trim();
       
    topics.push(topic);

       
    renderButtons();
});


renderButtons();


