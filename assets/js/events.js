window.Events = {
    API_URL: "http://localhost:8082",

    getEvents: function (){
        $.ajax({
            method:"GET",
            url: Events.API_URL + "/events"
        }).done(function (response){
            console.log(response)
            Events.displayEvents(response.content);
        })
    },

    getEventHtml: function (event){
        return `
        <div class="col-12 col-md-6 col-lg-4 mb-5">
            <div class="card bg-primary border-light shadow-soft">
                <div class="card-header p-3">
                    <img src="${event.imageUrl}" class="card-img-top rounded" alt="Event Photo">
                </div>
                <div class="card-body pt-2">
                    <div class="media d-flex align-items-center justify-content-between">
                        <div class="post-group">
                            <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="User Name">
                                <img class="avatar-sm mr-2 img-fluid rounded-circle" src="./assets/img/team/profile-picture-2.jpg" alt="User Photo"> UserName
                            </a>
                        </div>
                        <div class="d-flex align-items-center pr-1">
                            <span class="small"><span class="far fa-calendar-alt mr-2"></span>${event.date}</span>
                        </div>
                    </div>
                    <h3 class="h5 card-title mt-4">${event.name}</h3>
                    <p class="card-text">${event.description}</p>

                    <!-- Button Modal -->
                    <button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-notification${event.id}">View Event</button>
                    <!-- Modal Content -->
                    <div class="modal fade" id="modal-notification${event.id}" tabindex="-1" role="dialog" aria-labelledby="modal-notification${event.id}" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content bg-primary">
                                <div class="modal-header">
                                    <p class="modal-title" id="modal-title-notification">${event.name}</p>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="py-3 text-center">
                                        <span class="modal-icon display-1-lg">
                                            <img src="${event.imageUrl}" class="card-img-top rounded" alt="Event Photo">
                                        </span>
                                        <h2 class="h4 my-3">${event.name}</h2>
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="User Name" class="p-1">
                                            <img class="avatar-sm mr-2 img-fluid rounded-circle" src="./assets/img/team/profile-picture-2.jpg" alt="User Photo"> Michael Boxer
                                        </a>
                                        <span class="small p-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Date"><span class="far fa-calendar-alt mr-2"></span>${event.date}</span>
                                        <span class="small p-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Participants"><span class="far fa-user-circle p-0"></span> ${event.participants}</span>
                                        <span class="p-1" data-toggle="tooltip" data-placement="top" title="" data-original-title="Location"><span class="fas fa-map-marker-alt"></span> ${event.location} </span>
                                        <p class="pt-2">${event.description}</p>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-sm btn-primary">Participate</button>
                                    <button type="button" class="btn btn-primary text-danger ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End of Modal Content -->
                </div>
            </div>
        </div>
        `
    },

    displayEvents: function (events){
        let eventsHtml = '';

        events.forEach(event => eventsHtml += Events.getEventHtml(event));

        $(`.eventsSection .row:first-child`).html(eventsHtml);
    },
}

Events.getEvents();