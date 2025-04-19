function toggleChat() {
  const chatbot = document.getElementById('chatbot');
  const messagesContainer = document.getElementById('chatbot-messages');
  
  
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
      { text: '👁️‍🗨️ Mis proyectos', action: () => { window.location.href = 'proyectos.html'; toggleChat(); }, style: 'color: #fff; background-color: #333;' },
      { text: ' 👤 Conóceme', action: () => { window.location.href = '#conoceme'; toggleChat(); }, style: 'color: #fff; background-color: #333;' },
      { text: '✍ Escríbeme', action: () => { window.location.href = '#escribeme'; toggleChat(); }, style: 'color: #fff; background-color: #333;' },
      { text: '📃 Mi Curriculum', action: () => { window.location.href="DOC/Jairo_Cardenas_CV_Desarrollador_Full_Stack.pdf"; toggleChat(); }, style: 'color: #fff; background-color: #333;' },
      { text: '☎ WhatsApp', action: () => { window.location.href="https://wa.me/5804127055024"; toggleChat(); }, style: 'background-color: 	#25d366;' },
  ];

  options.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option.text;
      button.setAttribute('style', option.style);
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