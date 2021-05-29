var current = 1;
var status;
var status3 = document.getElementById('status3');

document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('save').addEventListener('click', save_options);
document.getElementById('reset').addEventListener('click', reset_options);
document.getElementById('showIdBar1').addEventListener('click', save_showIdBar);
document.getElementById('showIdBar2').addEventListener('click', save_showIdBar);
document.getElementById('showBar').addEventListener('click', save_showIdBar);

function restore_options() {
  chrome.storage.sync.get({
    x: 9,

	kod1: 'f09f988a',
	kod2: 'f09f988c',
	kod3: 'f09f9889',
	kod4: 'f09f9884',
	kod5: 'f09fa4a3',
	kod6: 'f09f98b3',
	kod7: 'f09f989a',
	kod8: 'f09f988d',
	kod9: 'f09f988e',
	kod10: 'e298ba',
	kod11: 'f09f988f',
	kod12: 'f09f989f',
	kod13: 'f09f918df09f8fbb',
	kod14: 'f09fa497',
	kod15: 'f09f9883',
	
	kod16: 'f09f8e81',
	kod17: 'f09f8e89',
	kod18: 'f09f8e8a',
	kod19: 'f09f8e88',
	kod20: 'f09f8e82',
	kod21: 'f09f8db0',
	kod22: 'f09f9290',
	kod23: 'f09f8cb9',
	kod24: 'f09f8cba',
	kod25: 'f09f9296',
	kod26: 'e29895',
	kod27: 'f09f8d94',
	kod28: 'f09f94a5',
	kod29: 'e29880',
	kod30: 'e29d84',
	
	kodLoad: 'load',
	keys1: true,
	keys2: true,
	panelOff: false,
	keys1_on: false,
	keys2_on: false
	
  }, function(items) {
    document.getElementById('xsmile').value = items.x;

	document.getElementById('smile1').value = items.kod1;
	document.getElementById('smile2').value = items.kod2;
	document.getElementById('smile3').value = items.kod3;
	document.getElementById('smile4').value = items.kod4;
	document.getElementById('smile5').value = items.kod5;
	document.getElementById('smile6').value = items.kod6;
	document.getElementById('smile7').value = items.kod7;
	document.getElementById('smile8').value = items.kod8;
	document.getElementById('smile9').value = items.kod9;
	document.getElementById('smile10').value = items.kod10;
	document.getElementById('smile11').value = items.kod11;
	document.getElementById('smile12').value = items.kod12;
	document.getElementById('smile13').value = items.kod13;
	document.getElementById('smile14').value = items.kod14;
	document.getElementById('smile15').value = items.kod15;
	
	document.getElementById('smile16').value = items.kod16;
	document.getElementById('smile17').value = items.kod17;
	document.getElementById('smile18').value = items.kod18;
	document.getElementById('smile19').value = items.kod19;
	document.getElementById('smile20').value = items.kod20;
	document.getElementById('smile21').value = items.kod21;
	document.getElementById('smile22').value = items.kod22;
	document.getElementById('smile23').value = items.kod23;
	document.getElementById('smile24').value = items.kod24;
	document.getElementById('smile25').value = items.kod25;
	document.getElementById('smile26').value = items.kod26;
	document.getElementById('smile27').value = items.kod27;
	document.getElementById('smile28').value = items.kod28;
	document.getElementById('smile29').value = items.kod29;
	document.getElementById('smile30').value = items.kod30;
	
	document.getElementById('showIdBar1').checked = items.keys1;
	document.getElementById('showIdBar2').checked = items.keys2;
	document.getElementById('showBar').checked = items.panelOff;
	
	// Проверка на старые коды 
	var DS0 = document.getElementById('smile1').value.charAt(0);
	if ((DS0 == 'D') || (DS0 == '2')) {
		// удаляем старые коды
		chrome.storage.sync.clear();
		// загружаем стандартные коды
		restore_options();
	}
  });
}


