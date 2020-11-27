'use strict'


console.log('Global scope:')
console.log(this)


console.log('\nFunction scope:')

function doTheThing () {
  console.log(this)
}

doTheThing()
doTheThing.call({ hello: 'world' })


console.log('\nObject scope:')

const stuff = {
  answer: 42,

  calculateQuestion () {
    console.log('Normal:', this)
  },

  getUniverse: () => {
    console.log('Arrow:', this)
  }
}

stuff.calculateQuestion()
stuff.getUniverse()
