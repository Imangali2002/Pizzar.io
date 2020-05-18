var goods5 = {
	"1046": {
		"name": "Картофельные фри",
		"cost": 950,
		"img": "images/zakuski/free.png"
	},
	"1047": {
		"name": "Луковые колечки",
		"cost": 600,
		"img": "images/zakuski/lukovye_kolechki.png"
	},
	"1048": {
		"name": "Нагетсы",
		"cost": 1000,
		"img": "images/zakuski/nagets.png"
	},
	"1049": {
		"name": "Картофельные оладьи",
		"cost": 1100,
		"img": "images/zakuski/oladi.png"
	},
	"1050": {
		"name": "Ролл",
		"cost": 950,
		"img": "images/zakuski/roll.png"
	},
	"1051": {
		"name": "Ролл Сезар",
		"cost": 850,
		"img": "images/zakuski/roll_sezar.png"
	}
};

console.log(goods5);
var out5 = '';
for (var key5 in goods5){
	out5+='<div class="single-goods2">';
		out5+='<img src="'+goods5[key5].img+'"><br>';
		out5+='<h3>'+goods5[key5].name+'</h3>';
		out5+='<p class="p2">от '+goods5[key5].cost+'тг.</p>';
		out5+='<div onclick="insert('+goods5[key5].cost+')"><h5>В корзину</h5></div>';
	out5+='</div>';
}
document.getElementById('out5').innerHTML = out5;