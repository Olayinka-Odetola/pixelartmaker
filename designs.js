var color, height, width;
// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
})

function makeGrid(h, w) {
	$('tr').remove();
	for (var i=1; i<=h; i++) {
		$('#pixelCanvas').append('<tr id=new-table'+i+'></tr>');
		for (var j=1; j<=w; j++) {
			$('#new-table'+i).append('<td></td>');
		}
	}

	//for color
	$('td').click(function insertColor() {
		color = $('#colorPicker').val();
		if($(this).attr('style')) {
			$(this).removeAttr('style')
		} else {
			$(this).attr('style', 'background-color:'+ color);
		}
	})
};
