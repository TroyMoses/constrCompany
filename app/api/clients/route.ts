import { connect } from "../../../dbConfig/dbConfig";
import Client from "../../../models/clientModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';



connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { name, email, message } = reqBody;
        const user = process.env.EMAIL_USER;

        const newclientFeedback = new Client({
            name,
            email,
            message
        })

        await newclientFeedback.save()

        // Send feedback email
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: user,
                pass: process.env.EMAIL_PASS,
            },
        });
    
        try {
    
            await transporter.sendMail({
                from: user,
                to: 'helpingbank7@gmail.com',
                subject: `New message from client, ${name}`,
                html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Message: ${message}</p>
                `
            });

            await transporter.sendMail({
                from: user,
                to: email,
                replyTo: email,
                subject: `Feedback Received`,
                html: `
                <p>Thank you so much, ${name} for your feedback. 
                We promise to offer you the best service.</p>
                `
            });


    
        } catch (error) {
            console.log(error);
        }


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}