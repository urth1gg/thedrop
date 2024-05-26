import { Injectable } from '@nestjs/common';
import { Recipient, EmailParams, MailerSend, Sender } from 'mailersend';

@Injectable()
export class MailerSendService {
    private mailersend: MailerSend;

    constructor() {
        this.mailersend = new MailerSend({
           apiKey: process.env.MAILERSEND_API_KEY,
        });
    }

    async sendEmail(recipientEmail: string, recipientName: string, subject: string, message: string): Promise<void> {
        const recipients = [new Recipient(recipientEmail, recipientName)];

        const emailParams = new EmailParams({
            to: recipients,
        })
            .setFrom(new Sender('MS_1h7A50@trial-3yxj6ljv5zqldo2r.mlsender.net', 'Amy from The Drop'))
            .setSubject(subject)
            .setReplyTo(new Recipient('MS_1h7A50@trial-3yxj6ljv5zqldo2r.mlsender.net'))
            .setHtml(message)


        await this.mailersend.email.send(emailParams);
    }
}