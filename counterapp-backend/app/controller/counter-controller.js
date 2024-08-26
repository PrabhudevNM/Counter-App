const Counter = require('../model/counter-model')
const {validationResult} = require('express-validator')
const counterCltr = {}

counterCltr.list=(req,res)=>{
    Counter.find()
    .then((counter)=>{
        res.json(counter)
    })
    .catch((err)=>{
        console.lig(err)
        res.status(500).json({error:"something went wrong"})
    })
}

counterCltr.show =(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const id = req.params.id
    Counter.findById(id)
    
        .then((counter)=>{
            if(!counter)
            {
                return res.status(404).json({ errors:'record not found'})
            }
            res.json(counter)
        })
        .catch()
}



counterCltr.create = (req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const body =req.body
    const counter = new Counter(body)
    counter.save()
    .then((counter)=>{
        res.status(201).json(counter)
    })
    .catch(()=>{
        res.status(500).json({error: 'something went wrong'})
    })
    
}

counterCltr.update = (req,res)=> {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const id = req.params.id
    const body = req.body
    Counter.findByIdAndUpdate(id,body,{new:true, runValidators:true})
    .then((counter)=>{
        res.json(counter)
    })
    .catch((err)=>{
        res.json(err)
    })


}

counterCltr.remove = (req,res) =>{
    const id = req.params.id
    Counter.findByIdAndDelete(id)
    .then((counter)=>{
        if(!counter){
            return res.status(404).json({error: 'record not found'})
        }
        res.json(counter)
    })
    .catch((err)=>{
        res.json(err)
    })
}



module.exports = counterCltr