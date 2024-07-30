"use server";
import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_KEY);

export const sendEmail = async (formData: FormData) => {
    const email = formData.get('email');
    const message = formData.get('message');

    if (!validateString(email, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'ahmed.reda.elshahawy@gmail.com',
            subject: 'Message from contact form',
            reply_to: email,
            react: React.createElement(ContactFormEmail, {
                email: email,
                message: message,
            }),
        });
    }
    catch (error) {
        return {error: getErrorMessage(error)};
    }

    return {
        data,
    }
}