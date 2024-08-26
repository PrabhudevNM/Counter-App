const express = require('express')
const cors = require('cors')
const { checkSchema }= require('express-validator')
const app = express()
const port = 5000
const configureDB=require('./config/db')

const counterCltr= require('./app/controller/counter-controller')
const { counterValidationSchema , counteridValidationSchema}= require('./app/Validator/counter-validator')



app.use(express.json())
app.use(cors())
configureDB()

app.get('/api/counter',checkSchema(counterValidationSchema,counteridValidationSchema),counterCltr.list)
app.get('/api/counter/:id',checkSchema(counteridValidationSchema,counterValidationSchema), counterCltr.show)
app.post('/api/counter',checkSchema(counterValidationSchema,counteridValidationSchema), counterCltr.create)
app.put('/api/counter/:id',checkSchema(counterValidationSchema,counteridValidationSchema),counterCltr.update)
app.delete('/api/counter/:id',checkSchema(counterValidationSchema,counteridValidationSchema),counterCltr.remove)




app.listen(port,()=>{
    console.log('server running on port',port)
})