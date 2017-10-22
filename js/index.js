function dropSound() {

	var audio = new Audio('audio/drop.mp3');
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

function getWords(){

	var client = new XMLHttpRequest();
	client.open('GET', 'https://raw.githubusercontent.com/alectramell/beacons/master/colors.sh');
	client.onreadystatechange = function() {
  	document.getElementById('words').innerHTML = client.responseText;
	}
	client.send();
}



