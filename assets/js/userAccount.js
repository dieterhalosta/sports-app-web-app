window.User = {
  API_URL: "http://localhost:8082",

  getUser: function () {
    let userId = 57;
    $.ajax({
      method: "GET",
      url: User.API_URL + "/users/" + userId,
    }).done(function (response) {
      User.displayUser(response);
    });
  },

  getUserHtml: function (user) {
    return `
         <div class="col-md-12 col-lg-12 mb-5">
            <div class="card bg-primary shadow-soft border-light p-2 p-md-3 p-lg-5">
            <!-- Profile Card -->
                <div class="profile-card mt-4">
                    <div class="card bg-primary shadow-inset border-light text-center">
                        <div class="card-header">
                            <div class="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                                <img src="${user.photoUrl}" class="card-img-top rounded" alt="${user.firstName} ${user.lastName}">
                            </div>
                        </div>
                        <div class="card-body pb-5">
                            <h3 class="h2 mb-2">${user.firstName} ${user.lastName}</h3>
                            <span class="h4 font-weight-normal text-gray mb-3">${user.email}</span>
                            <span class="m-1"></span>
                            <span class="h4 font-weight-normal text-gray mb-3">${user.phoneNumber}</span>
                            <ul class="list-unstyled d-flex my-3"></ul>
                            <a class="btn btn-sm btn-primary mr-3" href="UpdateMyAccount.html">
                                <span class="fas fa-user-plus mr-1"></span> Update
                            </a>
                        </div>
                    </div>
                </div>
            <!-- End of Profile Card -->
            </div>
         </div>
        `;
  },

  displayUser: function (user) {
    let userHtml = User.getUserHtml(user);

    $(`.UserCardInfo .row:first-child`).html(userHtml);
  },
};

User.getUser();
