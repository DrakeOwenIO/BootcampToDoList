const router = require('express').Router()
// const db = require('')

router.get('/', (req, res) => {
    db.ToDoList.find()
    .then((ToDoList) => {
      res.render('ToDoList', { ToDoList })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.ToDoList.create(req.body)
    .then(() => {
        res.redirect('/ToDoList')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('ToDoList/new', { message })
    }
    else {
        res.render('error404')
    }
    })
  })

  router.get('/new', (req, res) => {
    res.render('ToDoList/new')
})

  router.get('/:id', (req, res) => {
    db.ToDoList.findById(req.params.id)
    .populate('ToDoList')
    .then(ToDoList => {
        console.log(ToDoList)
        res.render('ToDoList', { ToDoList })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.put('/:id', (req, res) => {
    db.ToDoList.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/ToDoList/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.delete('/:id', (req, res) => {
    db.ToDoList.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/ToDoList')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.get('/:id/edit', (req, res) => {
    db.ToDoList.findById(req.params.id)
    .then(ToDoList => {
        res.render('ToDoList/edit', { ToDoList })
    })
    .catch(err => {
        res.render('error404')
    })
  })

  module.exports = router