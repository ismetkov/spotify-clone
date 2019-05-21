require('dotenv').config({ path: 'variables.env' })

const app = require('./app')

app.set('port', process.env.PORT || 7777)

const server = app.listen(app.get('port'), () => {
  console.log(`Server running on: ${server.address().port}`)
})
