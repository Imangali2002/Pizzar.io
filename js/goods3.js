var goods6 = {
	"1052": {
		"name": "Канада",
		"cost": 1490,
		"img": "images/sushi/canada.png"
	},
	"1053": {
		"name": "Калифорния",
		"cost": 1290,
		"img": "images/sushi/kalifornia.png"
	},
	"1054": {
		"name": "Миниролл",
		"cost": 490,
		"img": "images/sushi/miniroll.png"
	},
	"1055": {
		"name": "Филадельфия",
		"cost": 1390,
		"img": "images/sushi/philadelphija.png"
	},
	"1056": {
		"name": "Футомаки",
		"cost": 1090,
		"img": "images/sushi/phutomaki.png"
	},
	"1057": {
		"name": "Цезар",
		"cost": 1090,
		"img": "images/sushi/sezar.png"
	}
};

console.log(goods6);
var out6 = '';
for (var key6 in goods6){
	out6+='<div class="single-goods3">';
		out6+='<img src="'+goods6[key6].img+'"><br>';
		out6+='<h3>'+goods6[key6].name+'</h3>';
		out6+='<p class="p2">от '+goods6[key6].cost+'тг.</p>';
		out6+='<div onclick="insert('+goods6[key6].cost+')"><h5>В корзину</h5></div>';
	out6+='</div>';
}
document.getElementById('out6').innerHTML = out6;