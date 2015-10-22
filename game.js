var prevSelectedValue = 0;
console.log('script loaded  '+ $('td'));

$(function(){
	$('td').on('click', function(){
	//get value of this click
	//var selectedValue = $(self).attr('data'); //$(this).text();

	var self = this;
	console.log('self-------', $(self).attr('data'));
	//check 
	if(prevSelectedValue > 0) {

		//console.log($(self).context, $(self));
		if(!$(self).hasClass('selectedTd')) {
			if ($(self).attr('data') == prevSelectedValue) {
				//User matched values
				console.log('card match!');
			}
			else {
				//User did not match values
				console.log('cards do not match!');
			}

		} else{
			console.log('same selection');
		}
	prevSelectedValue = 0;
	//$('.selectedTd').removeClass('selectedTd'); //
	$('.selectedTd').removeAttr('class');
	self = null;
	}
	else {
		console.log('First selection');
		prevSelectedValue = $(self).attr('data');
		$(this).addClass('selectedTd');
	}
});

});
