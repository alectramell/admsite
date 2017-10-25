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

	document.getElementById('words').innerHTML = 'Web App Marketplace';
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

function soundInfoON() {

	document.getElementById('words').innerHTML = 'Turn Sound On?';
	words.color='#959595';
}

function soundInfoOFF() {

	document.getElementById('words').innerHTML = 'Turn Sound Off?';
	words.color='#959595';
}

function accessPrivs() {

	window.open('membership.html','Access Privilages','nonresizable,height=500,width=700');
	return false;
}

function aboutPrivsRed() {

	document.getElementById('aprivs').innerHTML = 'RED';
	aprivs.color='#ff666a';	
}

function aboutPrivsGrey() {

	document.getElementById('aprivs').innerHTML = 'GREY';
	aprivs.color='#959595';	
}

function aboutPrivsGreen() {

	document.getElementById('aprivs').innerHTML = 'GREEN';
	aprivs.color='#82ff3d';	
}

function aboutPrivsBlue() {

	document.getElementById('aprivs').innerHTML = 'BLUE';
	aprivs.color='#4e8fff';	
}

function aboutPrivsWhite() {

	document.getElementById('aprivs').innerHTML = 'SELECT';
	aprivs.color='#ffffff';	
}

function privDocRed() {

	alert('RED Access is not an accessable option.');
	document.getElementById('memstatus').innerHTML = 'RED';
	memstatus.color = '#ff666a';
}

function privDocGrey() {

	alert('GREY Access is now Active');
	document.getElementById('memstatus').innerHTML = 'GREY';
	memstatus.color = '#959595';
}

function privDocGreen() {

	GREENcode = prompt('Please Enter GREEN Access Code:');
	document.getElementById('memstatus').innerHTML = 'GREEN';
	memstatus.color = '#82ff3d';
}

function privDocBlue() {

	BLUEcode = prompt('Please Enter BLUE Access Code:');
	document.getElementById('memstatus').innerHTML = 'BLUE';
	memstatus.color = '#4e8fff';
}

