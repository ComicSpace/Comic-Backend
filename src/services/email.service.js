const nodeMailer = require('nodemailer');

class EmailService {
    async nodeMailerFunction(comicBookName, customerEmail, emailHTMLBody, previewImageLink) {
        //email account setup and login. You need to pass in your emails credentials and thus use this app to control it.
        const transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        //This is where the actual email message is built. Things like CC, recipients, attachments and so on are configured here.
        const info = await transporter.sendMail({
            from: `ComicSpace <${process.env.GMAIL_ADDRESS}>`,
            to: customerEmail,
            subject: `${comicBookName} Download Link`,
            html: emailHTMLBody,

            //each attachment you create requires an Id, which you can reference in the email body later on. See example above in html1 variable
            attachments: [{
                filename: `${comicBookName} cover page`,
                path: previewImageLink,
                // path: './cover-pages/img1.jpg',
                cid: 'comicImagePreview'
            },
                // {
                //     filename: 'img1.png',
                //     path: './img1.png'
                // }
            ]
        });

        //Displays info about mails sent, successful and failed.
        console.log("Message send: " + info.messageId);
        console.log(info.accepted);
        console.log(info.rejected);

        if (info.rejected.length < 1) {
            return true;
        } else {
            return false;
        }
    }

    async sendEmail(customerName, comicBookName, downloadLink, previewImageLink, customerEmail) {

        //The actual email body
        const emailHTMLBody = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Congratulations on Your Comic Book Purchase!</title>
  </head>
  <body>
    <h1>Congratulations on Your Comic Book Purchase!</h1>
    <p>Dear ${customerName},</p>
    <p>Thank you for purchasing our <strong>${comicBookName}</strong> comic book. We hope you enjoy reading it as much as we enjoyed providing it for you.</p>
    <p>Please click the following link to download your copy:</p>
    <a href="${downloadLink}">Download ${comicBookName}</a>
    <br>
    <img src="${previewImageLink}" alt="${comicBookName} Cover Page">
    <p>If you have any questions or concerns about your purchase, please don't hesitate to contact us.</p>
    <p>Thank you again for your business.</p>
    <p>Sincerely,</p>
    <p>The ComicSpace Team</p>
  </body>
</html>
`;

        //returns true or false
        return await this.nodeMailerFunction(comicBookName, customerEmail, emailHTMLBody, previewImageLink);
    }

}

module.exports = new EmailService();