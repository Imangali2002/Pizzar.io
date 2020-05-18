var goods3 = {
	"1025":{
		"name": "Чизбургер пицца",
		"cost": 2400,
		"img": "images/mix/newchizburger.png"
	},
	"1026":{
		"name": "Половинки 2в1",
		"cost": 2200,
		"img": "images/mix/polovinki.png"
	},
	"1027":{
		"name": "Дабл пепперони",
		"cost": 2200,
		"img": "images/mix/dabl-pepperoni.png"
	}
}

console.log(goods3);
var out3 = '';
for (var key3 in goods3){
	out3+='<div class="single-goods1">';
		out3+='<img src="'+goods3[key3].img+'"><br>';
		out3+='<h3>'+goods3[key3].name+'</h3>';
		out3+='<p class="p2">от '+goods3[key3].cost+'тг.</p>';
		out3+='<div onclick="insert('+goods3[key3].cost+')"><h5>В корзину</h5></div>';
	out3+='</div>';
}
document.getElementById('out3').innerHTML = out3;
