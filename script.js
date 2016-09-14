//colors squares gray 
function defaultColoring(){
	$(".boxes").mouseover(function(){
		$(this).css('background-color', 'gray');
	});
};

//appends divs to container
function appendDivs(rows){
	var boxsize = $(".container").width()/(rows);
	//$(".boxes").width(boxsize+"px");
	//$(".boxes").height(boxsize+"px");
	for(var i=0;i<rows*rows;i++){
		$(".container").append($('<div class="boxes"></div>'));
	}
	$(".boxes").height(boxsize);
	$(".boxes").width(boxsize);
};

//removes divs from container, adds new divs to
function resetcontainer(){
	$(".boxes").remove();
	var dimensions = prompt("Enter desired width and height:");
	//console.log(rows,columns);
	appendDivs(dimensions);
};

function opaqueness(){
	$(".boxes").css('background-color','gray');

	$(".boxes").mouseover(function(){
		$(this).css('opacity', $(this).css('opacity')-0.2);
	});
}


//initial grid, buttons function when document is loaded
$(document).ready(function(){
	appendDivs(6,6)
	defaultColoring();

	$(".button-menu").on('click', '.reset', function(){
		resetcontainer();
		//unbind removes all event listeners from .boxes
		$(".boxes").unbind();
		defaultColoring();
	});

	$(".opacity").click(function(){
		$(".boxes").unbind();
		opaqueness();
	});


});
