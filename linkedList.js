/**
 * LinkedList (Single)
 * (senarai berantai / Seperti gerbong kerta)
 *  urutan data dimana setiap data memeliki field yang menyimpan alamat dari record data selanjutnya
 *  atau Array dengan setiap item nya saling terhubung satu sama lain 
 */


/**
 * Element Struktur data linkedlist 
 * -> head (Address Memory)
 * -> Value (Isi)
 * -> Next (Address Memory selanjutnya) 
 */


class CreateNode {
  next = null
  value = null
  constructor(value) {
    this.value = value
  }
}

class createLinkedList {
  head = null
  tail = null
  apped = (value) => {
    const item = new CreateNode(value)
    //  check jika ada nya
    if (!this.head) {
      this.head = item
      this.tail = item
      return null
    }
    this.tail.next = item
    this.tail = item
  }
  size() {
    let count = 1;
    let item = this.head;
    if (!item) {
      return 0
    }
    while ((item = item.next)) {
      count++
    }
    return count;
  }

  insert = (_i, _v) => {
    if (_i < 0 || _i > this.size()) return
    // create node 
    const node = new CreateNode(_v)
    let current = this.head
    let previous;
    if (_i === 0) {
      node.next = current;
      this.head = node
    } else {
      let i = 0;
      while (i++ < _i) {
        previous = current
        current = current.next
      }
      node.next = current
      previous.next = node
    }
  }

  find = (value) =>{
    let count = 1;
    let item = this.head
    if(!item) return null
    while((item == value)){
      if(item.value == value)
      return item
    }
    return item
  }
}

const list = new createLinkedList()
list.apped(1)
console.log(list.size())
list.apped(2)
console.log(list.size())
list.apped(3)
console.log(list.size())
list.insert(2, '1')
console.log(list.size())

const _item = list.find(3)
console.log(_item)
