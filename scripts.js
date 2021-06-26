$(document).ready(function() {


$("#owl-demo-top").owlCarousel({
    navigation : true, // Show next and prev buttons
    autoPlay : false,
    goToFirst : true,
    goToFirstSpeed : 2000,
    items : 1, 
    goToFirst:true,
   loop:true,
   margin:20,
   autoplay:true,
   autoplayTimeout:3000,
   autoplayHoverPause:true,
   smartSpeed:3000,
});
})





$(document).ready(function() {
 
    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        autoPlay : false,
        goToFirst : true,
        goToFirstSpeed : 1000,
        items : 1, 
        goToFirst:true,
       loop:true,
       margin:10,
       autoplay:true,
       autoplayTimeout:3000,
       autoplayHoverPause:true,
       autoplayTimeout:3000,

    });
  })

 






const switchFromLoginToResetPassword = () => {
    $('#formLogin').modal('hide');
    $('#formResetPassword').modal('show');
};

const toshowTheDoneFullPage = () => {
    $('#registerSecondPage').modal('hide');
    $('#formDone').modal('show');

    setTimeout(() => {
    $('#formDone').modal('hide');
    }, 4000);
};


const switchFormRegistrationtoSecondPart = () =>{
    $('#formLogin').modal('hide');
    $('#registerSecondPage').modal('show');
};

const backToFirstPartofRegister = () =>{
    $("#registerSecondPage").hide('fast');
    $('#formLogin').modal('show');
    console.log("back to home");
}

const sendTheUserToHelpPage = () =>{
    $("#registerSecondPage").hide('fast');
    $('#hilfePage').modal('show');

    console.log("helping page"); 
}



const switchFromResetPasswordToLogin = () => {
    $('#formResetPassword').modal('hide');
    $('#formLogin').modal('show');
};

const switchFromHelpToLogin = () =>{
    $('#hilfePage').modal('hide');
    $('#formLogin').modal('show');

}


const resetPassword = async (email, callback) => {
    // Simulate reset password API
    new Promise(resolve => setTimeout(resolve, 2000)).then(()=>{
        if(callback) callback(email, true);
    });
};

const resetPasswordRequest = email => {
    $('#loadingModal').show();
    resetPassword(
        email,
        (email, success) => {
            if(success){
                // email was successfully sent
                $('#formResetPassword #requestedResetEmail').text(email);
                $('#formResetPassword #passwordResetBox').hide('fast');
                $('#formResetPassword #passwordResetMailedBox').show('fast');
            } else {
                // :/
            }
            $('#loadingModal').hide();
        }
    );
};

const toggleResetPasswordBoxes = () => {
    $('#formResetPassword #passwordResetMailedBox').hide('fast');
    $('#formResetPassword #passwordResetBox').show('fast');
};

const closeAllTabs = () =>{
    $('#formLogin').modal('hide');
}

