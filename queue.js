// Queue (Data Structure) - Antrian

/**
 * Concept : First in First Out
 *
 * @return Object
 */
const createQueue = () => {
  let array = [];

  return {
    /**
     * enqueue:  Insert new item into start from array 
     *
     * @return null
     * @params item
     */
    enqueue: (item) => {
      array.unshift(item)
    },
    /**
     * dequeue : Delete last item in array 
     *
     * @return null
     * @params item
     */
    dequeue: () => {
      array.pop();
    },
    /**
     * show last item array (sort : ke atas)
     * @returns item array
     * @params null
     */
    peek: () => {
      return array[array.length - 1]
    },
    /**
     * show length based item in array
     * @returns int
     * @params null
     */
    size: () => {
      return array.length
    }
  }
}

//  initialize Queue
const Queue = createQueue();
Queue.enqueue('Muhamad') // ['Muhamad']
Queue.enqueue('Zainal')  // ['Zainal, 'Muhamad']
Queue.enqueue('Arifin') // ['Arifin','Zainal, 'Muhamad']
Queue.enqueue('Riana') // ['Riana','Arifin','Zainal, 'Muhamad']
Queue.enqueue('Eka') // [ 'Eka', 'Arifin','Zainal, 'Muhamad']
Queue.enqueue('Fidriyani') // ['Fidriyani' ,'Eka', 'Arifin','Zainal, 'Muhamad']
Queue.dequeue(); // - 'Muhamad' Deleted
Queue.dequeue(); // - 'Zainal' Deleted
Queue.dequeue(); // - 'Arifin' Deleted
console.log(Queue.peek()); // - Riana Show
console.log(Queue.size()); //size array 3 


// implementation : Queue in before Event loop in Javacript Asychronus Concept