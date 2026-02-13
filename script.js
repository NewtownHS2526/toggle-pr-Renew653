const heading = document.querySelector("#heading");

const changeFontColor = (e) => {
    e.targe.classList.add("blue-text"); 
};

heading.addEventListener("click", changeFontColor);

const subtitle = document.querySelector("#subheading");
const changeSubtitleColor = (e) => {
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

const hideReply = (e) => {
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

const deleteBtn = document.querySelector("#delete");

const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};
deleteBtn.addEventListener("click", handleDelete);

const readBtn = document.querySelector("#mark");

const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

readBtn.addEventListener("click", markRead);

const darkModeBtn = document.querySelector("#dark");
const body = document.querySelector("body");

const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", toggleDarkMode);

const markbutton = document.querySelector("#mark-button");
