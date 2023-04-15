const Joi = require('joi')

exports.sendDownloadLinkToCustomerAfterPurchaseSchema = Joi.object({
    customerName: Joi.string()
        .min(3)
        .max(200)
        .required()
        .trim(),

    comicBookName: Joi.string()
    
        .min(3)
        .max(200)
        .required()
        .trim(),

    downloadLink: Joi.string()
        .min(5)
        .required()
        .trim()
        .lowercase(),


    coverImageUrl: Joi.string()
        .min(5)
        .required()
        .trim(),


    customerEmail: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .trim()
        .lowercase()

});