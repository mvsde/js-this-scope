'use strict'


console.log('Global scope:')
console.log('  ', this)


console.log('\nFunction scope:')

function doTheThing () {
  console.log('  ', this)
}

doTheThing()
doTheThing.call({ hello: 'world' })


console.log('\nObject scope:')

const stuff = {
  answer: 42,

  calculateQuestion () {
    console.log('  Normal:', this)
  },

  getUniverse: () => {
    console.log('  Arrow:', this)
  }
}

stuff.calculateQuestion()
stuff.getUniverse()


console.log('\nClass scope:')

class ClickyThing {
  constructor (button, secret) {
    this.secret = secret

    button.addEventListener('click', function () {
      console.log('  Normal:', this)
    })

    button.addEventListener('click', () => {
      console.log('  Arrow:', this)
    })
  }
}

new ClickyThing(document.querySelector('button'), 42)
