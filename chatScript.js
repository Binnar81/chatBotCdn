const chatbotButton = document.createElement("div");
chatbotButton.id = "chatbotButton";
chatbotButton.className = "chatbot-button visible-button";
const chatbotIcon = document.createElement("img");
chatbotIcon.src = "../src/assets/chatbot-icon.svg";
chatbotIcon.alt = "Chatbot";
chatbotButton.appendChild(chatbotIcon);

const resizableIframe = document.createElement("iframe");
resizableIframe.id = "resizableIframe";
resizableIframe.className = "resizable";
resizableIframe.src = "http://localhost:5173/question_res";
resizableIframe.frameBorder = "0";

document.body.appendChild(chatbotButton);
document.body.appendChild(resizableIframe);

function showChatbotButton() {
  resizableIframe.classList.remove("expanded");
  chatbotButton.classList.add("visible-button");
}

function showChatbotIframe() {
  resizableIframe.classList.add("expanded");
  chatbotButton.classList.remove("visible-button");
}

chatbotButton.addEventListener("click", showChatbotIframe);

window.addEventListener(
  "message",
  function (event) {
    if (event.data === "showChatbotButton") {
      showChatbotButton();
    }
  },
  false
);
