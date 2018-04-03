function hello(){
	alert( 1 << 2 );
	alert( 1 << 3 );
	alert( 3 << 3 );
}
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