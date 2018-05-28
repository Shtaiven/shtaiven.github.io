$(document).ready(function() {

    $("#submit").click(function(e) {
        e.preventDefault();

        var name = $("#name").val(),
            email = $("#email").val(),
            message = $("#message").val();

        $.ajax({
            type: "POST",
            url: 'URL_ENDPOINT_FROM_LAST_STEP',
            contentType: 'application/json',
            data: JSON.stringify({
                'name': name,
                'email': email,
                'message': message
            }),
            success: function(res){
                $('#form-response').text('Email was sent.');
            },
            error: function(){
                $('#form-response').text('Error.');
            }
        });

    })

});