
// const nameArr = ["田中","山田","山崎"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です`)
// }
// const nameArr2 = nameArr.map((name)=> {
// return name;
// })
// console.log(nameArr2);

// nameArr.map((name , index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNumArr = nameArr.map((name) => {
//    if (name === "山崎") {
//     return name
//    } else {
//     return `${name}さん`
//    }
// })
// console.log(newNumArr);

//三項演算子
//ある条件? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 < 0 ? "true" : "false"
console.log(val1);
// const num = "1555";
// // console.log(num.toLocaleString());

// const fomattedNaum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(fomattedNaum);
const checkedSum = (num1, num2) => {
   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です"
}
console.log(checkedSum(50, 40));
console.log(checkedSum(60, 60));


// || は左側がfalseなら右側を返す
const num = 10;
const fee = num || "金額未設定です";
console.log(fee);

const false1 = true;
const false2 = false;
if(false1 || false2) {
   console.log("フラグ")
}
// && は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);