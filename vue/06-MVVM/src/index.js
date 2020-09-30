import MVVM from './mvvm'

const app = new MVVM({
  el: '#app',
  data: {
    counter: 0,
    content: '<span style="color:blue">MVVM</span>'
  }
})

setInterval(() => app.counter++, 1000)
