// Show welcome message on load
window.onload = function() {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot';
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = "👋 Hi! I'm your CampusGuard Safety Agent. You can report emergencies, send SOS, or ask safety questions.";
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
};

const messagesContainer = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Popup for admin report
function showPopup(message) {
    let popup = document.getElementById('popup');
    popup.innerHTML = `
        <div style="
            display: flex; 
            align-items: center; 
            gap: 12px;
        ">
            <span style="
                font-size: 1.8em;
                background: linear-gradient(90deg, #2d5be3 60%, #6dd5ed 100%);
                color: #fff;
                border-radius: 50%;
                width: 38px;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(44, 62, 80, 0.12);
            ">🚨</span>
            <span style="font-size: 1.08em;">${message}</span>
        </div>
    `;
    popup.style.display = 'block';
    popup.style.opacity = '1';
    popup.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 2500);
}

function appendMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function botReply(userText) {
    if (/emergency|fire|fight|theft|harassment/i.test(userText)) {
        showPopup("Your report has been sent to campus admins!");
        return "Emergency reported! Security has been notified and help is on the way.";
    } else if (/sos|help/i.test(userText)) {
        showPopup("SOS alert sent to admins with your location and ID!");
        return "SOS alert sent. Stay calm, help is coming.";
    } else if (/exit|security|contact/i.test(userText)) {
        return "Nearest exit is by the main lobby. Security office: 123-456-7890.";
    } else {
        return "I'm your campus safety agent. You can report emergencies, send SOS, or ask safety questions.";
    }
}

function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    appendMessage('user', text);
    userInput.value = '';
    setTimeout(() => {
        const reply = botReply(text);
        appendMessage('bot', reply);
    }, 500);
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendMessage();
});