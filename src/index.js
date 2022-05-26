/***
 *  テンプレート文字列
 *
 */

// const name = "じゃけえ";
// const age = 28;

// const message = `私の名前は${name}です。年齢は${age}です。`;

// console.log(message);

/***
 *  アロー関数
 *
 */
const func = (str) => {
  return str;
};
console.log(func("funcです"));

//処理が1行の場合は{},return省略可能
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/***
 *  分割代入
 *
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

const myProfile = ["じゃけえ", 28];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

const [name, age] = myProfile;
const messge4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(messge4);
