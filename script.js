function appendDivs(rows){
	var boxsize = $(".container").width()/(rows)-4;
	console.log(boxsize);
	//$(".boxes").width(boxsize+"px");
	//$(".boxes").height(boxsize+"px");
	for(var i=0;i<rows*rows;i++){
		$(".container").append($('<div class="boxes"></div>'));
	}
	$(".boxes").height(boxsize);
	$(".boxes").width(boxsize);

};

appendDivs(2);



var resetcontainer = function resetcontainer(){
	$(".container").empty();
	var dimensions = prompt("Enter number");
	//console.log(rows,columns);
	appendDivs(dimensions);
};






$(".reset").on('click', resetcontainer);


//$('.container').append($('<div class="boxDiv"></div>'));