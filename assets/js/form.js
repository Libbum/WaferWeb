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
					$('#contactForm')[0].reset();
				}
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.
});