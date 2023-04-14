const emailService = require("../services/email.service");

class EmailController {
    async sendDownloadLink(req, res) {
        emailVariables = req.body;

        const status = await emailService.sendEmail(req.body);
        if (status) {
            return res.status(200).send({
                success: true,
                message: "Download link sent successfully",
            })
        } else {
            return res.status(500).send({
                success: true,
                message: "Unknown error occured",
            })
        }
    }
}

module.exports = new EmailController();