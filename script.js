let lang = 'ru';
let arr;

if (lang == 'ru') {
    arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
} else if (lang == 'en') {
    arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}

console.log(arr);


switch (lang) {
    case 'ru':
        let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;
    case 'en':
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
}
console.log(arr);


let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

let arr1 = obj[lang];

console.log(arr1);


let namePerson = prompt('Введите имя:');

console.log(namePerson === 'Артем' ? 'директор' : (namePerson === 'Александр' ? 'преподаватель' : 'студент'));


