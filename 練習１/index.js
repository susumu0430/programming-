'use strict';

const inoki = ['いーち','にーい','さーん','ダー！！'];

// let index = 0;
// while(index < inoki.length) {
//     console.log(inoki[index]);
//   index++;
// }

// if(inoki.length > 4) {
//   console.log("ボンバイエ！");
// } else {
//     console.log("ボンバ！");
// }

const test = (arg) => {
    if(inoki.length > arg) {
        console.log("ボンバイエ！");
      } else {
          console.log("ボンバ！");
      }
};

const test2 = {
    color: "pink",
    size: "large",
    purfume:"mint",
    goTo: () => {
        console.log("Hello");
    }
};

// console.log(document.getElementsByTagName("button")[1]);
document.getElementsByTagName("button")[0].addEventListener("click",() => {
    window.alert("Hi");
});