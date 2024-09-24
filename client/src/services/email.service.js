import axios from 'axios';

class EmailService {
    constructor() {
        this.URL = 'http://localhost:7001/api/emails';
    }

    async getEmails() {
        const { data } = await axios.get(`${this.URL}/getEmails/1`);
        return data;
    }

    async sendEmail(text) {
        const { data } = await axios.post(this.URL, { text });
        return data;
    }
}

export const emailService = new EmailService();