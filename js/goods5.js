var goods8 = {
	"1073": {
		"name": "Две пиццы и напиток",
		"cost": 3450,
		"description": "Две маленькие пиццы 25 см и напиток — для компании из 2-4 человек.",
		"img": "images/aksii/combo1v3.jpg",
	},
	"1074": {
		"name": "Две пиццы и закуска",
		"cost": 3900,
		"description": "Две маленькие пиццы 25 см и закуска на выбор — для компании из 2-4 человек.",
		"img": "images/aksii/combo2v3.jpg",
	},
	"1075": {
		"name": "Пицца, закуска и два напитка",
		"cost": 3900,
		"description": "Cредние пиццы 30 см, закуски и двух напитков. Для компании из 2-4 человек.",
		"img": "images/aksii/combo3v3.jpg",
	},
	"1076": {
		"name": "Пицца и две закуски",
		"cost": 3900,
		"description": "Средняя пицца 30 см и две закуски — комбо по выгодной цене! Для компании из 2-4 человек.",
		"img": "images/aksii/combo4v3.jpg",
	},
	"1077": {
		"name": "Две пиццы",
		"cost": 4400,
		"description": "Две средние пиццы 30 см — комбо по выгодной цене! Подходит для компании из 3-5 человек.",
		"img": "images/aksii/combo5v3.jpg",
	},
	"1078": {
		"name": "Две пиццы и два напитка",
		"cost": 4600,
		"description": "Комбо из маленькой и средней пиццы (25 и 30 см) и двух напитков. Для компании из 3-5 человек.",
		"img": "images/aksii/combo6v3.jpg",
	},
	"1079": {
		"name": "Три пиццы",
		"cost": 7200,
		"description": "Комбо по выгодной цене — три средние пиццы 30 см. Подойдет для компании из 5-10 человек.",
		"img": "images/aksii/combo7v3.jpg",
	},
	"1080": {
		"name": "Пять пицц",
		"cost": 11500,
		"description": "Комбо по выгодной цене — пять средних пицц 30 см. Подойдет для компании из 10-15 человек.",
		"img": "images/aksii/combo8v3.jpg",
	},
	"1081": {
		"name": "Семь пицц",
		"cost": 16500,
		"description": "Комбо по выгодной цене — семь средних пицц 30 см. Подойдет для компании из 15-20 человек.",
		"img": "images/aksii/combo9v4.jpg",
	},
	"1082": {
		"name": "Десять средних пицц",
		"cost": 21500,
		"description": "Комбо по выгодной цене — десять средних пицц 30 см. Подойдет для компании из 20-30 человек.",
		"img": "images/aksii/combo10v5.jpg",
	},
	"1083": {
		"name": "Десять больших пицц",
		"cost": 24900,
		"description": "Комбо по выгодной цене — десять больших пицц 35 см. Подойдет для компании из 30-40 человек.",
		"img": "images/aksii/combo11v4.jpg",
	}
};

console.log(goods8);
var out8 = '';
for (var key8 in goods8){
	out8+='<div class="single-goods">';
		out8+='<img src="'+goods8[key8].img+'"><br>';
		out8+='<h3>'+goods8[key8].name+'</h3>';
		out8+='<p class="p1">'+goods8[key8].description+'</p>';
		out8+='<p class="p2">от '+goods8[key8].cost+'тг.</p>';
		out8+='<div><a href="oplata.html"><h5>Заказать</h5></a></div>';
	out8+='</div>';
}
document.getElementById('out8').innerHTML = out8;

