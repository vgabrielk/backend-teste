const express = require('express')
const cors = require('cors')

const app = express()

app.use((
    express.urlencoded({
        extended: true
    })
))

app.use(cors())

app.listen(process.env.PORT || 3001)

app.get('/childrens', (req, res) => {
    res.json([
        {
            id : 1,
            name : 'Vitor Felix',
            age : 19,
            company : 'Modifique Digital'
        }
    ])
})

app.get('/childrens/:id', (req, res) => {
    res.json({message : 'id'})
})