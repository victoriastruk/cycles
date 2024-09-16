//1
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}

//2
let password;
const savePassword = "qwerty";
do {
  password = prompt("Введіть пароль");
  if (password === savePassword) {
    alert("Ви успішно увійшли в систему");
  } else {
    alert("Неправильний пароль, спробуйте ще раз.");
  }
} while (password !== savePassword);

//3
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Сума чисел від 1 до 100 = ", sum);

//4
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

//5
const sizeTriangle = prompt("Введіть розмір трикутника");
for (let i = 1; i <= sizeTriangle; i++) {
  console.log("*".repeat(i));
}

//6
let size = 10;
for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if (i === j || j === size - 1 || j === 0 || i === size - 1 || i === 0) {
      line += "X";
    } else {
      line += " ";
    }
  }
  console.log(line);
}

//7
let sizeSqr = 10;
for (let i = 0; i < sizeSqr; i++) {
  let line = "";
  for (let j = 0; j < sizeSqr; j++) {
    if (
      j === sizeSqr - 1 ||
      j === 0 ||
      i === sizeSqr - 1 ||
      i === 0 ||
      i + j === sizeSqr - 1
    ) {
      line += "X";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