function save_options() {
	var likesxsmile = Number(document.getElementById('xsmile').value);
	
	var kod_smile1 = document.getElementById('smile1').value;
	var kod_smile2 = document.getElementById('smile2').value;
	var kod_smile3 = document.getElementById('smile3').value;
	var kod_smile4 = document.getElementById('smile4').value;
	var kod_smile5 = document.getElementById('smile5').value;
	var kod_smile6 = document.getElementById('smile6').value;
	var kod_smile7 = document.getElementById('smile7').value;
	var kod_smile8 = document.getElementById('smile8').value;
	var kod_smile9 = document.getElementById('smile9').value;
	var kod_smile10 = document.getElementById('smile10').value;
	var kod_smile11 = document.getElementById('smile11').value;
	var kod_smile12 = document.getElementById('smile12').value;
	var kod_smile13 = document.getElementById('smile13').value;
	var kod_smile14 = document.getElementById('smile14').value;
	var kod_smile15 = document.getElementById('smile15').value;
	
	var kod_smile16 = document.getElementById('smile16').value;
	var kod_smile17 = document.getElementById('smile17').value;
	var kod_smile18 = document.getElementById('smile18').value;
	var kod_smile19 = document.getElementById('smile19').value;
	var kod_smile20 = document.getElementById('smile20').value;
	var kod_smile21 = document.getElementById('smile21').value;
	var kod_smile22 = document.getElementById('smile22').value;
	var kod_smile23 = document.getElementById('smile23').value;
	var kod_smile24 = document.getElementById('smile24').value;
	var kod_smile25 = document.getElementById('smile25').value;
	var kod_smile26 = document.getElementById('smile26').value;
	var kod_smile27 = document.getElementById('smile27').value;
	var kod_smile28 = document.getElementById('smile28').value;
	var kod_smile29 = document.getElementById('smile29').value;
	var kod_smile30 = document.getElementById('smile30').value;
	
	chrome.storage.sync.set({ 
		x: likesxsmile, 
		
		kod1: kod_smile1,
		kod2: kod_smile2,
		kod3: kod_smile3,
		kod4: kod_smile4,
		kod5: kod_smile5,
		kod6: kod_smile6,
		kod7: kod_smile7,
		kod8: kod_smile8,
		kod9: kod_smile9,
		kod10: kod_smile10,
		kod11: kod_smile11,
		kod12: kod_smile12,
		kod13: kod_smile13,
		kod14: kod_smile14,
		kod15: kod_smile15,
		
		kod16: kod_smile16,
		kod17: kod_smile17,
		kod18: kod_smile18,
		kod19: kod_smile19,
		kod20: kod_smile20,
		kod21: kod_smile21,
		kod22: kod_smile22,
		kod23: kod_smile23,
		kod24: kod_smile24,
		kod25: kod_smile25,
		kod26: kod_smile26,
		kod27: kod_smile27,
		kod28: kod_smile28,
		kod29: kod_smile29,
		kod30: kod_smile30
		
	}, function(items) {
		var status = document.getElementById('status');
		status.textContent = "Настройки сохранены. Обновите страничку ВК";
		setTimeout(function() {
			status.textContent = ' ';
		}, 1750);
	});
}


function save_showIdBar() {
	console.log('сработало событие на нажатие чекбокса ');
    var what_keys1 = document.getElementById('showIdBar1').checked;
	var what_keys2 = document.getElementById('showIdBar2').checked;
	var what_panelOff = document.getElementById('showBar').checked;
	chrome.storage.sync.set({ 
		keys1: what_keys1,
		keys2: what_keys2,
		panelOff: what_panelOff,
		keys1_on: false,
		keys2_on: false
	});
	// изменить вид иконки
	icon_change();
}


// Восстановить стандартные настройки
function reset_options() {
		chrome.storage.sync.clear();
		restore_options();
		icon_change();
		var status = document.getElementById('status2');
		status.textContent = "Настройки восстановлены. Обновите страничку ВК";
		setTimeout(function() {
			status.textContent = "Если понравилось расширение, оставь отзыв :)";
		}, 1750);
}

// каждую секунду =====================================================================
window.onload = function() {
	var timer= setInterval(function() {	
		var real_x = document.getElementById('xsmile').value;  			// Количество смайликов
		var table_x = document.getElementById('table_id');	
		console.log('real_x = ', real_x);
		/*
		var table_trs = document.getElementById('table_id').getElementsByTagName("tr");  
		var table_lenght = table_trs.length;
		console.log('table_lenght = ', table_lenght);
		console.log('table_trs = ', table_trs);
		
		console.log('table_x.rows[7].style.display = ', table_x.rows[7].style.display = "");
		console.log('table_trs[8].style.display = ', table_trs[8].style.display = "");
		*/
		
		OnOff_Rows(real_x, table_x);
		
		var smilebar = document.getElementById('smilebar'); 	// Панель смайликов
		smilebar.innerHTML = "";
		
		var i;
		for (i = 1; i <= 30; i++) {
			var skod = 'smile' + i;
			var sid = document.getElementById(skod).value;
			//console.log('sid = ', sid);
			var simg = 'smile' + i +'img';
			var simgid = document.getElementById(simg);
			var shtml = 	  '<img src="https://vk.com/emoji/e/' + sid + '.png" class="smile_table"></a>';	
				simgid.innerHTML = shtml;
			
			// просмотр в панели сразу
			if (i<=real_x) {
				var shtml_panel = '<img src="https://vk.com/emoji/e/' + sid + '.png" class="smile_bar"></a>';	
				smilebar.innerHTML += shtml_panel;
			}
		}
	}, 1000);
}

