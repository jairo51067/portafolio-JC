const chatToggle = document.getElementById('chat-toggle');
const chatbot = document.getElementById('chatbot');
const closeChat = document.getElementById('close-chat');
const typingIndicator = document.getElementById('typing-indicator');
const openSound = document.getElementById('chat-open-sound');
const messageSound = document.getElementById('chat-message-sound');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

chatToggle.addEventListener('click', () => toggleChat(true));
closeChat.addEventListener('click', () => toggleChat(false));
sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

// Restaurar historial y estado
document.addEventListener('DOMContentLoaded', () => {
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    const open = localStorage.getItem('chatOpen') === 'true';
    if (history.length) history.forEach(m => addMessage(m.type, m.text));
    if (open) toggleChat(false);
});

// Toggle chat
function toggleChat(playSound) {
    if (chatbot.style.display === 'flex') {
        chatbot.style.display = 'none';
        localStorage.setItem('chatOpen', 'false');
    } else {
        chatbot.style.display = 'flex';
        localStorage.setItem('chatOpen', 'true');
        if (playSound) openSound.play();
        showButtons();
    }
}

// Mostrar botones interactivos
function showButtons() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';

    const options = [
        { text: '👁️ Mis proyectos', reply: 'Aquí puedes ver todos mis proyectos: proyectos.html', action: () => window.location.href='proyectos.html' },
        { text: '👤 Conóceme', reply: '¡Encantado! Conóceme en #conoceme', action: () => window.location.href='#conoceme' },
        { text: '✍ Escríbeme', reply: 'Puedes escribirme en la sección #escribeme', action: () => window.location.href='#escribeme' },
        { text: '📄 CV Español', reply: 'Aquí tienes mi CV en español', action: () => window.open("doc/Jairo_Cardenas_CV__es426.pdf") },
        { text: '📄 CV Inglés', reply: 'Aquí tienes mi CV en inglés', action: () => window.open("doc/Jairo_Cardenas_CV_en426.pdf") },
        { text: '💬 WhatsApp', reply: 'Puedes contactarme por WhatsApp', action: () => window.open("https://wa.me/5804127055024") }
    ];

    options.forEach(opt => {
        const button = document.createElement('button');
        button.innerText = opt.text;
        button.onclick = () => {
            addMessage('user', opt.text);
            localStorageHistory('user', opt.text);
            showTyping(opt.reply, 1000);
            opt.action();
        };
        buttonContainer.appendChild(button);
    });
}

// Enviar mensaje desde input
function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage('user', text);
    localStorageHistory('user', text);
    chatInput.value = '';
    // Bot responde según palabras clave
    const reply = getBotReply(text);
    showTyping(reply, 1000);
}

// Bot inteligente básico (palabras clave)
function getBotReply(message) {
    const msg = message.toLowerCase();
    if (msg.includes('proyecto')) return 'Puedes ver mis proyectos aquí: proyectos.html';
    if (msg.includes('cv')) return 'Aquí está mi CV en PDF';
    if (msg.includes('hola') || msg.includes('hi')) return '¡Hola! ¿Cómo puedo ayudarte hoy?';
    if (msg.includes('contacto') || msg.includes('escribirme')) return 'Puedes escribirme en #escribeme';
    return '¡Gracias por tu mensaje! Te responderé pronto.';
}

// Mostrar typing y respuesta
function showTyping(message, delay=1000) {
    typingIndicator.style.display = 'block';
    setTimeout(() => {
        typingIndicator.style.display = 'none';
        addMessage('bot', message);
        localStorageHistory('bot', message);
        messageSound.play();
    }, delay);
}

// Agregar mensaje burbuja
function addMessage(type, message) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.classList.add('message', type);
    msg.textContent = message;
    messagesContainer.appendChild(msg);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Guardar historial en localStorage
function localStorageHistory(type, text) {
    const history = JSON.parse(localStorage.getItem('chatHistory') || '[]');
    history.push({type, text});
    localStorage.setItem('chatHistory', JSON.stringify(history));
}