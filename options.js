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
    x: 15,

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
	kod13: 'f09f9898',
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
	
	kod31: 'f09f918df09f8fbb',
	kod32: 'f09f918ef09f8fbb',
	kod33: 'e2989df09f8fbb',
	kod34: 'e29c8cf09f8fbb',
	kod35: 'f09f918cf09f8fbb',
	kod36: 'f09f9695f09f8fbb',
	kod37: 'f09fa498f09f8fbb',
	kod38: 'f09f918ff09f8fbb',
	kod39: 'f09f918af09f8fbb',
	kod40: 'f09f92aaf09f8fbb',
	kod41: 'e29c8bf09f8fbb',
	kod42: 'f09f9690f09f8fbb',
	kod43: 'f09f9696f09f8fbb',
	kod44: 'f09f998ff09f8fbb',
	kod45: 'f09f998cf09f8fbb',

	kodLoad: 'load',
	readed: true,
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
	
	document.getElementById('smile31').value = items.kod31;
	document.getElementById('smile32').value = items.kod32;
	document.getElementById('smile33').value = items.kod33;
	document.getElementById('smile34').value = items.kod34;
	document.getElementById('smile35').value = items.kod35;
	document.getElementById('smile36').value = items.kod36;
	document.getElementById('smile37').value = items.kod37;
	document.getElementById('smile38').value = items.kod38;
	document.getElementById('smile39').value = items.kod39;
	document.getElementById('smile40').value = items.kod40;
	document.getElementById('smile41').value = items.kod41;
	document.getElementById('smile42').value = items.kod42;
	document.getElementById('smile43').value = items.kod43;
	document.getElementById('smile44').value = items.kod44;
	document.getElementById('smile45').value = items.kod45;

	document.getElementById('showIdBar1').checked = items.keys1;
	document.getElementById('showIdBar2').checked = items.keys2;
	document.getElementById('showBar').checked = items.panelOff;
	
	chrome.storage.sync.set({ 
		readed: true
	}); 
	
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
	
	var kod_smile31 = document.getElementById('smile31').value;
	var kod_smile32 = document.getElementById('smile32').value;
	var kod_smile33 = document.getElementById('smile33').value;
	var kod_smile34 = document.getElementById('smile34').value;
	var kod_smile35 = document.getElementById('smile35').value;
	var kod_smile36 = document.getElementById('smile36').value;
	var kod_smile37 = document.getElementById('smile37').value;
	var kod_smile38 = document.getElementById('smile38').value;
	var kod_smile39 = document.getElementById('smile39').value;
	var kod_smile40 = document.getElementById('smile40').value;
	var kod_smile41 = document.getElementById('smile41').value;
	var kod_smile42 = document.getElementById('smile42').value;
	var kod_smile43 = document.getElementById('smile43').value;
	var kod_smile44 = document.getElementById('smile44').value;
	var kod_smile45 = document.getElementById('smile45').value;

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
		kod30: kod_smile30,
		kod31: kod_smile31,
		kod32: kod_smile32,
		kod33: kod_smile33,
		kod34: kod_smile34,
		kod35: kod_smile35,
		kod36: kod_smile36,
		kod37: kod_smile37,
		kod38: kod_smile38,
		kod39: kod_smile39,
		kod40: kod_smile40,
		kod41: kod_smile41,
		kod42: kod_smile42,
		kod43: kod_smile43,
		kod44: kod_smile44,
		kod45: kod_smile45
		
	}, function(items) {
		var status = document.getElementById('status');
		status.textContent = "Настройки сохранены. Обновите страничку ВК";
		setTimeout(function() {
			status.textContent = ' ';
		}, 1750);
	});
}


function save_showIdBar() {
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
		
		OnOff_Rows(real_x, table_x);
		
		var smilebar = document.getElementById('smilebar'); 	// Панель смайликов
		smilebar.innerHTML = "";
		
		var i;
		for (i = 1; i <= 45; i++) {
			var skod = 'smile' + i;
			var sid = document.getElementById(skod).value;
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
		table_name.rows[i].style.display = "none";
	} 

	// Включение строк таблицы
	var x3 = 2;
	var x4 = Number(x)+1;
	for (i = x3; i <= x4; i++) {
		table_name.rows[i].style.display = "";
		table_name.rows[i].style.display = "table_row";
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
		var panelOff = items.panelOff;
		var keys1_on =  items.keys1_on;
		var keys2_on =  items.keys2_on;
		var keys1 =  items.keys1;
		var keys2 =  items.keys2;
		
		status = "";
		
		// если панель ВЫКЛЮЧЕНА - OFF
		if (panelOff) {																		// OFF - black
			// включена ОБА  	// red
			if ((keys1) && (keys2)) {							// red
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "2_black.png"	});		
								
			}
			if ((keys1) && (!keys2)) {										// green
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}
			if ((!keys1) && (keys2)) {										// blue
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "2_black.png"	});
			}						
			if ((!keys1) && (!keys2)) {												// main
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
			if ((keys1) && (keys2)) {							// red
				status = "☺ ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [218,64,22,255]});
				chrome.browserAction.setIcon({ path : "1_red1.png"	});				
			}
			if ((keys1) && (!keys2)) {										// green	
				status = "☺    ";
				chrome.browserAction.setBadgeBackgroundColor({color: [0,170,0,255]}); 		
				chrome.browserAction.setIcon({ path : "1_green.png"	});
			}
			if ((!keys1) && (keys2)) {										// blue
				status = "    ☺";
				chrome.browserAction.setBadgeBackgroundColor({color: [10,133,230,255]}); 	
				chrome.browserAction.setIcon({ path : "1_blue.png"	});
			}						
			if ((!keys1) && (!keys2)) {												// main
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
