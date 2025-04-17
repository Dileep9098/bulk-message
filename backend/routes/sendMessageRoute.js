import express from "express"
import { makeCall, sendEmail, sendSMS, sendWhatAppMessage } from "../controllers/sendMessageController.js";

const router=express.Router()


router.get("/twiml", (req, res) => {
    const { message = "Hello Dileep ,How are you" } = req.query;
  
    const twimlResponse = `
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say voice="alice" language="en-US">${message}</Say>
    </Response>
`;

  
    res.set("Content-Type", "text/xml");
    res.send(twimlResponse);
  });
  
router.route("/send-whatApp-message").post(sendWhatAppMessage)
router.route("/send-sms-message").post(sendSMS)
router.route("/send-email-message").post(sendEmail)
router.route("/make-call").post(makeCall)

export default router;