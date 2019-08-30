const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./build'))
app.get('*', function (req, res) {
  if (!path.extname(req.path)) {
    res.sendFile(path.resolve(__dirname, './build/index.html'))
  }
})

app.listen(3000, () => {
  console.log('ok')
})
