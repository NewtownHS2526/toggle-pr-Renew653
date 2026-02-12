const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text"); 
};

heading.addEventListener("click", changeFontColor);

const subtitle = document.querySelector("#subheading");
const changeSubtitleColor = () => {
    subtitle.classList.toggle("blue-text");
};

subtitle.addEventListener("click", changeSubtitleColor);



// functions

const replyBtn = document.querySelector("#reply-button");  
const replyMessage = document.querySelector("#reply-message");

const showReply = () => {
    replyMessage.classList.remove("hidden");
};

replyBtn.addEventListener("click", showReply);

const sendBtn = document.querySelector("#send-button");
const cancelBtn = document.querySelector("#cancel-button");

const hideReply = () => {
    replyMessage.classList.add("hidden");
};

sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);


const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const unreadBtn = document.querySelector("#mark-unread");

const openMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    unreadBtn.classList.remove("hidden");
};

openBtn.addEventListener("click", openMessage);

const closeBtn = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
};

closeBtn.addEventListener("click", closeMessage);

const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};

unreadBtn.addEventListener("click", markUnread);

const targetElement = document.querySelector("#subheading");

const toggleCustomClass = () => {
    if (targetElement.classList.contains("custom")) {
        targetElement.classList.remove("custom");
    } else {
        targetElement.classList.add("custom");
    }
};

subtitle.addEventListener("click", toggleCustomClass);

const checkbox = document.querySelector("#checkbox");
const actionButtons = document.querySelector("#action-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};

checkbox.addEventListener("click", handleCheckbox);