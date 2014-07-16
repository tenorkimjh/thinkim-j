$(document).ready(function() {
	$('#1').click(function() {
		$('#intro').toggle('slow');
		$('#nc').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#aftsol').fadeOut('fast');	
		$('#bok').fadeOut('fast');	
		});	
	$('#2').click(function() {
		$('#teen').toggle('slow');
		$('#intro').fadeOut('fast');
		$('#nc').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#aftsol').fadeOut('fast');	
		$('#bok').fadeOut('fast');
		});
	$('#3').click(function() {
		$('#befsol').toggle('slow');
		$('#nc').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#intro').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#aftsol').fadeOut('fast');	
		$('#bok').fadeOut('fast');
		});
	$('#4').click(function() {
		$('#sold').toggle('slow');
		$('#nc').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#intro').fadeOut('fast');	
		$('#aftsol').fadeOut('fast');	
		$('#bok').fadeOut('fast');
		});
	$('#5').click(function() {
		$('#aftsol').toggle('slow');
		$('#nc').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#intro').fadeOut('fast');	
		$('#bok').fadeOut('fast');
		});
	$('#6').click(function() {
		$('#bok').toggle('slow');
		$('#aftsol').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#nc').fadeOut('fast');	
		$('#intro').fadeOut('fast');
		});
	$('#active').click(function() {
		$('#nc').toggle('slow');
		$('#aftsol').fadeOut('fast');
		$('#teen').fadeOut('fast');	
		$('#befsol').fadeOut('fast');	
		$('#sold').fadeOut('fast');	
		$('#bok').fadeOut('fast');	
		$('#intro').fadeOut('fast');
		});
});