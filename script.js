$(document).ready(function() {
    $('.button').click(function() {
        event.preventDefault();
        $('body').addClass('show');
        $('.modal-window .name').html($('#name').val());
        $('.modal-window .email').html($('#email').val());
        $('.modal-window .password').html($('#password').val());
        $('.modal-window .remember-me').html($('#checkbox').is(":checked") ? "YES" : "NO");
        $('.overlay').fadeIn();
    });
    $('.modal-window .close-btn, .glyphicon-remove').click(function() {
        $('body').removeClass('show');
        $('.overlay').fadeOut();
    });
    $('.modal-window .save-btn').click(function() {
        $.post('form.php', $('#contact-form').serialize(), function(response) {
            $('#response').html(response);
        });
        $('body').removeClass('show');
        $('.overlay').fadeOut();
    });
});
