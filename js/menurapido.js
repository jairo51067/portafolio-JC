function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  const messagesContainer = document.getElementById('chatbot-messages');
  // const buttonContainer = document.getElementById('button-container');
  
  if (chatbot.style.display === 'none') {
      chatbot.style.display = 'block';
      messagesContainer.innerHTML = ''; // Limpiar mensajes anteriores
      addMessage('¡Hola! Soy Jairo Cárdenas', 'Bienvenido a mi portafolio. ¿Cómo puedo ayudarte hoy?');
      showButtons();
  } else {
      chatbot.style.display = 'none';
  }
}

function showButtons() {
  const buttonContainer = document.getElementById('button-container');
  buttonContainer.innerHTML = ''; // Limpiar botones anteriores

  const options = [
      { text: 'Ver mis proyectos', action: () => { window.location.href = 'proyectos.html'; toggleChat(); } },
      { text: 'Conóceme', action: () => { window.location.href = '#conoceme'; toggleChat(); } },
      { text: 'Escríbeme', action: () => { window.location.href = '#escribeme'; toggleChat(); } },
      { text: 'Mi Curriculum', action: () => { window.location.href = "doc/V2024_11_22 JAIRO A CARDENAS M.pdf"; toggleChat(); } },
      
  ];

  options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option.text;
      button.onclick = option.action;
      buttonContainer.appendChild(button);
  });
}

function addMessage(sender, message) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const messageElement = document.createElement('p');
  messageElement.textContent = `${sender}: ${message}`;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Desplazar hacia abajo
}