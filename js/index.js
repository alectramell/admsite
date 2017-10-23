function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function dropSound() {

	var audio = new Audio('audio/drop.mp3');
	audio.volume = 1.0;
	audio.play()
}

function magicSound() {

	var audio = new Audio('audio/magic.mp3');
	audio.volume = 1.0;
	audio.play()
}

function faceBook() {

	window.open('http://m.facebook.com','Facebook','nonresizable,height=500,width=600');
	return false;
}

function gMail() {

	window.open('http://m.gmail.com','Gmail','nonresizable,height=500,width=600');
	return false;
}

function getWords() {

	var client = new XMLHttpRequest();
	client.open('GET', 'https://raw.githubusercontent.com/alectramell/admsite/master/words.txt');
	client.onreadystatechange = function() {
  	document.getElementById('words').innerHTML = client.responseText;
	}
	client.send();
}

function firefoxApps() {

	parent.location = 'firefoxAPPS.html';
}

function debianApps() {

	parent.location = 'debianAPPS.html';
}

function chromeApps() {

	parent.location = 'chromeAPPS.html';
}



