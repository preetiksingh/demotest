$(document ).ready(function() {
 $('#alert-message').hide();
 $( "#submit-btn" ).click(function() {
   $('#alert-message').show();
   $('#email').val('');
   $('#description').val('');
 });
});