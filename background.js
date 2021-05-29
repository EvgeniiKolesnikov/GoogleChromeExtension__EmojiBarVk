// переключение иконок ========================================================

function icon_change() {	 
	chrome.storage.sync.get({
		keys1: true,
		keys2: true,
		panelOff: false,
		keys1_on: false,
		keys2_on: false
	}, function(items) {
		var panelOff = items.panelOff;
		var keys1_on =  items.keys1_on;
		var keys2_on =  items.keys2_on;
		var keys1 =  items.keys1;
		var keys2 =  items.keys2;
		
		var status = "";
		
		// если панель ВЫКЛЮЧЕНА - OFF
		if (panelOff) {																		// OFF - black
			//console.log('не включена Панель -');
			// включена ОБА  	// red
			if ((keys1_on) && (keys2_on) && (keys1) && (keys2)) {							// red
				//console.log('включена ОБА +');
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "2_black.png"	});				
			}
			if ((keys1_on) && (!keys2_on) && (keys1)) {										// green
				//console.log('включен левый +');	
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}
			if ((!keys1_on) && (keys2_on) && (keys2)) {										// blue
				//console.log('включен правый +');	
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}						
			if ((!keys1_on) && (!keys2_on)) {												// main
				//console.log('выключены ОБА -');
				status = "";
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "2_main.png"	});
			}
			
		// если панель ВКЛЮЧЕНА - ON
		} else if (!panelOff) {																// ON - color
			//console.log('включена Панель +');						
			if ((keys1_on) && (keys2_on) && (keys1) && (keys2)) {							// red
				//console.log('включена ОБА +');
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "1_red1.png"	});				
			}
			if ((keys1_on) && (!keys2_on) && (keys1)) {										// green
				//console.log('включен левый +');	
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "1_green.png"	});
			}
			if ((!keys1_on) && (keys2_on) && (keys2)) {										// blue
				//console.log('включен правый +');	
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "1_blue.png"	});
			}						
			if ((!keys1_on) && (!keys2_on)) {												// main
				//console.log('выключены ОБА -');
				status = "";
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "1_main.png"	});
			}
		}
		// переключение текста
		chrome.browserAction.setBadgeText( { text: status } );
	});
}

chrome.extension.onMessage.addListener(function(message, sender) {
	icon_change();
	//console.log('onMessage = background');
});
