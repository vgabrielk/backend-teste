const express = require('express')

const app = express()

app.use((
    express.urlencoded({
        extended: true
    })
))

app.listen(3001)

app.get('/', (req, res ) => {
    res.json({message : 'Welcome to my application!'})
})
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