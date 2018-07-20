
// 1. Написать функцию filter, которая принимает массив и функцию-фильтр. 
// Результат работы - новый массив, полученный путем применения функции-фильтра к каждому элементу исходного массива. 
// Функция - фильтр принимает один аргумент и возвращает  true или false.

function isEven(x) {
	if (x%2 === 0) {
		return true;
	}
	
	return false;
}

function getFilteredArr (arr, fn) {
	var resulArr = [];
	for(var i=0; i<arr.length; i++)
	{
		if(fn(arr[i]))
			resulArr.push(arr[i]);
	}
	return resulArr;
}
// 2. Написать функцию, которая принимает год и сообщает високосный он или нет. Валидация данных необходима.
function checkYear (year) {
	if(!isNaN(year)){
		var date = new Date(year, 1, 29);
		var res = date.getMonth();
		if(res == 1)
			return true;
		return false;
	}
	else
		return NaN;
}
// 3. Написать функцию, которая принимает число от 0 до 10000 и сообщает, сколько в нем тысяч, сотен, десятков и единиц.
function digitParse (dig) {
	var coment = ['единиц', 'десятков' ,'сотен', 'тысяч'];
	var i = 0;
	var resArr = {};
	while(1){
		if(dig == (dig%10)){
			resArr[coment[i]] = dig;
			break;
		}
		resArr[coment[i]] = dig%10;
		dig = Math.floor(dig/10);
		i++;
	}
	return resArr;
}