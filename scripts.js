$(document).ready(function() {
    var time = 11;
    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;
    $elem = $("#mini-sweeper").find('.owl-carousel');
    $elem.on("initialized.owl.carousel", function(){
        $("#mini-sweeper").find('div.itembox li[slide-id="1"]').addClass("active");
        buildProgressBar();
        start();
    });
    $elem.on("drag.owl.carousel", function(){
        isPause = true;
    });
    $elem.on("dragged.owl.carousel", function(){
        moved();
    });
    $elem.owlCarousel({
        loop : true,
        items : 1,
        dots : false,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeIn'
    });
    $elem.on("translate.owl.carousel", callback);
    function callback(event) {
        moved();
        var idx = event.item.index - event.relatedTarget._clones.length / 2 + 1;
        if(idx>event.item.count)idx = idx%event.item.count;
        if(idx<1)idx = event.item.count;
        $("#mini-sweeper").find("div.itembox li.active").removeClass("active");
        $("#mini-sweeper").find('div.itembox li[slide-id="' + idx + '"]').addClass("active");
    }
    function buildProgressBar(){
        $progressBar = $("<div>",{
            id:"progressBar"
        });
        $bar = $("<div>",{
            id:"bar"
        });
        $progressBar.append($bar).appendTo($elem);
    }
    function start() {
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 6);
    };
    function interval() {
        if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100){
                $elem.trigger('next.owl.carousel');
                moved();
            }
        }
    }
    function moved(){
        clearTimeout(tick);
        start();
    }
    $("#mini-sweeper").find("div.itembox li").each(function(){
        $(this).on("click",function(){
            if($(this).hasClass("active"))return;
            $elem.trigger('to.owl.carousel', parseInt($(this).attr("slide-id"))-1);
        });
    });
});

$(document).ready(function() {
    var time = 11;
    var $progressBar,
        $bar, 
        $elem, 
        isPause, 
        tick,
        percentTime;
    $elem = $("#mini-sweeper-1").find('.owl-carousel');
    $elem.on("initialized.owl.carousel", function(){
        $("#mini-sweeper-1").find('div.itembox li[slide-id="1"]').addClass("active");
        start();
    });
    $elem.on("drag.owl.carousel", function(){
        isPause = true;
    });
    $elem.on("dragged.owl.carousel", function(){
        moved();
    });
    $elem.owlCarousel({
        loop : true,
        items : 1,
        dots : false,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeIn'
    });
    $elem.on("translate.owl.carousel", callback);
    function callback(event) {
        moved();
        var idx = event.item.index - event.relatedTarget._clones.length / 2 + 1;
        if(idx>event.item.count)idx = idx%event.item.count;
        if(idx<1)idx = event.item.count;
        $("#mini-sweeper-1").find("div.itembox li.active").removeClass("active");
        $("#mini-sweeper-1").find('div.itembox li[slide-id="' + idx + '"]').addClass("active");
    }
    function start() {
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 12);
    };
    function interval() {
        if(isPause === false){
            percentTime += 1 / time;
            if(percentTime >= 100){
                $elem.trigger('next.owl.carousel');
                moved();
            }
        }
    }
    function moved(){
        clearTimeout(tick);
        start();
    }
    $("#mini-sweeper-1").find("div.itembox li").each(function(){
        $(this).on("click",function(){
            if($(this).hasClass("active"))return;
            $elem.trigger('to.owl.carousel', parseInt($(this).attr("slide-id"))-1);
        });
    });
});

const switchFromLoginToResetPassword = () => {
    $('#formLogin').modal('hide');
    $('#formResetPassword').modal('show');
};

const switchFromResetPasswordToLogin = () => {
    $('#formResetPassword').modal('hide');
    $('#formLogin').modal('show');
};

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