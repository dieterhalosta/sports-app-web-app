window.User = {
    API_URL: "http://localhost:8082",

    getUser: function (){
        let userId = 57
        $.ajax({
            method:"GET",
            url:User.API_URL + "/users/" +userId
        }).done(function (response){
            User.displayUser(response);
        })
    },

    getUserHtml: function (user){
        return `
          <div class="col-md-12 col-lg-12 mb-5">
                    <div class="card bg-primary shadow-soft border-light p-2 p-md-3 p-lg-5">
                        <!-- Profile Card -->
                        <div class="profile-card mt-4">
                            <div class="card bg-primary shadow-inset border-light text-center">
                                <div class="card-header">
                                    <div class="profile-image bg-primary shadow-inset border border-light rounded mx-auto p-3 mt-n6">
                                        <img src="${user.photoUrl}" class="card-img-top rounded" alt="${user.firstName} ${user.lastName} Photo">
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
                                                <input class="form-control" id="firstName" placeholder="${user.firstName}" type="text" aria-label="contact name input">
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
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="customFile" aria-label="File upload">
                                            <label class="custom-file-label" for="customFile">Change profile photo</label>
                                        </div>
                                        <!-- End of Form -->
                                    </form>
                                    <div class="card-footer px-0 mx-auto">
                                        <button type="submit" class="btn btn-primary"><span class="fas fa-user-plus mr-1"></span> Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End of Profile Card -->
                    </div>
                </div>
        `
    },

    displayUser: function (user){
        let userHtml = User.getUserHtml(user);

        $(`.UserCardInfo .row:first-child`).html(userHtml);
    },

    updateUser: function (body){
        let userId = 57
        let requestBody = {
            firstName:[body.fName]
            // lastName: body.lName,
            // email: body.em,
            // phoneNumber: body.pN,
            // role: "ADMIN"
        }

        $.ajax({
            method:'PUT',
            url: User.API_URL + '/users/' +userId,
            contentType: 'application/json',
            data: JSON.stringify(requestBody)
        }).done(function (){
            console.log(requestBody)
            window.location.replace('MyAccount.html')
        })

    },

    bindEvents: function (){
        $('.UserCardInfo').delegate('.updateButton', 'click', function (event){
            event.preventDefault();

            let fName =$(this).val('#firstName');
            let lName =$(this).val('lastName');
            let em = $(this).val('eMail');
            let pN = $(this).val('phoneNumber');

             User.updateUser(fName);

        })
    }
}

User.getUser();
User.bindEvents();