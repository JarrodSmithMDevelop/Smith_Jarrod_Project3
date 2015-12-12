//Jarrod Smith
//Week 3 project
//Visual Frame Works

//Sets background color while loading
Ti.UI.setBackgroundColor("#000");

//Open gallery

var galleryMenu = Ti.UI.createWindow({
	backgroundColor: ("#7a7a99"),
});

var galleryButton = Ti.UI.createView({
	backgroundColor: ("#f2f2f2"),
	height:50,
	width: 200,
	borderRadius:5,
});

var galleryButtonLabel = Ti.UI.createLabel({
	text: "Open gallery",
	color: ("#000")
});

var mainWindow = Ti.UI.createWindow({
	backgroundColor: ("#7a7a99"),
	layout: "horizontal"
});


//Top border
var topBorder = Ti.UI.createView({
	backgroundColor: ("#000"),
	height: 1,
	width: 400,
	top: 20
});
mainWindow.add(topBorder);

//Close gallery button
var closeGalleryButton = Ti.UI.createView({
	backgroundColor: ("#f2f2f2"),
	height: 50,
	width: 300,
	top: 5,
	bottom: 20,
	left: 40
});

var closeButtonLabel = Ti.UI.createLabel({
	text: "Close gallery",
	color: ("#000")
});
closeGalleryButton.add(closeButtonLabel);

var clOpen = function(){
	galleryMenu.close();
	mainWindow.open();
	mainWindow.add(topBorder);
};

var opOpen = function(){
	galleryMenu.open();
	mainWindow.close();
};

//Accesses gallery.js 
var gallery = require("gallery");



//Adds views to main window
galleryMenu.open();
galleryButton.add(galleryButtonLabel);
galleryMenu.add(galleryButton);

closeGalleryButton.addEventListener("click", opOpen);
galleryButton.addEventListener("click", clOpen);

