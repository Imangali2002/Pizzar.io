var goods4 = {
	"1028": {
		"name": "Big King",
		"cost": 1000,
		"img": "images/burger/big_king.png"
	},
	"1029": {
		"name": "Чизбургер",
		"cost": 350,
		"img": "images/burger/chizburger.png"
	},
	"1030": {
		"name": "Криспи чикен",
		"cost": 850,
		"img": "images/burger/crispi_chicken.png"
	},
	"1040": {
		"name": "Дабл криспи чикен",
		"cost": 1250,
		"img": "images/burger/dabl_crispi_chicken.png"
	},
	"1041": {
		"name": "Гамбургер",
		"cost": 350,
		"img": "images/burger/gamburger.png"
	},
	"1042": {
		"name": "Лонг чикен",
		"cost": 850,
		"img": "images/burger/long_chicken.png"
	},
	"1043": {
		"name": "Нагетс бургер",
		"cost": 350,
		"img": "images/burger/nagets_burger.png"
	},
	"1044": {
		"name": "Стейк Хаус",
		"cost": 1300,
		"img": "images/burger/steikhouse.png"
	},
	"1045": {
		"name": "Воппер JR",
		"cost": 800,
		"img": "images/burger/vopper_jr.png"
	}
};

console.log(goods4);
var out4 = '';
for (var key4 in goods4){
	out4+='<div class="single-goods1">';
		out4+='<img src="'+goods4[key4].img+'"><br>';
		out4+='<h3>'+goods4[key4].name+'</h3>';
		out4+='<p class="p2">от '+goods4[key4].cost+'тг.</p>';
		out4+='<div onclick="insert('+goods4[key4].cost+')"><h5>В корзину</h5></div>';
	out4+='</div>';
}
document.getElementById('out4').innerHTML = out4;
