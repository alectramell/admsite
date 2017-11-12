function downAPP1() {

	if (window.confirm("WOULD YOU LIKE TO DOWNLOAD THIS APP?") == true) {
		alert('..CLICK OK TO CONTINUE DOWNLOAD..');
		window.open('https://github.com/alectramell/athena/blob/master/apps/helloworld-1.0/helloworld-1.0.zip?raw=true','_blank');
	} else {
		alert('..CLICK OK TO CONFIRM CANCEL..');
	}
}
