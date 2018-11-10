var bNext = document.getElementById("next");
var bLast = document.getElementById("last");
var myImage = document.getElementById("myImage");

bNext.onclick = increment;
myImage.onclick = increment;
bLast.onclick = decrement;

var cImage = 0;

var allImages = [
	"cover.png",
	"page1.png",
	"page2.png",
];

function render(){
	myImage.src = "pngs/"+allImages[cImage];
}

function increment(){
	if(cImage < allImages.length-1){
		cImage++;
	}
	render();
}

function decrement(){
	if(cImage > 0){
		cImage--;
	}
	render();
}