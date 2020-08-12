window.CreateEvent = {
    API_URL: "http://localhost:8082",

    createEvent: function (eventName, eventDate, eventDescription, eventLocation, eventParticipants){
       let requestBody = {
            name:eventName,
            date:eventDate,
            description: eventDescription,
            location:eventLocation,
            participants:eventParticipants,
            imageUrl:"./assets/img/games/sportsGeneral.jpg"

        }
        $.ajax({
            method:"POST",
            url: CreateEvent.API_URL + "/events",
            contentType: 'application/json',
            data: JSON.stringify(requestBody)
        }).done(function (){
            console.log(requestBody)
            window.location.replace('MyEvents.html')
        })
    },

    bindEvents: function (){
        $('.EventCard').delegate('.createButton', 'click', function (event){
            event.preventDefault();

            let eventName = $('#eventName').val();
            let eventDescription = $('#descriptionField').val();
            let eventParticipants = $('#participantsField').val();
            let eventLocation = $('#locationField').val();
            let eventDate = $('#InputDate').val();
            let newDate = eventDate.split("/").reverse().join("-");

            CreateEvent.createEvent(eventName, newDate, eventDescription, eventLocation, eventParticipants);

        })
    }

}

CreateEvent.bindEvents();
