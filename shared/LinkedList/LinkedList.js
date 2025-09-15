class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Добавление в конец
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Добавление в начало
  prepend(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // Поиск по значению
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  // Удаление по значению
  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    // Если удаляется голова
    if (this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length--;
      return deletedNode;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        deletedNode = current.next;
        current.next = current.next.next;

        // Если удаляется хвост
        if (current.next === null) {
          this.tail = current;
        }

        this.length--;
        return deletedNode;
      }
      current = current.next;
    }

    return null;
  }

  // Вывод списка
  print() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values.join(" -> ");
  }

  // Получение узла по индексу
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }
}
