// console.log('============================ Start Script ===================================');

var smile = false;
var k1,k2,k3,k4,k5,k6,k7,k8,k9,k10,k11,k12,k13,k14,k15;
var x;

var keys1, keys2, keys1_on,	keys2_on;
var massege;

// видимость панели
var showBar = true;

window.onload = function() {	
	main_onload();
}

function main_onload(){
	loadEmoji();
	//console.log('============================ Start Timer ===================================');
	var timer= setInterval(function() {	
		//console.log('tik');
		var place = document.getElementsByClassName("im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap");
		if ((!smile) && (place.length >= 1)) { 		
			var prev = document.getElementsByClassName("page_progress_preview media_preview clear_fix");
			var v1 = 0;
			for (j = 0; j <= prev.length-1; j++) { 
				var last_id = prev[j].id;
				var last = Number(last_id.replace(/\D+/g,""));
				if (last>v1) {
					v1 = last;
				}
			}
			var v_smile = v1-1;
			loadSmile(v_smile); 
			smile = true; 
		}
		if ((smile) && (place.length == 0)) { 
				smile = false;
		}
	}, 750);
}

function loadSmile(z){
	//console.log('============================ loadSmile ===================================');
	var findInput = document.getElementsByClassName("im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap");
	var smilebar = document.createElement('div');
	if (showBar) {
		smilebar.className = "emoji_smile_container";	
	} else {	
		smilebar.className = "emoji_smile_container_infinity";	
	}

						
	smilebar.innerHTML = "";	
	
	var i;
	for (i = 1; i <= x; i++) { 
		var skod = window["k" + i];	
		var smile_id = "smile_id_" + i;
		// панель обычных смайлов
		if (showBar) {
			smilebar.innerHTML += '<a class="emoji_smile_cont2" onmousedown="Emoji.addEmoji('+ z + ', \'' + skod + '\' , this); return cancelEvent(event);" onclick="return cancelEvent(event);" onmouseover="return Emoji.emojiOver(' + z + ', this, true);"><img class="emoji" src="/emoji/e/' + skod + '.png"></a>';
		}
		/*
		if (showBar) {
			smilebar.innerHTML += '<a class="emoji_smile_cont2" onmousedown="Emoji.addEmoji('+ z + ', \'' + skod + '\' , this); return cancelEvent(event);" onclick="return cancelEvent(event);" onmouseover="return Emoji.emojiOver(' + z + ', this, true);"><img class="emoji" src="/emoji/e/' + skod + '.png"></a>';
		}
		*/
	}
	for (i = 1; i <= 9; i++) { 
		var skod = window["k" + i];	
		var smile_id = "smile_id_" + i;
		// панель невидимых смайлов
		if (keys1 || keys2) {
			smilebar.innerHTML += '<a class="emoji_id" id = "'+ smile_id +'" onclick="Emoji.addEmoji('+ z + ', \'' + skod + '\' , this); return cancelEvent(event);"></a>';
		}	
	}
	
	/*
	var a1 = document.createElement('a');
	a1.className = "emoji_smile_cont3";
	a1.setAttribute('onmousedown', 'Emoji.addEmoji(0, \'  f09f988d  \' , this); return cancelEvent(event);');
	var pic1 = document.createElement('img');
	pic1.className = "emoji";
	pic1.setAttribute('src', '/emoji/e/f09f988d.png');
	findInput[0].appendChild(a1);
	a1.appendChild(pic1);
	*/
	
	findInput[0].appendChild(smilebar);	
	
	console.dir(findInput);
	console.log(smilebar.innerHTML);
	
}

function loadEmoji() {
	// console.log('============================ loadEmoji ===================================');
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
	readed: false,
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
	
	k31 = items.kod31;
	k32 = items.kod32;
	k33 = items.kod33;
	k34 = items.kod34;
	k35 = items.kod35;
	k36 = items.kod36;
	k37 = items.kod37;
	k38 = items.kod38;
	k39 = items.kod39;
	k40 = items.kod40;
	k41 = items.kod41;
	k42 = items.kod42;
	k43 = items.kod43;
	k44 = items.kod44;
	k45 = items.kod45;

	showBar = !(items.panelOff);
	keys1 = items.keys1;
	keys2 = items.keys2;
	keys1_on = items.keys1_on;
	keys2_on = items.keys2_on;
	massege = items.readed;

	addFunc();
	icon_change();
	// Проверка на старые коды 
	var DS = k1.charAt(0);
	if ((DS == 'D') || (DS == '2')) {
		// удаляем старые коды
		chrome.storage.sync.clear();
		// загружаем новые стандартные коды
		loadEmoji();
	}
	if (!massege) {
		chrome.storage.sync.set({ 
			readed: true
		}); 
		alert('EmojiBar Vk. Теперь возможно печатать смайлы с клавиатуры! \r Подробнее в настройках');
		massege = true;
	} 
  });
}


// функция нажатия клавиш. Если выбрано в настройках
function addFunc() {
	if ((keys1) || (keys2)) {
		document.addEventListener("keydown", moveRect);
		icon_change();
	}
}


function moveRect(e){
    var keycode = e.keyCode?e.keyCode:e.keyChar;
	var altkey = e.altKey;
	var ctrlkey = e.ctrlKey;

	// ПРОВЕРКА, работают ли дополнительные кнопки 
	var dopkey = false;
	if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) {
		dopkey = true;
	} else {
		dopkey = false;
	}
	
	// ВКЛ/ВЫКЛ смайлики. Буква Ё - 192
	if (((altkey) && (keycode == 192) && (keys1)) || ((ctrlkey) && (keycode == 192) && (keys1))) {		
		e.preventDefault();
		if (keys1_on) {
			keys1_on = false;
		} else {
			keys1_on = true;
		}
		icon_change();
		var findInput = document.getElementsByClassName("im-chat-input--textarea fl_l _im_text_input _emoji_field_wrap _voice_field_wrap");
		console.dir(findInput);
	}
	// ВКЛ/ВЫКЛ смайлики. Цифра num 0 - 96
	if (((altkey) && (keycode == 96) && (keys2)) || ((ctrlkey) && (keycode == 96) && (keys2))) {		
		e.preventDefault();
		if (keys2_on) {
			keys2_on = false;
		} else {
			keys2_on = true;
		}
		icon_change();
	}
	// Добавляем смайлики  // цифра 1 - 9 (49 - 57) // Если мы в диалогах
	if ((!dopkey) && (keys1_on) && (smile) && (keycode>=49) && (keycode<=57)) {
		var smile_id_key = "smile_id_" + (keycode-48);
		e.preventDefault();
		document.getElementById(smile_id_key).click();
	}
	// Добавляем NUM смайлики	// цифра num 1 - 9 (97 - 105) // Если мы в диалогах
	if ((!dopkey) && (keys2_on) && (smile) && (keycode>=97) && (keycode<=105)) {
		var smile_id_key = "smile_id_" + (keycode-96);
		e.preventDefault();
		document.getElementById(smile_id_key).click();
	}
}

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