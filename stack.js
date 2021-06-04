// Stack (Data Structure) - Tumpukan

/**
 * Concept : last in First Out Concept
 *
 * @return Object
 */
const createStack = () => {
  let array = [];
  return {
    /**
     * Add new Item in last array.
     *
     * @returns null
     * @params item
     */
    push: (item) => {
      array.push(item)
    },
    /**
     * delete last Item in last array.
     *
     * @params null
     */
    pop: () => {
      array.pop()
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

// initialize stack
const stack = createStack();
stack.push('One Piece') // ['One Piece]
stack.push('Kimetsu no Yaiba') //[One Piece ', 'Kimetsu no Yaiba']
stack.push('Naruto')//[One Piece ', 'Kimetsu no Yaiba', 'Naruto']
stack.push('Attack on The Titan') // [One Piece ', 'Kimetsu no Yaiba', 'Naruto', 'Attack on The Titan]
stack.push('Kuroko No Basuke') //  [One Piece ', 'Kimetsu no Yaiba', 'Naruto', 'Attack on The Titan, Kuroko No Basuke]
console.log(stack.size());
stack.pop();//  [One Piece ', 'Kimetsu no Yaiba', 'Naruto', 'Attack on The Titan] -> kuroko has been deleted
console.log(stack.peek());