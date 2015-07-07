$("#contactForm").submit(function(e) {
    $.ajax({
           type: "POST",
           url: $(this).attr('action'),
           data: $(this).serialize(), // serializes the form's elements.
           success: function(data)
           {
				$('#response').animate({'opacity': 0}, 500, function () {
					$(this).html(data);
				}).animate({'opacity': 1}, 500);
				if (~data.indexOf('Thanks')) {
					$('#contactForm')[0].reset(); //clear the form if information was sent
				}
           }
         });

    e.preventDefault(); // don't execute the actual form submission.
});

$("#contact-icon").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $("#three").offset().top + offset
    }, 1000);
});