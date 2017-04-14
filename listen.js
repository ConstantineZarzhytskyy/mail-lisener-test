'use strict';

var MailListener = require("mail-listener");
var mailListener = new MailListener({
  username: "***@gmail.com",
  password: "***",
  host: "imap.gmail.com",
  port: 993, // imap port
  secure: true, // use secure connection
  mailbox: "INBOX", // mailbox to monitor
  fetchUnreadOnStart: true
});


mailListener.start();

mailListener.on("server:connected", function(){
  console.log("imapConnected");
});

mailListener.on("mail:arrived", function(id){

});
