package com.chat.backend.controller;

import com.chat.backend.model.Message;
import com.chat.backend.model.OutputMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import java.text.SimpleDateFormat;
import java.util.Date;

public class MessageController {
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public OutputMessage sendMessage(Message message) throws Exception {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new OutputMessage(message.getFrom(), message.getText(), time);
    }
}
