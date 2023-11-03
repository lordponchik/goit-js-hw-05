console.log('task-03');
console.log('');

class Storage {
  constructor(storage) {
    this.item = [...storage];
  }
  getItems() {
    return this.item;
  }
  addItem(item) {
    this.item.push(item);
  }
  removeItem(item) {
    if (this.item.includes(item)) {
      this.item.splice(this.item.indexOf(item), 1);
    }
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
