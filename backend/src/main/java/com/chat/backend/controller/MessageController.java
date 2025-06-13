package com.chat.backend.controller;

import com.chat.backend.model.Message;
import com.chat.backend.model.OutputMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class MessageController {
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public OutputMessage send(Message message) throws Exception {
        System.out.print("Fired endpoint !");
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new OutputMessage(message.getFrom(), message.getText(), time);
    }
}
