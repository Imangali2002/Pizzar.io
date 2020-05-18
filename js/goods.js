var goods = {
	"1001": {
		"name": "Пепперони",
		"cost": 1900,
		"description": "томатный соус, моцарелла, полукопчённые колбаски",
		"img": "images/pizza/pepperoni.png",
	},
	"1002": {
		"name": "Мексиканская",
		"cost": 2100,
		"description": "томатный соус, моцарелла, ветчина из говядины, халапеньо, красный лук, кукуруза",
		"img": "images/pizza/meksikanskaja.png",
	},
	"1003": {
		"name": "Мясная",
		"cost": 2400,
		"description": "фирменный соус, моцарелла, говяжий фарш, томаты, орегано, укроп",
		"img": "images/pizza/mjasnaja.png",
	},
	"1004": {
		"name": "Чипотле",
		"cost": 2100,
		"description": "томатный соус, моцарелла, ветчина из говядины, полукопчённые колбаски, фирменный соус «Chipotl»",
		"img": "images/pizza/chipotle.png",
	},
	"1005": {
		"name": "Куриная с грибами",
		"cost": 2100,
		"description": "томатный соус, моцарелла, фирменный соус «Caesar», цыплёнок, шампиньоны",
		"img": "images/pizza/kurinaja-s-gribami.png",
	},
	"1006": {
		"name": "Ранч",
		"cost": 2200,
		"description": "томатный соус, моцарелла, ветчина из говядины, цыплёнок, томаты, фирменный соус «Ranch»",
		"img": "images/pizza/ranch.png",
	},
	"1007": {
		"name": "Гриль",
		"cost": 2200,
		"description": "томатный соус, моцарелла, ветчина из говядины, цыплёнок, фирменный соус «Grill»",
		"img": "images/pizza/gril.png",
	},
	"1008": {
		"name": "Четыре сыра",
		"cost": 2200,
		"description": "Томатный соус, Моцарелла, сыр Сметанковый, сыр с плесенью, сыр брынза",
		"img": "images/pizza/chetyre-syra.png",
	},
	"1009": {
		"name": "Дабл Чиз",
		"cost": 1900,
		"description": "томатный соус, моцарелла, сыр Брынза, орегано",
		"img": "images/pizza/dabl-chiz.png",
	},
	"1010": {
		"name": "Сырный Цыплёнок",
		"cost": 2100,
		"description": "томатный соус, моцарелла, цыплёнок, томаты, фирменный соус «Cheese»",
		"img": "images/pizza/syrnyj-tsypljonok.png",
	},
	"1011": {
		"name": "Грибная",
		"cost": 2200,
		"description": "фирменный соус «Mushroom», моцарелла, ветчина из говядины, шампиньоны",
		"img": "images/pizza/gribnaja.png",
	},
	"1012": {
		"name": "Чикен BBQ",
		"cost": 2200,
		"description": "томатный соус, моцарелла, ветчина из говядины,  цыплёнок, фирменный соус «BBQ»",
		"img": "images/pizza/chiken-bbq.png",
	},
	"1013": {
		"name": "Вегетарианская",
		"cost": 2100,
		"description": "томатный соус, моцарелла, сладкий перец, томаты, маслины, шампиньоны",
		"img": "images/pizza/vegetarianskaja.png",
	},
	"1014": {
		"name": "Охотничья",
		"cost": 1900,
		"description": "томатный соус, моцарелла, охотничьи колбаски",
		"img": "images/pizza/okhotnichja.png",
	},
	"1015": {
		"name": "Маргарита",
		"cost": 1900,
		"description": "томатный соус, моцарелла, томаты, орегано",
		"img": "images/pizza/margarita.png",
	},
	"1016": {
		"name": "Гавайская",
		"cost": 2100,
		"description": "томатный соус, моцарелла, цыплёнок, ананасы",
		"img": "images/pizza/gavajskaja.png",
	},
	"1017": {
		"name": "Дабл Пепперони",
		"cost": 2100,
		"description": "томатный соус, моцарелла, увеличенная порция полукопчённых колбасок",
		"img": "images/pizza/dabl-pepperoni.png",
	},
	"1018": {
		"name": "Итальянская",
		"cost": 2200,
		"description": "томатный соус, полукопчённые колбаски, шампиньоны, маслины",
		"img": "images/pizza/italjanskaja.png",
	}
};

console.log(goods);
var out = '';
for (var key in goods){
	out+='<div class="single-goods">';
		out+='<img src="'+goods[key].img+'"><br>';
		out+='<h3>'+goods[key].name+'</h3>';
		out+='<p class="p1">'+goods[key].description+'</p>';
		out+='<p class="p2">от '+goods[key].cost+'тг.</p>';
		out+='<div onclick="insert('+goods[key].cost+')"><h5>В корзину</h5></div>';
	out+='</div>';
}
document.getElementById('out').innerHTML = out;

function insert(num){

	document.form.textview.value = document.form.textview.value+ '+' + num;
	var outer = document.form.textview.value;
	if(outer){
		document.form.textview.value = eval(outer);
	}

}


