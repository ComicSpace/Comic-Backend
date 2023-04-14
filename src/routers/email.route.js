const express = require("express");
const emailController = require("../controllers/email.controller");
const validator = require("../middlewares/validator.middleware");
const { sendDownloadLinkToCustomerAfterPurchaseSchema } = require("../schemas/email.schemas");

const emailRouter = express.Router();

/* 
After a purchase is completed by a customer and it is verified that they have paid, an email will be sent to them carrying the download link to the comic they purchased.
This route requires exactly 5 variables to be passed in the body as json:

-customerName
-comicBookName
-downloadLink
-previewImageLink
-customerEmail
*/
emailRouter.post("/", [validator(sendDownloadLinkToCustomerAfterPurchaseSchema)], emailController.sendDownloadLink);

module.exports = emailRouter;
