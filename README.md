# Homework / Домашнее задание :clipboard:

## goit-js-hw-05

:us:

<details>
	<summary>English</summary>

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

</details>
:ukraine:
<details>
<summary>Russian</summary>

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
