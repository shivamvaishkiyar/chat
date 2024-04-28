document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const chatMessages = document.getElementById('chatMessages');
  
    sendBtn.addEventListener('click', () => {
      const messageText = messageInput.value.trim();
  
      if (messageText !== '') {
        appendMessage('You', messageText, 'sent');
        messageInput.value = '';
      }
    });
  
    function appendMessage(sender, message, messageType) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', messageType);
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
    }
  });
  