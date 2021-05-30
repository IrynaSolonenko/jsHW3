//-Task# 1---------------------------------

// Boolean(Number(’10’)) + 1;
console.log((Boolean(Number('10')) + 1), typeof(Boolean(Number('10')) + 1)); //2


// ‘sub ’ + Number(false);
console.log('sub ' + Number(false), typeof("sub " + Number(false))); //sub 0

// 16  *  ‘          91      ‘  //
console.log((16 * '       91      '), typeof(16 * '       91      ')); //1456 number


// true-70  //false
console.log((true-70), typeof(true-70)); //-69 true


// Number(1 + String(1)) + 1  //NaN+1
console.log(Number(1 + String(1)) + 1); //12

//-Task# 2---------------------------------------------

let timeOnSec = 60; //задаю количество секунд в 1минуте
let timeOnMin = 60; //задаю количество минут в 1часе


let timeOneHour = prompt('Напишите количество часов');
result = Number(timeOneHour * (timeOnMin * timeOnSec));
prompt("количество секунд: ", result);
console.log(typeof(result));

//-Task# 3----------------------------------------------

var num = 1;
num = num + 12; // +=12
num = num — 14; //-=14
num = num * 5; // *=5
num = num / 7;  //  /=7
num = num + 1;  //  ++1
num = num — 1;  //  --1
alert(num);