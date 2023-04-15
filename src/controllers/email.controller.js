const emailService = require("../services/email.service");

class EmailController {
    async sendDownloadLink(req, res) {
        let customerName = req.body.customerName;
        let comicBookName = req.body.comicBookName;
        let downloadLink = req.body.downloadLink;
        let previewImageLink = req.body.coverImageUrl;
        let customerEmail = req.body.customerEmail;


        const status = await emailService.sendEmail(customerName, comicBookName, downloadLink, previewImageLink, customerEmail);
        if (status) {
            return res.status(200).send({
                success: true,
                message: "Download link sent successfully",
            })
        } else {
            return res.status(500).send({
                success: false,
                message: "Unknown error occured",
            })
        }
    }
}

module.exports = new EmailController();