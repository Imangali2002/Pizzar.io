var goods7 = {
	"1058": {
		"name": "Coca-cola, 0,5 л",
		"cost": 300,
		"img": "images/water/coca.jpg"
	},
	"1058": {
		"name": "Coca-cola Zero, 0,5 л",
		"cost": 300,
		"img": "images/water/cola.jpg"
	},
	"1060": {
		"name": "Fanta, 0,5 л",
		"cost": 300,
		"img": "images/water/fanta.jpg"
	},
	"1061": {
		"name": "Fusetea Черный с лимоном, 0,5 л",
		"cost": 300,
		"img": "images/water/fusetea.jpg"
	},
	"1062": {
		"name": "Fusetea Черный с персиком, 0,5 л",
		"cost": 300,
		"img": "images/water/fuseteamango.jpg"
	},
	"1063": {
		"name": "Морс Черная Смородина, 0,45 л",
		"cost": 300,
		"img": "images/water/mors1.jpg"
	},
	"1064": {
		"name": "Морс Облепиха, 0,45 л",
		"cost": 300,
		"img": "images/water/mors2.jpg"
	},
	"1065": {
		"name": "Морс Клюква, 0,45 л",
		"cost": 300,
		"img": "images/water/mors3.jpg"
	},
	"1066": {
		"name": "Морс Вишня, 0,45 л",
		"cost": 300,
		"img": "images/water/mors4.jpg"
	},
	"1067": {
		"name": "Dr. Pepper, 0,355 л",
		"cost": 500,
		"img": "images/water/pepper.jpg"
	},
	"1068": {
		"name": "Сок Piko Апельсин, 0,2 л",
		"cost": 170,
		"img": "images/water/piko.jpg"
	},
	"1069": {
		"name": "Сок Piko Апельсин, 1 л",
		"cost": 500,
		"img": "images/water/piko1.jpg"
	},
	"1070": {
		"name": "Сок Piko Яблоко, 1 л",
		"cost": 500,
		"img": "images/water/piko2.jpg"
	},
	"1071": {
		"name": "Sprite, 0,5 л",
		"cost": 300,
		"img": "images/water/sprite.jpg"
	},
	"1072": {
		"name": "Вода негазированная, 0,5 л",
		"cost": 200,
		"img": "images/water/water.jpg"
	}
};

console.log(goods7);
var out7 = '';
for (var key7 in goods7){
	out7+='<div class="single-goods4">';
		out7+='<p class="p3">'+goods7[key7].name+'</p>';
		out7+='<img src="'+goods7[key7].img+'"><br>';
		out7+='<p class="p2">от '+goods7[key7].cost+'тг.</p><br>';
		out7+='<div onclick="insert('+goods7[key7].cost+')"><p>В корзину</p></div>';
	out7+='</div>';
}
document.getElementById('out7').innerHTML = out7;