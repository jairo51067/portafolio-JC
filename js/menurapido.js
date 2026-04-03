const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('close-chat');
const typingIndicator = document.getElementById('typing-indicator');
const chatSound = document.getElementById('chat-sound');

chatToggle.addEventListener('click', toggleChat);
closeChat.addEventListener('click', toggleChat);

// Guardar estado en localStorage
document.addEventListener('DOMContentLoaded', () => {
    const open = localStorage.getItem('chatOpen') === 'true';
    if (open) {
        toggleChat(false);
    }
});

function toggleChat(playSound = true) {
    const messagesContainer = document.getElementById('chatbot-messages');

    if (chatbot.style.display === 'flex') {
        chatbot.style.display = 'none';
        localStorage.setItem('chatOpen', 'false');
    } else {
        chatbot.style.display = 'flex';
        messagesContainer.innerHTML = '';
        showTyping('👋 Hola, soy Jairo', 'Bienvenido a mi portafolio', 1000);
        showButtons();
        localStorage.setItem('chatOpen', 'true');

        if (playSound) chatSound.play();
    }
}

function showButtons() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';

    const options = [
        { text: '👁️ Mis proyectos', action: () => window.location.href = 'proyectos.html' },
        { text: '👤 Conóceme', action: () => window.location.href = '#conoceme' },
        { text: '✍ Escríbeme', action: () => window.location.href = '#escribeme' },
        { text: '📄 CV Español', action: () => window.open("doc/Jairo_Cardenas_CV__es426.pdf") },
        { text: '📄 CV Inglés', action: () => window.open("doc/Jairo_Cardenas_CV_en426.pdf") },
        { text: '💬 WhatsApp', action: () => window.open("https://wa.me/5804127055024") }
    ];

    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => {
            option.action();
            toggleChat();
        };
        buttonContainer.appendChild(button);
    });
}

// Mensajes con typing animation
function showTyping(sender, message, delay = 1000) {
    typingIndicator.style.display = 'block';
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        addMessage('bot', message);
    }, delay);
}

function addMessage(type, message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.classList.add('message', type);
    msg.textContent = message;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}