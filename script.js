'use strict';

const showMessage = (arg) => {
    let a = 'Впишите строку.';
    if (typeof arg === "string") {
        const str = arg.trim();
        const maxLength = 30;
        if (str.length > maxLength) {
            a = str.substring(0, maxLength) + '...';
        } else {
            a = str;
        }
    }
    return a;
};

console.log('showMessage(): ', showMessage(5));
console.log('showMessage(): ', showMessage('Строка менее 30 символов'));
console.log('showMessage(): ', showMessage('Строка более 30 символов'));


