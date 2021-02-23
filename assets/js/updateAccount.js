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
                                        <img src="${user.photoUrl}" id="photoUrl" class="card-img-top rounded" alt="${user.firstName} ${user.lastName} Photo">
                                    </div>
                                </div>
                                <div class="card-body pb-5">
                                    <form class="col-12 col-md-8 mx-auto">
                                        <!-- Form -->
                                        <div class="form-group">
                                            <label for="nameInputIcon2">First Name</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="far fa-user-circle"></span></span>
                                                </div>
                                                <input class="form-control" id="firstName" placeholder="${user.firstName}" data-product_firstName=${user.firstName} type="text" aria-label="contact name input">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="nameInputIcon3">Last Name</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="far fa-user-circle"></span></span>
                                                </div>
                                                <input class="form-control" id="lastName" placeholder="${user.lastName}" type="text" aria-label="contact name input">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="EmailInputIcon3">E-Mail</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="far fa-envelope-open"></span></span>
                                                </div>
                                                <input class="form-control" id="eMail" placeholder="${user.email}" type="text" aria-label="contact email input">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="numberInputIcon3">Phone number</label>
                                            <div class="input-group mb-4">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text"><span class="fas fa-mobile-alt"></span></span>
                                                </div>
                                                <input class="form-control" id="phoneNumber" placeholder="${user.phoneNumber}" type="text" aria-label="contact name input">
                                            </div>
                                        </div>
                                        <!-- End of Form -->
                                    </form>
                                    <div class="card-footer px-0 mx-auto">
                                        <button type="submit" class="btn btn-primary updateButton"><span class="fas fa-user-plus mr-1"></span> Update</button>
                                    </div>
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

  updateUser: function (firstName, lastName, email, phoneNumber, photoUrl) {
    let userId = 57;
    let requestBody = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      role: "ADMIN",
      photoUrl: photoUrl,
    };

    $.ajax({
      method: "PUT",
      url: User.API_URL + "/users/" + userId,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    }).done(function () {
      console.log(requestBody);
      window.location.replace("MyAccount.html");
    });
  },

  bindEvents: function () {
    $(".UserCardInfo").delegate(".updateButton", "click", function (event) {
      event.preventDefault();

      if ($("#firstName").val() == "") {
        var fName = $("#firstName").attr("placeholder");
      } else {
        var fName = $("#firstName").val();
      }

      let firstName = fName;

      if ($("#lastName").val() == "") {
        var lName = $("#lastName").attr("placeholder");
      } else {
        var lName = $("#lastName").val();
      }
      let lastName = lName;

      if ($("eMail").val() == "") {
        var eM = $("#eMail").attr("placeholder");
      } else {
        var eM = $("#eMail").val();
      }
      let email = eM;

      if ($("phoneNumber").val() == "") {
        var pN = $("#phoneNumber").attr("placeholder");
      } else {
        var pN = $("#phoneNumber").val();
      }
      let phoneNumber = pN;

      let photoUrl = $("#photoUrl").attr("src");

      User.updateUser(firstName, lastName, email, phoneNumber, photoUrl);
    });
  },
};

User.getUser();
User.bindEvents();
