<h1 id="home">Homework :clipboard:</h1>

## goit-js-hw-05


* 🇺🇸 [English](#en)
* 🇺🇦 [Ukrainian](#uk)
* 🇷🇺 [Russian](#ru)

--- 

<h3 id="en">📚 EN 📚</h3>

# Acceptance criteria

- Repository created `goit-js-hw-05`
- When submitting homework there is a link to the source files in the repository
- Each task is executed in a separate file named `task-task_number.js`. Use `<script type="module">`
  to close the job code in a separate scope and avoid identifier name conflicts.
- Variable names are clear and descriptive
- Code formatted using Prettier

# Task 1

Write a constructor function `Account` that creates an object with the properties `login` and
`email`. IN `prototype` of the constructor function, add the `getInfo()` method, which displays
field values to the console `login` and `email` of the object that called it.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Task 2

Write a `User` class to create a user with the following properties:

- `name` - string
- `age` - number
- `followers` - number

Add a `getInfo()` method that prints the line:
`User ${name} is ${age} years old and has ${number of followers} followers`

```js
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
```

# Task 3

Write a `Storage` class that will create objects to manage a warehouse of goods. When calling will
receive one argument - the initial array of products, and write it to the `items` property.

Add class methods:

- `getItems()` - returns an array of current products
- `addItem(item)` - gets a new product and adds it to the current ones
- `removeItem(item)` - receives the item and, if there is one, removes it from the current ones

```js
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

# Task 4

Write a class `StringBuilder`. It receives one parameter as input - a string, which it writes to
property `_value`.

Add the following functionality to the class:

- `value` getter - returns the current value of the `_value` field
- Method `append(str)` - gets the str parameter (string) and adds it to the end of `_value`
- Method `prepend(str)` - gets the str parameter (string) and adds it to the beginning of value
- Method `pad(str)` - gets the parameter str (string) and adds it to the beginning and end of
  `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
```

# Task 5

Write a class `Car` with the specified properties and methods.

```js
class Car {
  /*
   * Add static method `getSpecs(car)`,
   * which takes a machine object as a parameter and outputs
   * to the console the values of the maxSpeed, speed, isOn, distance and price properties.
   */

  /*
   * The constructor receives a settings object.
   *
   * Add properties of the future class instance:
   * speed - current speed, initially 0
   * price - car price
   * maxSpeed - maximum speed
   * isOn - whether the car is started, true or false. Initially false
   * distance - total mileage, initially 0
   */
  constructor() {}

  /*
   * Add a getter and setter for the price property,
   * which will work with the car price property.
   */

  /*
   * Add a code to start the car
   * Sets the isOn property to true
   */
  turnOn() {}

  /*
   * Add a code to turn off the car
   * Sets the isOn property to false,
   * and resets the current speed to 0
   */
  turnOff() {}

  /*
   * Adds the received value to the speed property,
   *provided that the resulting speed
   * no more than the value of the maxSpeed property
   */
  accelerate(value) {}

  /*
   * Subtracts the resulting value from the speed property,
   * provided that the resulting speed is not less than zero
   */
  decelerate(value) {}

  /*
   * Adds mileage (hours * speed) to the distance field,
   * but only if the car is started!
   */
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```

---
---

<h3 id="uk">📚 UK 📚 <a href="#home">⬆ Home ⬆</a></h3> 			

# Критерії прийому

- Створено репозиторій `goit-js-hw-05`
- При здачі домашньої роботи є посилання на вихідні файли у репозиторії
- Кожне завдання виконане в окремому файлі з ім'ям `task-номер_задания.js`. Використовуй
 `<script type="module">` щоб закрити код завдання в окремій області видимості та уникнути
 конфліктів імен ідентифікаторів
- Імена змінних та функцій зрозумілі, описові
- Код відформатовано за допомогою Prettier

# Завдання 1

Напиши функцію-конструктор `Account`, яка створює об'єкт із властивостями `login` та `email`. У
`prototype` функції-конструктора додай метод `getInfo()`, який виводить у консоль значення полів
`login` та `email` об'єкта який його викликав.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Завдання 2

Напиши клас `User` для створення користувача з наступними властивостями:

- `name` - рядок
- `age` - число
- `followers` - число

Додай метод `getInfo()`, який виводить рядок:
`User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers`

```js
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
```

# Завдання 3

Напиши клас `Storage`, який створюватиме об'єкти для керування складом товарів. При виклику
отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість `items`.

Додай методи класу:

- `getItems()` - повертає масив поточних товарів
- `addItem(item)` - отримує новий товар та додає його до поточних
- `removeItem(item)` - отримає товар і, якщо він є, видаляє його з поточних

```js
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

# Завдання 4

Напиши клас `StringBuilder`. На вхід він отримує один параметр - рядок, який записує в
властивість `_value`.

Додай класу наступний функціонал:

- Геттер `value` - повертає поточне значення поля `_value`
- Метод `append(str)` - отримує парметр str (рядок) та додає її в кінець `_value`
- Метод `prepend(str)` - отримує парметр str (рядок) та додає її на початок value
- Метод `pad(str)` - отримує парметр str (рядок) і додає її на початок і в кінець `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
```

# Завдання 5

Напиши клас `Car` із зазначеними властивостями та методами.

```js
class Car {

  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр та виводить
   * у консоль значення властивостей maxSpeed, speed, isOn, distance і price.
   */

/*
 * Конструктор отримує об'єкт налаштувань.
 *
 * Додай властивості майбутнього екземпляра класу:
 * speed - поточна швидкість, спочатку 0
 * price - ціна автомобіля
 * maxSpeed ​​- максимальна швидкість
 * isOn - чи заведено автомобіль, значення true чи false. Спочатку false
 * distance - загальний кілометраж, спочатку 0
 */

  constructor() {}

 /*
 * Додай геттер і сеттер для властивості price,
 * який працюватиме з властивістю ціни автомобіля.
 */

 /*
 * Додай код для того, щоб завести автомобіль
 * Записує у властивість isOn значення true
 */

  turnOn() {}

 /*
 * Додай код для того, щоб заглушити автомобіль
 * Записує у властивість isOn значення false,
 * і скидає поточну швидкість 0
 */

  turnOff() {}

 /*
 * Додасть до властивості speed отримане значення,
 * за умови що результуюча швидкість
 * не більше ніж значення властивості maxSpeed
 */

  accelerate(value) {}

 /*
 * Віднімає від якості speed отримане значення,
 * за умови що результуюча швидкість не менше нуля
 */

  decelerate(value) {}

  /*
 * Додає в поле distance кілометраж (hours * speed),
 * Але тільки в тому випадку якщо машина заведена!
 */

  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```

---
---

<h3 id="ru">📚 RU 📚 <a href="#home">⬆ Home ⬆</a></h3> 

# Критерии приема

- Создан репозиторий `goit-js-hw-05`
- При сдаче домашней работы есть ссылка на исходные файлы в репозитории
- Каждое задание выполнено в отдельном файле с именем `task-номер_задания.js`. Используй
  `<script type="module">` чтобы закрыть код задания в отдельной области видимости и избежать
  конфликтов имен идентификаторов.
- Имена переменных и функций понятные, описательные
- Код отформатирован с помощью Prettier

# Задание 1

Напиши функцию-конструктор `Account`, которая создает объект со свойствами `login` и `email`. В
`prototype` функции-конструктора добавь метод `getInfo()`, который выводит в консоль значения полей
`login` и `email` объекта который его вызвал.

```js
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
```

# Задание 2

Напиши класс `User` для создания пользователя со следующим свойствами:

- `name` - строка
- `age` - число
- `followers` - число

Добавь метод `getInfo()`, который, выводит строку:
`User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers`

```js
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
```

# Задание 3

Напиши класс `Storage`, который будет создавать объекты для управления складом товаров. При вызове
будет получать один аргумент - начальный массив товаров, и записывать его в свойство `items`.

Добавь методы класса:

- `getItems()` - возвращает массив текущих товаров
- `addItem(item)` - получает новый товар и добавляет его к текущим
- `removeItem(item)` - получет товар и, если он есть, удаляет его из текущих

```js
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
```

# Задание 4

Напиши класс `StringBuilder`. На вход он получает один параметр - строку, которую записывает в
свойство `_value`.

Добавь классу следующий функционал:

- Геттер `value` - возвращает текущее значение поля `_value`
- Метод `append(str)` - получает парметр str (строку) и добавляет ее в конец `_value`
- Метод `prepend(str)` - получает парметр str (строку) и добавляет ее в начало value
- Метод `pad(str)` - получает парметр str (строку) и добавляет ее в начало и в конец `_value`

```js
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
```

# Задание 5

Напиши класс `Car` с указанными свойствами и методами.

```js
class Car {
  /*
   * Добавь статический метод `getSpecs(car)`,
   * который принимает объект-машину как параметр и выводит
   * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor() {}

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {}

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {}

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {}

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {}

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```
