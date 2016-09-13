function appendDivs(rows){
	var boxsize = $(".container").width()/(rows);
	console.log(boxsize);
	//$(".boxes").width(boxsize+"px");
	//$(".boxes").height(boxsize+"px");
	for(var i=0;i<rows*rows;i++){
		$(".container").append($('<div class="boxes"></div>'));
	}
	$(".boxes").height(boxsize);
	$(".boxes").width(boxsize);

};



var resetcontainer = function resetcontainer(){
	$(".boxes").remove();
	var dimensions = prompt("Enter number");
	//console.log(rows,columns);
	appendDivs(dimensions);
};


var colorChange = function colorChange(){
	$(".boxes").css('background-color','red');
};




$(".reset").on('click', resetcontainer);

$(document.body).on("mouseover", ".boxes", (function(){
	console.log($);
	$(this).css('background-color','red');
}));


//$('.container').append($('<div class="boxDiv"></div>'));