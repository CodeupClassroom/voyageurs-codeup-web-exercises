"use strict";
// 1
//    res
// 1 = 1 x 2;
// 2 = 2 x 2;
// 4 = 4 x 2;
// 8

var res = 1;

while( res < 4 ){
    res = res * 2;
    console.log('res: ', res);
}

//2

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

do {

    console.log('Start of the day i have ' +  allCones + ' left');

    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if( conesToSell <= allCones ) {
        console.log('I sold  ' + conesToSell);
        allCones = allCones - conesToSell;
    }else if ( allCones === 0 ) {
        console.log('I can go home');
    }else{
        console.log('I don\'t have ' +conesToSell+' cones to sell');
    }

} while( allCones !== 0 );