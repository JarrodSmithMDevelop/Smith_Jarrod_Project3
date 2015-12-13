//looking at images folder 
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
//Pulling images from folder
var imageFiles = imagesFolder.getDirectoryListing();

//This will collect device specific screen size
var phWidth = Ti.Platform.displayCaps.platformWidth;
var phHeight = Ti.Platform.displayCaps.platformHeight;
var margin = 10;
var rowCount = 4;
var viewSpace = phWidth - (margin * (rowCount + 1));
var viewSize = (viewSpace / rowCount); 


//Container for the views
var viewContainer = Ti.UI.createScrollView({
	backgroundColor: ("#999"),
	width: phWidth,
	top: 0,
	layout: "horizontal",
	contentWidth: phWidth,
	showVerticleScrollIndicator: true,
	height: phHeight - topBorder.height - topBorder.top - closeGalleryButton.height,
});

//Loop to create multiply views
for(i=0; i<imageFiles.length; i++){
	var galleryView = Ti.UI.createView({
		backgroundColor: ("#4d4d99"),
		top: margin,
		left: margin,
		borderRadius: 5,
		height: viewSize,
		width: viewSize
	});
	var thumbnail = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		width: galleryView.width *2
	});
	galleryView.add(thumbnail);
	viewContainer.add(galleryView);
};

 
var expand = function(imSource){
	var singleView = Ti.UI.createWindow({
		backgroundColor: ("#29293d")
	});
	var expanded = Ti.UI.createImageView({
		image: imSource
	});
	var backButton = Ti.UI.createView({
		backgroundColor: ("#e0e0eb"),
		height: 40,
		bottom: 10,
		width: phWidth
	});
	var backButtonText = Ti.UI.createLabel({
		text: "Back",
		color: ("#404040")
	});
	var goBack = function(){
		singleView.close();
	};
	
	backButton.addEventListener("click", goBack);
	singleView.open();
	backButton.add(backButtonText);
	singleView.add(backButton, expanded);
};
viewContainer.addEventListener("click", function(thumbevent){
	expand(thumbevent.source.image);
	console.log(thumbevent);
});
mainWindow.add(viewContainer, closeGalleryButton);
