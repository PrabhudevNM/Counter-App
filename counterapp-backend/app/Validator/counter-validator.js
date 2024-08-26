

const counterValidationSchema = {
    value: {
        in: ['body'],
        exists: {
            errorMessage: 'value is required'
        },
        notEmpty: {
            errorMesage: 'value cannot be empty'
        },
        trim: true 
    }
}

const counteridValidationSchema = {
    id: {
        in: ['params'],
        isMongoId: {
            errorMessage: 'invalid mongodb id'
        }
    }
}

module.exports = {
    counterValidationSchema,
    counteridValidationSchema
}