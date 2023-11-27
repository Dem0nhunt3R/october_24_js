//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr1 = [1, 2, 3, '4', '5', '6', true, false, 8, 9, 10];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'title1', pageCount: 11, genre: 'genre1'};
let book2 = {title: 'title2', pageCount: 22, genre: 'genre2'};
let book3 = {title: 'title2', pageCount: 33, genre: 'genre3'};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
//масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'title4',
    pageCount: 44,
    genre: 'genre4',
    authors: [{authorName: 'name1', age: 11}, {authorName: 'name2', age: 22}]
};
let book5 = {
    title: 'title5',
    pageCount: 55,
    genre: 'genre5',
    authors: [{authorName: 'name3', age: 33}, {authorName: 'name4', age: 44}]
};
let book6 = {
    title: 'title6',
    pageCount: 66,
    genre: 'genre6',
    authors: [{authorName: 'name5', age: 66}, {authorName: 'name6', age: 77}]
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль '
//пароль кожного користувача

let users = [
    {name: 'name1', username: 'username1', password: 'pass1'},
    {name: 'name2', username: 'username2', password: 'pass2'},
    {name: 'name3', username: 'username3', password: 'pass3'},
    {name: 'name4', username: 'username4', password: 'pass4'},
    {name: 'name5', username: 'username5', password: 'pass5'},
    {name: 'name6', username: 'username6', password: 'pass6'},
    {name: 'name7', username: 'username7', password: 'pass7'},
    {name: 'name8', username: 'username8', password: 'pass8'},
    {name: 'name9', username: 'username9', password: 'pass9'},
    {name: 'name10', username: 'username10', password: 'pass10'}
];

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 55;

if (x !== 0) console.log('true');
else console.log('false');

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 34;

if (time >= 0 && time <= 59) {
    if (time === 0 || time < 15) console.log('first quarter');
    else if (time === 15 || time < 30) console.log('second quarter');
    else if (time === 30 || time < 45) console.log('third quarter');
    else console.log('fourth quarter');
} else console.log('something wrong with time');


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day = 12;

if (day > 0 && day <= 31) {
    if (day > 0 && day <= 10) console.log('first decade');
    else if (day > 10 && day <= 20) console.log('second decade');
    else console.log('third decade');
} else console.log('something wrong with day');

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//let inputDay = prompt('Enter a day');

// switch (inputDay) {
//     case '1':
//         console.log('First classwork');
//         break;
//     case '2':
//         console.log('First homework');
//         break;
//     case '3':
//         console.log('Second classwork');
//         break;
//     case '4':
//         console.log('Second homework');
//         break;
//     case '5':
//         console.log('Friday');
//         break;
//     case '6':
//         console.log('English lesson');
//         break;
//     case '7':
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Wrong number of the day');
// }
//
//    - Користувач вводить або має два числа.
//        Потрібно знайти та вивести максимальне число з тих двох .
//        Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');

//if (num1 > num2) console.log('First number greater than second number');
//else if (num1 < num2) console.log('Second number greater than first number');
//else if (num1 === num2) console.log('Numbers are equal');
//else console.log('Something wrong with number');

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//(хибноподібні, тобто приводиться до false)

let x1 = 1;

if (x1 === 0 || x1 === false || x1 === null || x1 === undefined || x1 === '') {
    x1 = 'default';
}

console.log(x1);


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
//його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) console.log('Super');
if (coursesAndDurationArray[1].monthDuration > 5) console.log('Super');
if (coursesAndDurationArray[2].monthDuration > 5) console.log('Super');
if (coursesAndDurationArray[3].monthDuration > 5) console.log('Super');
if (coursesAndDurationArray[4].monthDuration > 5) console.log('Super');
if (coursesAndDurationArray[5].monthDuration > 5) console.log('Super');