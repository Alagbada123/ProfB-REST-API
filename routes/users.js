const express = require('express')
const bodyParser = require('body-parser')
const app = express( )
const router = express.Router( )

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')
router.get("/",(req,res) =>{
  res.send('User List')
})
router.get('/new', (req, res) => {
  res.send('User New Form')
})
router.post('/', (req,res) => {
  res.send('Create User')
})
router.get('/:id',(req,res) => {
  res.send('User Get')
})
module.exports = router