// Видимость СТРОК таблицы 
function OnOff_Rows(x, table_name) {
	// Выключение строк таблицы
	var i;
	var x1 = Number(x)+2;
	var x2 = table_name.rows.length-2;
	for (i = x1; i <= x2; i++) {
		//table_name.rows[2].style.display ;						// первая ячейка с кодами 	    	 2: первый смайлик 		(1)
		//table_name.rows[table_x.rows.length-2].style.display;		// последняя ячейчка с кодами	    16: последний смайлик  (15)
		table_name.rows[i].style.display = "none";
	} 
	//console.log('OFF cells = ', x1, x2);
	
	// Включение строк таблицы
	var x3 = 2;
	var x4 = Number(x)+1;
	for (i = x3; i <= x4; i++) {
		table_name.rows[i].style.display = "";
		table_name.rows[i].style.display = "table_row";
	}
	//console.log('ON cells = ', x3, x4);
 }
 
// иконки =================================================================================================

function icomode() {	
    status = "";                                     
	//chrome.browserAction.setBadgeBackgroundColor({color: [203,0,0,255]});
	//													    Red, Green, Blue, Alpha
	if (current==1) {
		status = "☺ ☺";
		chrome.browserAction.setBadgeBackgroundColor({color: [222,222,0,255]});		//black 
		chrome.browserAction.setIcon({ path : "2_black.png"	});
	}
	if (current==2) {
		status = "☺ ☺";
		chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});		//red
		chrome.browserAction.setIcon({ path : "1_red1.png"	});
	}
	if (current==3) {
		status = "    ☺";
		chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	// blue
		chrome.browserAction.setIcon({ path : "1_blue.png"	});
	}
	if (current==4) {
		status = "☺    ";
		chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		// green
		chrome.browserAction.setIcon({ path : "1_green.png"	});
	}
	if (current==5) {
		status = "";
		chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	// white
		chrome.browserAction.setIcon({ path : "1_main.png"	});
	}
	if (current==6) {
		status = "";
		chrome.browserAction.setBadgeBackgroundColor({color: [0,0,0,255]});			//black 
		chrome.browserAction.setIcon({ path : "2_main.png"	});
	}
	chrome.browserAction.setBadgeText( { text: status } );
	current++;
	if (current > 6) {
		current = 1;
	}
}


// переключение иконок ========================================================

function icon_change() {	 
	chrome.storage.sync.get({
		keys1: true,
		keys2: true,
		panelOff: false,
		keys1_on: false,
		keys2_on: false
	}, function(items) {
		console.log('items.keys1', items.keys1);
		console.log('items.keys2', items.keys2);
		console.log('items.panelOff', items.panelOff);
		var panelOff = items.panelOff;
		var keys1_on =  items.keys1_on;
		var keys2_on =  items.keys2_on;
		var keys1 =  items.keys1;
		var keys2 =  items.keys2;
		
		status = "";
		
		// если панель ВЫКЛЮЧЕНА - OFF
		if (panelOff) {																		// OFF - black
			console.log('не включена Панель -');
			// включена ОБА  	// red
			if ((keys1) && (keys2)) {							// red
				console.log('включена ОБА +');
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "2_black.png"	});		
								
			}
			if ((keys1) && (!keys2)) {										// green
				console.log('включен левый +');	
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}
			if ((!keys1) && (keys2)) {										// blue
				console.log('включен правый +');	
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}						
			if ((!keys1) && (!keys2)) {												// main
				console.log('выключены ОБА -');
				status = "";
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "2_main.png"	});
			}
			status3.textContent = "Настройки сохранены. Обновите страничку ВК";
			setTimeout(function() {
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "2_main.png"	});
				chrome.browserAction.setBadgeText( { text: "" } );
				status3.textContent = '';
			}, 1750);
		// если панель ВКЛЮЧЕНА - ON
		} else if (!panelOff) {																// ON - color
			console.log('включена Панель +');						
			if ((keys1) && (keys2)) {							// red
				console.log('включена ОБА +');
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "1_red1.png"	});				
			}
			if ((keys1) && (!keys2)) {										// green
				console.log('включен левый +');	
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "1_green.png"	});
			}
			if ((!keys1) && (keys2)) {										// blue
				console.log('включен правый +');	
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "1_blue.png"	});
			}						
			if ((!keys1) && (!keys2)) {												// main
				console.log('выключены ОБА -');
				status = "";
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "1_main.png"	});
			}
			status3.textContent = "Настройки сохранены. Обновите страничку ВК";
			setTimeout(function() {
				chrome.browserAction.setBadgeBackgroundColor({color: [255,255,255,255]}); 	
				chrome.browserAction.setIcon({ path : "1_main.png"	});
				chrome.browserAction.setBadgeText( { text: "" } );
				status3.textContent = '';
			}, 1750);
		}
		// переключение текста
		chrome.browserAction.setBadgeText( { text: status } );
	});
}
