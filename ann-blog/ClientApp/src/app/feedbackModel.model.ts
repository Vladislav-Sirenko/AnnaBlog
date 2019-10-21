export class FeedbackModel {
    email: string;
    phone: string;
    text: string;
    constructor(email: string, phone: string, text: string) {
        this.email = email;
        this.phone = phone;
        this.text = text;
    }
}
