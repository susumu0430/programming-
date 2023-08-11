
const myPyofile = {
    name:"じゃんけぇ",
    age: 28,
};
const message1 =`名前は${myPyofile.name}です。年齢は${myPyofile.age}歳です`;
console.log(message1);
const { name, age } = myPyofile;
const message2 =`名前は${name}です。年齢は${age}歳です`;
console.log(message2);