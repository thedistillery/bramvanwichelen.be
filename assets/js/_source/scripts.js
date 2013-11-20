
$(document).ready(function() {
	$.ga.load("UA-35531654-1");

	var nav_top = 20 + $('header h1').height() + 20;
	$('#space').height(nav_top);

	// bg stretch
    $('body').backstretch("images/backgrounds/resonate2.jpg");
});

$(window).load(function() {
    $('.flexslider').flexslider({
		controlNav: false,
		directionNav: false,
		randomize: true
	});
});

$(function() {
	$('a[href^="mailto:"]').each(function() {
		this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
		// Remove this line if you don't want to set the email address as link text:
		this.innerHTML = this.href.replace('mailto:', '');
	});
});

$('#readmore').click(function() {
	$('#more').toggle('fast');
	$('#readmore').css('display','none');
	return false;
});


$(function changeColor(element, curNumber) {
    curNumber++;
    if (curNumber > 4) curNumber = 1;
    console.log(curNumber);
    element.addClass('color' + curNumber, 500);
    // So previous classes get removed.
    element.attr('class', 'color' + curNumber);
    setTimeout(function(){changeColor(element, curNumber)}, 1000);  
});

changeColor($('#testElement'), 0);