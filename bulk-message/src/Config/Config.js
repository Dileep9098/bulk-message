const Config={
    ADMIN_BASE_URL:"http://localhost:5173/",
    WEBSITE_IBASE_URL:"http://localhost:5173/",
    END_POINT_LIST:{
        REGITER_USER:"/api/v1/register/",
        GET_ALL_USER:"/api/v1/get-all-user/",
        UPDATE_USER:"/api/v1/update-user",
        DELETE_USER:"/api/v1/delete-user",


        UPLOAD_BULK_EXCEL_FILE:"/api/v1/admin/bulk-upload-excel",


        SEND_WHATSAPP_MESSAGE:"/api/v1/send-whatApp-message",
        SEND_SMS_MESSAGE:"/api/v1/send-sms-message",
        SEND_EMAIL_MESSAGE:"/api/v1/send-email-message",
        MAKE_CALL:"/api/v1/make-call",

      


    },
    APP_SETTING : {
        DefaultCurrencyCode: "INR",
        DefaultCurrencySymbol: "₹"
    },
}

export default Config; 