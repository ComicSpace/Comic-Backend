const joi = require('joi')

exports.sendDownloadLinkToCustomerAfterPurchaseSchema = Joi.object({
    customerName: Joi.string()
        .min(3)
        .max(200)
        .required()
        .trim()
        .lowercase(),

    comicBookName: Joi.string()
        .min(3)
        .max(200)
        .required()
        .trim()
        .lowercase(),

    downloadLink: Joi.string()
        .min(5)
        .max(250)
        .required()
        .trim()
        .lowercase(),


    previewImageLink: Joi.string()
        .min(5)
        .max(250)
        .required()
        .trim()
        .lowercase(),


    customerEmail: joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .trim()
        .lowercase()

});