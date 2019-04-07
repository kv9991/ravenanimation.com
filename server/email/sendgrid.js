import sendgridClient from "@sendgrid/mail";

sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);

export const sendgrid = sendgridClient;
