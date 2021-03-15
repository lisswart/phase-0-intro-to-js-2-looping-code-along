// Code your solutions in this file

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
//        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
}

const names = ["Lisa", "Arnoud", "Celia"];

writeCards(names, "graduation");*/

function countDown(integer) {
    let i = integer;
    while ( i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(10);