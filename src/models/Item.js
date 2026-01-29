// In-memory data store (for practice purposes)
let items = [
  { id: 1, name: 'Item 1', description: 'First sample item', createdAt: new Date().toISOString() },
  { id: 2, name: 'Item 2', description: 'Second sample item', createdAt: new Date().toISOString() }
];

let nextId = 3;

class Item {
  static getAll() {
    return items;
  }

  static getById(id) {
    return items.find(item => item.id === parseInt(id));
  }

  static create(data) {
    const newItem = {
      id: nextId++,
      name: data.name,
      description: data.description || '',
      createdAt: new Date().toISOString()
    };
    items.push(newItem);
    return newItem;
  }

  static update(id, data) {
    const index = items.findIndex(item => item.id === parseInt(id));
    if (index === -1) return null;
    
    items[index] = {
      ...items[index],
      ...data,
      id: items[index].id, // Preserve ID
      updatedAt: new Date().toISOString()
    };
    return items[index];
  }

  static delete(id) {
    const index = items.findIndex(item => item.id === parseInt(id));
    if (index === -1) return false;
    
    items.splice(index, 1);
    return true;
  }
}

module.exports = Item;
