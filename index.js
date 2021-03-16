// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//        debugger;
    }
    return gifts;
}

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages = [...messages, `Thank you, ${names[i]}, for the wonderful ${event} gift!`];
    }
    return messages;
}

const names = ["Lisa", "Arnoud", "Celia"];

function countDown(integer) {
    let i = integer;
    while ( i >= 0) {
        console.log(i);
        i--;
    }
}
