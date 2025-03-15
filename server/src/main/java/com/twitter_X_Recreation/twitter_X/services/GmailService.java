package com.twitter_X_Recreation.twitter_X.services;


import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.model.Message;
import com.twitter_X_Recreation.twitter_X.exceptions.EmailFailedToSendException;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Properties;

@Service
public class GmailService {

    private final Gmail gmail;

    private final String MY_EMAIL_ADDRESS;

    public GmailService(Gmail gmail, @Value("${gmail.my.email}") String MY_EMAIL_ADDRESS) {
        this.gmail = gmail;
        this.MY_EMAIL_ADDRESS = MY_EMAIL_ADDRESS;

        if (MY_EMAIL_ADDRESS == null || MY_EMAIL_ADDRESS.trim().isEmpty()) {
            throw new IllegalStateException("Environment variable MY_EMAIL_ADDRESS is not set or empty");
        }
    }

    public void sendEmail(String toAddress, String subject, String content) throws Exception {
        Properties props = new Properties();
        Session session = Session.getInstance(props, null);
        MimeMessage email = new MimeMessage(session);

        try {
            email.setFrom(new InternetAddress(MY_EMAIL_ADDRESS));
            email.addRecipients(javax.mail.Message.RecipientType.TO, new InternetAddress[]{new InternetAddress(toAddress)});
            email.setSubject(subject);
            // Set content as HTML instead of plain text
            email.setContent(content, "text/html; charset=UTF-8");

            // Encode the message
            ByteArrayOutputStream buffer = new ByteArrayOutputStream();
            email.writeTo(buffer);
            byte[] rawMessageBytes = buffer.toByteArray();
            String encodedEmail = Base64.encodeBase64URLSafeString(rawMessageBytes);

            Message message = new Message();
            message.setRaw(encodedEmail);

            // Send the email
            gmail.users().messages().send("me", message).execute();
        } catch (MessagingException | IOException e) {
            throw new EmailFailedToSendException(e);
        }
    }}



