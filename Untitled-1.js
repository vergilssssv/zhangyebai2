window.open=setBGC();
function setBGC() {
	
	var hour = t.getHours();
	switch(hour){
		case 10:document.getElementById("imgBg").style.background = "#0000ff";
			break;
		case 11:document.getElementById("imgBg").style.background = "#00ff00";
			break;
		case 12:document.getElementById("imgBg").style.background = "#800000";
			break;
		case 13:document.getElementById("imgBg").style.background = "#00ffff";
			break;
		case 14:document.getElementById("imgBg").style.background = "#000080";
			break;
		case 15:document.getElementById("imgBg").style.background = "#008000";
			break;
		case 16:document.getElementById("imgBg").style.background = "#800000";
			break;
		case 17:document.getElementById("imgBg").style.background = "#00ffff";
			break;
		case 18:document.getElementById("imgBg").style.background = "#ffff00";
			break;
	}
	
	}



//setInterval(setBGC, 300);