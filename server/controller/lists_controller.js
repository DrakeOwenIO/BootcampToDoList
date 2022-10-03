const router = require('express').Router()
// const db = require('')

router.get('/', (req, res) => {
    db.Lists.find()
    .then((lists) => {
      res.render('lists', { lists })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

router.post('/', (req, res) => {
    db.Lists.create(req.body)
    .then(() => {
        res.redirect('/lists')
    })
    .catch(err => {
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: '
        for (var field in err.errors) {
            message += `${field} was ${err.errors[field].value}. `
            message += `${err.errors[field].message}`
        }
        console.log('Validation error message', message)
        res.render('lists/new', { message })
    }
    else {
        res.render('error404')
    }
    })
  })

  router.get('/new', (req, res) => {
    res.render('lists/new')
})

  router.get('/:id', (req, res) => {
    db.Lists.findById(req.params.id)
    .populate('lists')
    .then(lists => {
        console.log(lists)
        res.render('lists', { lists })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.put('/:id', (req, res) => {
    db.Lists.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect(`/lists/${req.params.id}`)
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.delete('/:id', (req, res) => {
    db.Lists.findByIdAndDelete(req.params.id)
    .then(() => {
        res.redirect('/lists')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
  })

  router.get('/:id/edit', (req, res) => {
    db.Lists.findById(req.params.id)
    .then(lists => {
        res.render('lists/edit', { lists })
    })
    .catch(err => {
        res.render('error404')
    })
  })

  module.exports = router