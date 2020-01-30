/* Alex Tetervak, Sheridan College, Ontario */
import { Flower } from './modules/flower.mjs';

const names = ["aster", "carnation", "daffodil", "orchid", "rose"];

// mae the array of the flower objects
let flowers = [];
names.forEach(name => flowers.push(new Flower(name)));

// preload the images
let images = [];
flowers.forEach(function(flower){
	let image = new Image();
	image.src = flowerLargeImageSrc(flower.name);
	images.push(image);
});

// starts using jQuery
$(function() {
    makeImageList(); // make the list of small images
    displayFlower(0); // insert the first flower large image and info
	selectFirstImage(); // make the first image look selected
    setupClicks(); // make the small images clickable
});

function flowerLargeImageSrc(name){
	return `images/flowers/${name}_large.jpeg`;
}

function flowerSmallImageSrc(name){
	return `images/flowers/${name}_small.jpeg`;
}

// makes the list of the small images
function makeImageList(){
	let $list = $("#image_list");
	flowers.forEach(function(flower, index){
		let image = flowerSmallImageSrc(flower.name);
		let $img = $(`<img src="${image}" alt="${flower.name}">`);
        $img.attr("data-index", index);
		$img.addClass("thumb");
		$img.appendTo($list);
	});
}

// display the flower
function displayFlower(index){
	let flower = flowers[index];
	$("span.flower_name").text(flower.label);
	let image = flowerLargeImageSrc(flower.name);
    $("img.flower_image")
		.attr("src", image)
		.attr("alt", flower.label);
}

// make the first image look selected
function selectFirstImage(){
    $("#image_list img:first").addClass("selected");
}

// make the small images clickable
function setupClicks(){
	$("img.thumb").click(function(){
		$("#image_list img.selected").removeClass("selected");
		$(this).addClass("selected");
		displayFlower($(this).data("index"));
	});
}
