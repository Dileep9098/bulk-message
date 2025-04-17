import express from "express"
import axios from "axios"
import twilio from "twilio";
import nodemailer from 'nodemailer';


export const sendWhatAppMessage = async (req, res, next) => {
    const { numbers, message } = req.body;

    const idInstance = process.env.GREEN_API_ID;
    const apiTokenInstance = process.env.GREEN_API_TOKEN;

    try {
        for (let number of numbers) {
            const formattedNumber = number + "@c.us"; // WhatsApp format
            const response = await axios.post(
                `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
                {
                    chatId: formattedNumber,
                    message,
                }
            );
            console.log("Green API Response:", response.data);

        }

        res.json({ success: true, message: "Messages sent successfully!" });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res
            .status(500)
            .json({ success: false, message: "Failed to send WhatsApp messages." });
    }


}


// export const sendSMS = async (req,res) => {



//     const { numbers, message } = req.body;
//     console.log(numbers,message)

//     try {
//       const response = await client.messages.create({
//         body: message,
//         from: fromNumber,  // Your Twilio number (e.g., +14155238886)
//         to: numbers             // e.g., +919098590873
//       });

//       console.log("✅ SMS Sent:", response.sid);
//       res.status(200).json({
//         success: true,
//         message: "SMS sent successfully!",
//         sid: response.sid
//       });

//     } catch (err) {
//       console.error("❌ Failed to send SMS:", err.message);
//       res.status(500).json({
//         success: false,
//         message: "Failed to send SMS",
//         error: err.message
//       });
//     }
//   };





export const sendSMS = async (req, res) => {
    const { numbers, message } = req.body;
    console.log("Numbers:", numbers, "Message:", message);
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    const client = twilio(accountSid, authToken);

    try {
        for (let num of numbers) {
            const formatted = num.startsWith('+') ? num : `+${num}`;
            const response = await client.messages.create({
                body: message,
                from: fromNumber,
                to: formatted
            });

            console.log("✅ SMS Sent:", response.sid);
        }

        res.status(200).json({
            success: true,
            message: "SMS sent successfully!"
        });
    } catch (err) {
        console.error("❌ Failed to send SMS:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to send SMS",
            error: err.message
        });
    }
};



// export const sendEmail = async (req, res) => {
//     const { email, message } = req.body;
//     console.log("Emails:", email, "Subject:", "Message:", message);

//     try {
//         // Create transporter using Gmail or SMTP config
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER, // Your Gmail
//                 pass: process.env.EMAIL_PASS  // App Password (not normal password)
//             }
//         });

//         for (let email of email) {
//             const mailOptions = {
//                 from: `"Your Name" <${process.env.EMAIL_USER}>`,
//                 to: email,
//                 subject: subject || "No Subject",
//                 text: message
//             };

//             const info = await transporter.sendMail(mailOptions);
//             console.log("✅ Email sent:", info.messageId);
//         }

//         res.status(200).json({
//             success: true,
//             message: "Emails sent successfully!"
//         });

//     } catch (err) {
//         console.error("❌ Failed to send Email:", err.message);
//         res.status(500).json({
//             success: false,
//             message: "Failed to send emails",
//             error: err.message
//         });
//     }
// };





export const sendEmail = async (req, res) => {
    const { email, message, subject } = req.body;
    console.log("Emails:", email, "Subject:", subject, "Message:", message);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        for (let singleEmail of email) {
            const mailOptions = {
                from: `"Your Name" <${process.env.EMAIL_USER}>`,
                to: singleEmail,
                subject: subject || "No Subject",
                text: message
            };

            const info = await transporter.sendMail(mailOptions);
            console.log("✅ Email sent:", info.messageId);
        }

        res.status(200).json({
            success: true,
            message: "Emails sent successfully!"
        });

    } catch (err) {
        console.error("❌ Failed to send Email:", err.message);
        res.status(500).json({
            success: false,
            message: "Failed to send emails",
            error: err.message
        });
    }
};



// export const makeCall = async (req, res) => {
//     const { numbers } = req.body;
//     const accountSid = process.env.TWILIO_ACCOUNT_SID;
//     const authToken = process.env.TWILIO_AUTH_TOKEN;
//     const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

//     const client = twilio(accountSid, authToken);

//     if (!numbers || !Array.isArray(numbers)) {
//         return res.status(400).json({ success: false, message: "Invalid numbers" });
//     }

//     try {
//         for (const number of numbers) {
//             await client.calls.create({
//                 url: "http://demo.twilio.com/docs/voice.xml", // Customize this later
//                 to: number,
//                 from: twilioNumber,
//             });
//         }

//         res.status(200).json({ success: true, message: "Calls initiated!" });
//     } catch (error) {
//         console.error("Twilio Call Error:", error.message);
//         res.status(500).json({ success: false, message: "Call failed", error: error.message });
//     }
// }



// export const makeCall = async (req, res) => {
//     const { numbers, message } = req.body;

//     const accountSid = process.env.TWILIO_ACCOUNT_SID;
//     const authToken = process.env.TWILIO_AUTH_TOKEN;
//     const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

//     const client = twilio(accountSid, authToken);

//     if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
//         return res.status(400).json({ success: false, message: "Invalid numbers" });
//     }

//     if (!message || typeof message !== 'string') {
//         return res.status(400).json({ success: false, message: "Message is required" });
//     }

//     try {
//         for (const number of numbers) {
//             // 🛠️ Custom TwiML URL with encoded message
//             const twimlUrl = `${process.env.BASE_URL}/api/twiml?message=${encodeURIComponent(message)}`;

//             await client.calls.create({
//                 url: twimlUrl,
//                 to: number,
//                 from: twilioNumber,
//             });
//         }

//         res.status(200).json({ success: true, message: "Calls initiated!" });
//     } catch (error) {
//         console.error("Twilio Call Error:", error.message);
//         res.status(500).json({ success: false, message: "Call failed", error: error.message });
//     }
// };


export const makeCall = async (req, res) => {
    const { numbers, message } = req.body;
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

    const client = twilio(accountSid, authToken);
    const BASE_URL = "https://69cc-2405-201-403d-6005-8c6c-a051-d934-db0d.ngrok-free.app"; // ✅
    // url: `${BASE_URL}/api/v1/twiml?message=${encodeURIComponent(message)}`,
    // url: 'https://8cff-2405-201-403d-6005-8c6c-a051-d934-db0d.ngrok-free.app/api/v1/twiml?message=Hello Dileep ,How are you',

    try {
        for (const number of numbers) {
            await client.calls.create({
                url: `${BASE_URL}/api/v1/twiml?message=${encodeURIComponent(message)}`,

                to: number,
                from: twilioNumber,
            });
        }

        res.status(200).json({ success: true, message: "Calls initiated!" });
        console.log("Calling Twilio with URL:", `${BASE_URL}/api/v1/twiml?message=${encodeURIComponent(message)}`);

    } catch (error) {
        console.error("Twilio Call Error:", error.message);
        res.status(500).json({ success: false, message: "Call failed", error: error.message });
    }
};
