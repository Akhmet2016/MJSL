	function truncate(str, maxLenght) {
		if(str.length > maxLenght) {
			alert(str.slice(0, maxLenght - 3) + '...');
		} else {
			alert(str);
		}
	}

	// function checkSpam(str) {
 //  		var lowerStr = str.toLowerCase();

 //  		return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
	// }	

	// function makeLarge() {
	// 	var str = 'ахмет';

	// 	alert(str[0].toUpperCase() + str.slice(1));
	// }

	// function makeTest() {
	// 	var str = 'Ослик Иа-Иа хочет пить';
	// 	var target = 'Иа';

	// 	var pos = 0;

	// 	while(true) {
	// 		var foundPos = str.indexOf(target, pos);
	// 		if (foundPos == -1) break;

	// 		alert(foundPos);
	// 		pos = foundPos + 1;
	// 	}

	// 	// var pos = -1;
	// 	// while ((pos = str.indexOf(target, pos + 1)) != -1) {
	// 	// 	alert( pos );
	// 	// }
	// }

	// function sumTo(n){
	// 	if(n != 1)
	// 	{
	// 		return n + sumTo(n-1);
	// 	}
	// 	else
	// 	{
	// 		return n;
	// 	}
	// }

	// function sumTo(n){
	// 	var sum = 0;
	// 	for (var i = 0; i <= n; i++)
	// 	{
	// 		sum += i;
	// 	}
	// 	return sum;
	// }

	// function pow(x,n) {
	// 	var result = x;
	// 	for (var i = 1; i < n; i++) {
	// 		result *= x;
	// 	}
	// 	return alert(result);
	// }

	// function pow(x,n){
	// 	if(n != 1)
	// 	{
	// 		return x * pow(x, n - 1);
	// 	}
	// 	else
	// 	{
	// 		return x;
	// 	}
	// }


	// function goNext(){
	// 	var bam = new Function('a,b','return a + b');
	// 	var rezult = bam(4,5);
	// 	alert(rezult);
	// }

	// function doThis(){
	// 	function ask(question, yes, no){
	// 		if(confirm(question)) yes()
	// 		else no()
	// 	}
	// 	function showOk(){
	// 		alert ('Cool');
	// 	}
	// 	function showNo(){
	// 		alert ('What\'s up man?');
	// 	}
	// 	ask("Вы согласны?", showOk, showNo);
	// }

	// function age(){
	// 	function checkAge(age) {
	// 		if (age > 18) 
	// 		{
	// 			return true;
	// 		} 
	// 		else 
	// 		{
	// 			return confirm('Родители разрешили?');
	// 		}
	// 	}

	// 	var age = prompt('Ваш возраст?');

	// 	if (checkAge(age)) 
	// 	{
	// 		alert( 'Доступ разрешен' );
	// 	} 
	// 	else 
	// 	{
	// 		alert( 'В доступе отказано' );
	// 	}
	// }

	// function cal(){
	// 	function calcD(a, b, c) {
	// 	   return b*b - 4*a*c;
	// 	}

	// 	var test = calcD(-4, 2, 1);
	// 	alert(test)
	// }

	// function showMessage(){
	// 	var from = prompt('Введите что-нибудь');
	// 	var text = prompt('Введите что-нибудь еще раз');
	// 	message(from,text);
	// 	function message(from, text){
	// 		if (from == null)
	// 		{
	// 			from = 'Сложно что ли что-нибудь присвоить';
	// 		}
	// 		if (text == null)
	// 		{
	// 			text = 'Сложно что ли что-нибудь присвоить';
	// 		}
	// 		alert (from + ' ' + text);
	// 	}
	// }

	// function browser(){
	// 	var br = prompt('Введите название браузера которым вы пользуетесь','');
	// 	if(br == 'IE')
	// 	{
	// 		alert( 'О, да у вас IE!' );
	// 	}
	// 	else if(br == 'Chrome' || br == 'Firefox' || br == 'Safari' || br == 'Opera')
	// 	{
	// 		alert( 'Да, и эти браузеры мы поддерживаем' );
	// 	}
	// 	else
	// 	{
	// 		alert( 'Мы надеемся, что и в вашем браузере все ок!' );
	// 	}
	// }

	// function cus(){
	// 	var value = +prompt('Введите число от 1 до 3','');
	// 	switch(value){
	// 		case 1:
	// 			alert('Мало');
	// 			break;
	// 		case 2:
	// 			alert('Самое то');
	// 			break;
	// 		case 3:
	// 			alert('Много');
	// 			break;
	// 		default:
	// 			alert('не то же');
	// 	}
	// }

	// function summa(){
	// 	var sum = 0;
	// 	while(true){
	// 		var value = +prompt('введите число','');
	// 		if (!value) break;
	// 		sum += value;
	// 	}
	// 	document.getElementById('sum').innerHTML = sum;
	// }

	// function modeIf(){
	// 	var a = prompt('введите первое число', 0);
	// 	var b = prompt('введите второе число', 0);
	// 	a = Number(a);
	// 	b = Number(b);
	// 	var c = a + b;
	// 	var rezult = (c < 4) ? 'Мало' : 'Много';
	// 	document.getElementById('modeIf').innerHTML = rezult;
	// }

	// function login(){
	// 	var login = prompt('Введите логин','');
	// 	if(login == 'admin')
	// 	{
	// 		var password = prompt('Введите пароль', 0);
	// 		if (password == 123)
	// 		{
	// 			document.getElementById('login').innerHTML = 'Welcome!';
	// 		}
	// 		else if (password == null)
	// 		{
	// 			document.getElementById('login').innerHTML = 'Вход отменен';
	// 		}
	// 		else
	// 		{
	// 			document.getElementById('login').innerHTML = 'Пароль не верный';
	// 		}
	// 	}
	// 	else if (login == null)
	// 	{
	// 		document.getElementById('login').innerHTML = 'Вход отменен';
	// 	}
	// 	else
	// 	{
	// 		document.getElementById('login').innerHTML = 'Логин не верный';
	// 	}
	// }

	// function prom(){
	// 	var p = prompt('Введите любое число, можно даже отрицаетльное', 0);
	// 	var rezult;
	// 	if (p > 0)
	// 	{
	// 		rezult = 1;
	// 	}
	// 	else if (p == 0)
	// 	{
	// 		rezult = 0;
	// 	}
	// 	else if (p < 0)
	// 	{
	// 		rezult = -1;
	// 	}
	// 	else
	// 	{
	// 		rezult = 'Введите число';
	// 	}
	// 	document.getElementById('rez').innerHTML = rezult; 
	// }

	// function age(){
	// 	var age = prompt('введите свой возсраст','');
	// 	if(age >= 14 && age <= 90)
	// 	{
	// 		document.getElementById('age').innerHTML = 'Вы в интервале (14;90)';
	// 	}
	// 	else
	// 	{
	// 		document.getElementById('age').innerHTML = 'НЕа';
	// 	}
	// }

	// function car(){
	// 	var car = prompt('Какая последня буква в слове BM.., чтобы получилось название марки?', '');
	// 	var rezult = (car == 'W' || car == 'w') ? 'Правильно' : 'Не правильно';
	// 	document.getElementById('car').innerHTML = rezult; 
	// }

	// function year(){
	// 	var year = prompt('В каком году началась вторая мировая война?', '');
	// 	if(year != 1941)
	// 	{
	// 		document.getElementById('year').innerHTML = 'Ответ не верный';
	// 	}
	// 	else 
	// 	{
	// 		document.getElementById('year').innerHTML = 'Верно';
	// 	}	
	// }

	// function rank(){
	// 	var clientRank = prompt("Введите ваше звание, пожалуйста)", "");
	// 	document.getElementById("rank").innerHTML = clientRank;
	// }
	// function surname(){
	// 	var clientSurname = prompt("Введите вашу фамилию, пожалуйста)", "");
	// 	document.getElementById("surname").innerHTML = clientSurname;
	// }
	// confirm("Go home");
	// prompt("messag", "go in the club");

	// //Как правило, доступы задаются в виде констант
	// var ACCESS_ADMIN = 1;
	// var	ACCESS_GOODS_EDIT = 2;
	// var ACCESS_GOODS_VIEW = 4;
	// var ACCES_ARTICLE_EDIT = 8;
	// var ACCESS_ARTICLE_VIEW = 16;
	// //Из этих констант получить нужную комбинацию доступов можно при помощи операции |
	// var guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; //10100
	// var editor = guest | ACCES_ARTICLE_EDIT | ACCESS_GOODS_EDIT; //11110
	// var admin = editor | ACCESS_ADMIN;
	// //Теперь, чтобы понять, есть ли в доступе editor нужный доступ,
	// //например управление правами – достаточно применить к нему побитовый оператор
	// //И (&) с соответствующей константой
	// //Ненулевой результат будет означать, что доступ есть
	// alert(editor & ACCESS_ADMIN);
	// alert(editor & ACCES_ARTICLE_EDIT);

	// alert( 1 << 2 ); // 1*(2*2) = 4
	// alert( 1 << 3 ); // 1*(2*2*2) = 8
	// alert( 3 << 3 ); // 3*(2*2*2) = 24

	// alert( 8 >> 2 ); // 2 = 8/4, убрали 2 нуля в двоичном представлении
	// alert( 11 >> 2 ); // 2, целочисленное деление (менее значимые биты просто отброшены)