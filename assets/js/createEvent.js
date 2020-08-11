window.Event = {
    API_URL: "http://localhost:8082",

    createEvent: function (){
        $.ajax({
            method:"GET",
            url: Events.API_URL + "/games"
        }).done(function (response){
            console.log(response)
            Events.displayEvents(response.content);
        })
    }
}