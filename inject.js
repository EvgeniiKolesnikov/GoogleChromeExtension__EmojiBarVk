// console.log('============================ Start Script ===================================');

var smile = false;
var k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13,k14,k15;
var x;
var numberSmile = false;
var numberSmileNum = false;

var keys1, keys2, keys1_on,	keys2_on;
	
// видимость панели
var showBar = true;
// невидимая панель для клавиш
var showIdBar = true;

window.onload = function() {				
	main_onload();
}

function main_onload(){
	loadEmoji();
	console.log('============================ Start Timer ===================================');
	var timer= setInterval(function() {	
		// В сообщениях постоянно скачет smile = true/false. Вне диалогов только false.
		var place = document.getElementsByClassName("im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap");
		console.log('place.length = ', place.length);
		var prev = document.getElementsByClassName("page_progress_preview media_preview clear_fix");
		console.log('prev.length = ', prev.length);
		
		// class="fl_r emoji_shop" onclick="Emoji.showStickersStore(0);"
		
		var emoji_shop = document.getElementsByClassName("fl_r emoji_shop");
		console.log('emoji_shop = ', emoji_shop);
		var e2 = document.getElementsByClassName("emoji_smile_wrap im-chat-input--smile-wrap _emoji_wrap");
		var e3 = document.getElementsByClassName("emoji_smile_icon_vector emoji_smile_icon");

		
		if (prev.length >= 1) { 
			console.log('prev[0].id = ', prev[0].id);
			console.log('prev[prev.length-1].id = ', prev[prev.length-1].id);
		}
		if (!smile) { 	
			console.log('timer - if (!smile)', smile);
			
			if (place.length == 1) { 	
				console.log('if !smile = place.length = 1', place.length);
				console.log('place = ', place);
				console.log('emoji_shop = ', emoji_shop);
				console.log('e2 = ', e2);
				console.log('e2 = ', e3);
				prev = document.getElementsByClassName("page_progress_preview media_preview clear_fix");
				console.log('prev = ', prev);
				
				// возможно, если порядок будет разный у дивов, то нужно будет сравнивать и искать наибольшее из чисел
				var v1 = 0;
				var v_smile = 0;
				
				for (j = 0; j <= prev.length-1; j++) { 
					var last_id = prev[j].id;
					console.log('last_id = prev[', j , '].id = ', last_id);
					var last = Number(last_id.replace(/\D+/g,""));
					console.log('last = Number(last_id.replace(/\D+/g,"") = ', last);
					if (last>v1) {
						v1 = last;
					}
				}
				console.log('v1 = ', v1);
				var v_smile = v1-1
				console.log('v_smile = ', v_smile, ', v1 = ', v1);
				
				
				if (prev.length >= 1) { 
					var last_id = prev[prev.length-1].id;
					console.log('last_id = prev[prev.length].id = ', last_id);
					var last = Number(last_id.replace(/\D+/g,""));
					var l = last-1;
					console.log('last = ', last, ', l  = ', l);
				}
				
				loadSmile(v_smile); 
				console.log('loadSmile(v_smile)');
				smile = true; 
				
				if (v_smile != l) {
					alert('v_smile != l');
				}
				console.log('if place.length == 1. === loadSmile(l) === !smile to smile = ', smile);

			}
		}
		if (smile) { 	
			// console.log('timer - if (smile) = 000 ', smile);
			if (place.length == 0) { 
				smile = false;
				console.log('timer - if (smile) % (place.length) == 0. smile to !smile = ', smile);
			}
		}	
	}, 750);
}

function loadSmile(z){
	console.log('============================ loadSmile ===================================');
	var findInput = document.getElementsByClassName("im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap");
	var smilebar = document.createElement('div');
	if (showBar) {
		smilebar.className = "emoji_smile_container";	
	} else {	
		smilebar.className = "emoji_smile_container_infinity";	
	}
	smilebar.id = "smile_container_id";
	findInput[0].appendChild(smilebar);						
	smilebar.innerHTML = "";	
	
	var i;
	for (i = 1; i <= x; i++) { 
		var skod = window["k" + i];	
		var smile_id = "smile_id_" + i;

		// панель обычных смайлов
		if (showBar) {
			smilebar.innerHTML += '<a class="emoji_smile_cont2" onmousedown="Emoji.addEmoji('+ z + ', \'' + skod + '\' , this); return cancelEvent(event);" onclick="return cancelEvent(event);" onmouseover="return Emoji.emojiOver(' + z + ', this, true);"><img class="emoji" src="/emoji/e/' + skod + '.png"></a>';
		}
		
		// панель невидимых смайлов
		if (showIdBar) {
			smilebar.innerHTML += '<a class="emoji_id" id = "'+ smile_id +'" onclick="Emoji.addEmoji('+ z + ', \'' + skod + '\' , this); return cancelEvent(event);"></a>';
		}	
	}
}

