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

	// parent.location = 'debianAPPS.html';
	alert('Debian Linux Apps Are Temporarily Unavailable');
}

function html5Apps() {

	// parent.location = 'html5APPS.html';
	alert('HTML5 Web Apps Are Temporarily Unavailable');
}

function chromeApps() {

	parent.location = 'chromeAPPS.html';
}

function shellApps() {

	parent.location = 'shellAPPS.html';
}

function FBpage() {

	window.open('https://www.facebook.com/apollondma','_blank');
}

function athenaPage() {

	parent.location = 'athenaPage.html';
}

function FBshare() {

	window.open('http://www.apollondatametrics.com','_blank');
}

function devPortal() {

	// window.open('https://docs.google.com/forms/d/e/1FAIpQLScWo19B2mqVTFRJzG-tMBugY1MRp4Ncswg1CzLe96vhMuRfDA/viewform','_blank');

	alert('The Developer Portal is Temporarily Unavailable..');
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

	var accessLVL = localStorage.getItem('red');
	if ( document.getElementById('acode').value = 'red' ) {
		document.getElementById('memstatus').innerHTML = 'RED';
		memstatus.color = '#ff666a';
	} else {
		console.log('clear');
	}
}

function privDocGrey() {

	var accessLVL = localStorage.getItem('grey');
	if ( document.getElementById('acode').value = 'grey' ) {
		document.getElementById('memstatus').innerHTML = 'GREY';
		memstatus.color = '#959595';
	} else {
		console.log('clear');
	}
}

function privDocGreen() {

	var accessLVL = localStorage.getItem('green');
	if ( document.getElementById('acode').value = 'green' ) {
		document.getElementById('memstatus').innerHTML = 'GREEN';
		memstatus.color = '#82ff3d';
	} else {
		console.log('clear');
	}
}

function privDocBlue() {

	var accessLVL = localStorage.getItem('blue');
	if ( document.getElementById('acode').value = 'blue' ) {
		document.getElementById('memstatus').innerHTML = 'BLUE';
		memstatus.color = '#4e8fff';
	} else {
		console.log('clear');
	}
}

function privDocStatus() {

	var accessLVL = localStorage.getItem('blue');
	if ( accessLVL = 'blue' ) {
		document.getElementById('memstatus').innerHTML = 'blue';
		memstatus.color = '#4e8fff';
	} else {
		console.log('clear');
	}
}

