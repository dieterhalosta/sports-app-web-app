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
        }).done(function (response){
            CreateEvent.addEventToGame(response.id);
        })
    },

    addEventToGame: function (eventId){
        $.ajax({
            method: "PUT",
            url: CreateEvent.API_URL + "/games?eventId=" + eventId,
        }).done(function (){
            CreateEvent.addUserToGame(eventId)
        })
    },

    addUserToGame: function (eventId){
        let userId = 58

        let body = {
            userIds: [
                userId
            ]
        }
        $.ajax({
            method:"PUT",
            url: CreateEvent.API_URL + "/games/" + eventId,
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function (){
            window.location.replace('index.html')
        })
    },

    bindEvents: function (){
        $('.EventCard').delegate('.createButton', 'click', function (event){
            event.preventDefault();

            let eventName = $('#eventName').val();
            let eventDescription = $('#descriptionField').val();
            let eventParticipants = $('#participantsField').val();
            let eventLocation = $('#locationField').val();
            let eventDate = new Date($('#InputDate').val())

            CreateEvent.createEvent(eventName, eventDate, eventDescription, eventLocation, eventParticipants);

        })
    }

}

CreateEvent.bindEvents();
