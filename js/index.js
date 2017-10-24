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

	wait(10000)
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

function firefoxAppsMute() {

	parent.location = 'firefoxAPPSmute.html';
}

function debianAppsMute() {

	parent.location = 'debianAPPSmute.html';
}

function chromeAppsMute() {

	parent.location = 'chromeAPPSmute.html';
}

function FBpage() {

	window.open('https://www.facebook.com/apollondma','_blank');
}

function checkBrowser() { 
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) 
   {
       document.getElementById('words').innerHTML = 'If it helps, you are currently using Opera..';
       words.color='#4c4c4c';
   }
   else if(navigator.userAgent.indexOf("Chrome") != -1 )
   {
       document.getElementById('words').innerHTML = 'If it helps, you are currently using Google Chrome..';
       words.color='#4c4c4c';
   }
   else if(navigator.userAgent.indexOf("Safari") != -1)
   {
       document.getElementById('words').innerHTML = 'If it helps, you are currently using Safari..';
       words.color='#4c4c4c'; 
   }
   else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
   {
       document.getElementById('words').innerHTML = 'If it helps, you are currently using Firefox..';
       words.color='#4c4c4c'; 
   }
   else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) //IF IE > 10
   {
       document.getElementById('words').innerHTML = 'If it helps, you are currently using Internet Explorer..';
       words.color='#4c4c4c'; 
   }  
   else 
   {
       document.getElementById('words').innerHTML = 'Web App Marketplace';
       words.color='#4c4c4c';
   }
}

