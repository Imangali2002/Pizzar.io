var goods2 = {
	"1022":{
		"name": "Сердце-пепперони",
		"cost": 2300,
		"img": "images/mix/serdse-pepperoni.png"
	},
	"1023":{
		"name": "Сердце пирог",
		"cost": 2300,
		"img": "images/mix/serdse-pirog.png"
	},
	"1024":{
		"name": "New итальянская",
		"cost": 2200,
		"img": "images/mix/newitaljanskaja.png"
	}
}

console.log(goods2);
var out2 = '';
for (var key2 in goods2){
	out2+='<div class="single-goods1">';
		out2+='<img src="'+goods2[key2].img+'"><br>';
		out2+='<h3>'+goods2[key2].name+'</h3>';
		out2+='<p class="p2">от '+goods2[key2].cost+'тг.</p>';
		out2+='<div onclick="insert('+goods2[key2].cost+')"><h5>В корзину</h5></div>';
	out2+='</div>';
}
document.getElementById('out2').innerHTML = out2;
