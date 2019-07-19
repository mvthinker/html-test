
$(document).ready(function() {
 $(pagelLink).bind("click", function() {
$(page1).show();
$(page2).hide();
 });

 $(page2Link).bind("click", function() {
    $(page2).show();
    $(page1).hide();
     });
});
