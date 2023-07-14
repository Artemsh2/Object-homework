'use strict'

//2. Створіть функцію updateNumericProperties(obj, values), яка оновлює числові властивості об'єкта obj за допомогою значень з вхідного об'єкта values. Якщо властивість в values відсутня в obj, вона повинна бути додана, якщо властивість присутня - значення додаються.
// const obj = {
// 	width: 10,
// 	height: 20,
// 	depth: 30,
// };
// const values = {
// 	width: 15,
// 	depth: 35,
// 	weight: 5,
// };
// function updateNumericProperties(obj, values){
// 	for(let key in values){
// 		if(typeof values[key] === 'number'){
// 			obj[key] = values[key];
// 		}
// 	}
// 	return obj;
// }
// console.log(updateNumericProperties(obj, values));

//3. Створіть функцію getNumericPropertyCount(obj), яка підраховує кількість числових властивостей у об'єкта obj і повертає результат.
// const obj = {
// 	apples: 3,
// 	oranges: 5,
// 	bananas: 2,
// 	grapes: '7',
// };
// let result = 0;
// function getNumericPropertyCount(obj){
// 	for(let key in obj){
// 		if(typeof obj[key] === 'number'){
// 			result++;
// 		}
// 	}
// 	return result;
// }
// console.log(getNumericPropertyCount(obj)); 

//4. Створіть функцію getAverageNumericValue(obj), яка обчислює середнє арифметичне всіх числових значень властивостей об'єкта obj і повертає результат.
// const obj = {
// 	num1: 10,
// 	num2: 20,
// 	num3: 30,
// };
// let sum = 0;
// let divide = 0;
// function getAverageNumericValue(obj){
// 	for(let key in obj){
// 		if(typeof obj[key] === 'number'){
// 			sum += obj[key];
// 			divide++;
// 		}
// 	}
// 	return sum / divide;
// }
// console.log(getAverageNumericValue(obj));

//Створіть функцію findMinMaxNumericValue(obj), яка знаходить найменше та найбільше числове значення серед властивостей об'єкта obj і повертає його.
// const obj = {
// 	a: 10,
// 	b: 5,
// 	c: 15,
// 	d: 20,
// };
// let min = Infinity;
// let max = -Infinity;
// function findMinMaxNumericValue(obj){
// 	for(let key in obj){
// 		if(typeof obj[key] === 'number'){
// 			if(obj[key] < min){
// 				min = obj[key];
// 			}
// 			if(obj[key] > max){
// 				max = obj[key]
// 			}
// 		}
// 	}
// 	return {min: min, max: max};
// }
// console.log(findMinMaxNumericValue(obj));

//6. Створіть функцію getSumOfEvenNumericProperties(obj), яка обчислює суму всіх парних числових властивостей об'єкта obj і повертає результат.
// const obj = {
// 	num1: 5,
// 	num2: 10,
// 	num3: 15,
// 	num4: 20,
// }
// let sum = 0;
// function getSumOfEvenNumericProperties(obj){
// 	for(let key in obj){
// 		if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
// 			sum += obj[key]
// 		}
// 	}
// 	return `Сума парних чисел об'єкту: ${sum}`;
// }
// console.log(getSumOfEvenNumericProperties(obj));

//7. Створіть функцію mergeObjects(obj1, obj2), яка об'єднує властивості двох об'єктів obj1 і obj2 в новий об'єкт і повертає його. При цьому, якщо властивість присутня в обох об'єктах, використовуйте значення з obj2.
// const obj1 = {
// 	a: 1,
// 	b: 2,
// };
// const obj2 = {
// 	b: 3,
// 	c: 4,
// };
// const finalObj = {};
// function mergeObjects(obj1, obj2){
// 	for(let key in obj1){
// 		finalObj[key] = obj1[key];
// 	}
// 	for(let key in obj2){
// 		finalObj[key] = obj2[key];
// 	}
// 	return finalObj;
// }
// console.log(mergeObjects(obj1, obj2));

// 8. Створіть функцію shallowCopy(obj), яка виконує поверхневу копію об'єкта obj і повертає новий об'єкт з тими ж властивостями.
// const obj = {
// 	name: 'John',
// 	age: 30,
// 	address: {
// 		street: 'Soborna',
// 		house: 12
// 	},
// };
// function shallowCopy(obj){
// 	const copiedObj = Object.assign({}, obj);

// 	return copiedObj;
// }
// console.log(shallowCopy(obj));

//9. Створіть функцію filterByDataType(obj, dataType), яка фільтрує властивості об'єкта obj за заданим типом даних dataType (наприклад, 'string', 'number', 'boolean') і повертає новий об'єкт з відфільтрованими властивостями.
// const obj = {
// 	name: 'John',
// 	age: 30,
// 	isActive: true,
// 	city: 'New York',
// };
// const dataType = 'string';
// function filterByDataType(obj, dataType){
// 	const filteredObj = {};

// 	for(let key in obj){
// 		if(typeof obj[key] === dataType){
// 			filteredObj[key] = obj[key];
// 		}
// 	}
// 	return filteredObj;
// }
// console.log(filterByDataType(obj, dataType));

//завдання зі статті

//Напишіть код для підсумовування всіх зарплат і збережіть у змінній sum. У наведеному вище прикладі має бути 390.
// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130
// };
// let sum = 0;
// function getSumOfSalaries(salaries){
// 	for(let key in salaries){
// 		if(typeof salaries[key] === 'number'){
// 			sum += salaries[key];
// 		}
// 	}
// 	return sum;
// }
// console.log(getSumOfSalaries(salaries));

// Створіть функцію multiplyNumeric(obj), яка примножує всі числові властивості об’єкта obj на 2.
let menu = {
	width: 200,
	height: 300,
	title: "Моє меню"
};
function DoubleValues(menu){
	for(let key in menu){
		if(typeof menu[key] === 'number'){
			menu[key] *= 2;
		}
	}
}
DoubleValues(menu);
console.log(menu);
