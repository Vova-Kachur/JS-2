const celsius = 100;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log("Температура в фаренгейтах:", fahrenheit);

const daysInMonth = 31;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = daysInMonth * 1440;
console.log(
  "Кількість годин в одному місяці:",
  hoursInMonth,
  "Кількість хвилин в одному місяці:",
  minutesInMonth
);

const health = 100;
const energy = 75;
const damageHealth = health - Math.random() * (20 - 0) + 0;
const damageEnergy = energy - Math.random() * (30 - 0) + 0;
console.log(
  "Зменшено рівень здоров'я. Нова кількість:",
  Math.round(damageHealth),
  "Зменшено рівень енергії. Енергія становить:",
  Math.round(damageEnergy)
);

const totalPrice = 12655;
const discount = 0.1;
const discountedPrice = totalPrice * discount;
console.log("Використано знижку. Кінцева сумма стала:", discountedPrice);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log("Число округлено до:", roundedDown);

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log("Рядок перетворено у десяткове число:", parsedFloat);

const intString = "123";
const parsedInt = parseInt(intString);
console.log("Рядок перетворено у ціле число:", parsedInt);

const number = Math.random() * (100 - 0) + 0;
const sqrtNumber = Math.sqrt(number);
console.log("Випадкове число було взято в корінь:", Math.round(sqrtNumber));

const integer = 42;
const stringNumber = "256";
const convertedInt = parseInt(stringNumber);
const convertedString = integer.toString();
console.log(
  "Наданим числам був змінений тип данних:",
  convertedInt,
  "та",
  convertedString
);