function loadEmoji() {
	// console.log('============================ loadEmoji ===================================');
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
	x = items.x;
	
	k1 = items.kod1;
	k2 = items.kod2;
	k3 = items.kod3;
	k4 = items.kod4;
	k5 = items.kod5;
	k6 = items.kod6;
	k7 = items.kod7;
	k8 = items.kod8;
	k9 = items.kod9;
	k10 = items.kod10;
	k11 = items.kod11;
	k12 = items.kod12;
	k13 = items.kod13;
	k14 = items.kod14;
	k15 = items.kod15;
	
	k16 = items.kod16;
	k17 = items.kod17;
	k18 = items.kod18;
	k19 = items.kod19;
	k20 = items.kod20;
	k21 = items.kod21;
	k22 = items.kod22;
	k23 = items.kod23;
	k24 = items.kod24;
	k25 = items.kod25;
	k26 = items.kod26;
	k27 = items.kod27;
	k28 = items.kod28;
	k29 = items.kod29;
	k30 = items.kod30;
	
	showBar = !(items.panelOff);
	keys1 = items.keys1;
	keys2 = items.keys2;
	keys1_on = items.keys1_on;
	keys2_on = items.keys2_on;
	
	addFunc();
	
	console.log('showBar = ', showBar);
	console.log('keys1 = ', keys1);
	console.log('keys2 = ', keys2);
	console.log('keys1_on = ', keys1_on);
	console.log('keys2_on = ', keys2_on);
	
	// Проверка на старые коды 
	var DS = k1.charAt(0);
	if ((DS == 'D') || (DS == '2')) {
		// удаляем старые коды
		chrome.storage.sync.clear();
		// загружаем стандартные коды
		loadEmoji();
	}
  });
}


// создать функцию для слежения за клавишами. Если выбрано в настройках
function addFunc() {
	
	if ((keys1) || (keys2)) {
		document.addEventListener("keydown", moveRect);
		console.log('addEventListener = ', addEventListener);
	}
}


function moveRect(e){
    var keycode = e.keyCode?e.keyCode:e.keyChar;
	var altkey = e.altKey;
	var ctrlkey = e.ctrlKey;
	//console.log('. . . e.keyCode = ', e.keyCode, '. . . keycode = ', keycode);
	
	// ПРОВЕРКА, работают ли дополнительные кнопки 
	var dopkey = false;
	if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
		dopkey = true;
	} else {
		dopkey = false;
	}
	
	// ВКЛ/ВЫКЛ смайлики. Буква Ё - 192
	if ((altkey) && (keycode == 192) || (ctrlkey) && (keycode == 192) && (keys1)) {		
		e.preventDefault();
		console.log('dopkey && keycode = 192 (ё)');
		
		if (keys1_on) {
			keys1_on = false;
		} else {
			keys1_on = true;
		}
		console.log('keys1_on = ', keys1_on);
		icon_change();
	}
	
	// ВКЛ/ВЫКЛ смайлики. Цифра num 0 - 96
	if ((altkey) && (keycode == 96) || (ctrlkey) && (keycode == 96) && (keys2)) {		
		e.preventDefault();
		console.log('dopkey && keycode = 96 (num 0)');
		if (keys2_on) {
			keys2_on = false;
		} else {
			keys2_on = true;
		}
		console.log('keys2_on = ', keys2_on);
		icon_change();
	}
	
	// Добавляем смайлики  // цифра 1 - 9 (49 - 57) // Если мы в диалогах
	if ((!dopkey) && (keys1_on) && (smile) && (keycode>=49) && (keycode<=57)) {
        console.log(' === no dopkey && numberSmile && keycode = 49-57 ===  ');
		var smile_id_key = "smile_id_" + (keycode-48);
		//console.log('smile_id_key = ', smile_id_key);
		e.preventDefault();
		document.getElementById(smile_id_key).click();
	}
		
	// Добавляем NUM смайлики	// цифра num 1 - 9 (97 - 105)
	if ((!dopkey) && (keys2_on) && (smile) && (keycode>=97) && (keycode<=105)) {
        console.log(' ======= no dopkey && numberSmile =======  ');
		var smile_id_key = "smile_id_" + (keycode-96);
		//console.log('smile_id_key = ', smile_id_key);
		e.preventDefault();
		document.getElementById(smile_id_key).click();
	}
	
}

function updateIcon() {
	console.log('выключ');
};

// переключение иконок ========================================================

function icon_change() {	
	chrome.storage.sync.set({ 
		keys1: keys1,
		keys2: keys2,
		keys1_on: keys1_on,
		keys2_on: keys2_on,
		panelOff: !showBar
	});
	chrome.extension.sendMessage({color: "black"});
	
}