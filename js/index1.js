var goods1 = {
	"1019": {
		"name": "Четыре сезона",
		"cost": 2200,
		"img": "images/mix/chetyre-sezona.png"
	},
	"1020": {
		"name": "Итальянская",
		"cost": 2000,
		"img": "images/mix/italjanskaja.png"
	},
	"1021": {
		"name": "Аррива",
		"cost": 2100,
		"img": "images/mix/arriva.png"
	}
}

console.log(goods1);
var out1 = '';
for (var key1 in goods1){
	out1+='<div class="single-goods1">';
		out1+='<img src="'+goods1[key1].img+'" class="image"><br>';
		out1+='<h3>'+goods1[key1].name+'</h3>';
		out1+='<p class="p2">от '+goods1[key1].cost+'тг.</p>';
		out1+='<div onclick="insert('+goods1[key1].cost+')"><h5>В корзину</h5></div>';
	out1+='</div>';
}
document.getElementById('out1').innerHTML = out1;


