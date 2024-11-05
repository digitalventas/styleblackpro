// Guardar este código como `whatsapp-script.js` en tu servidor o CDN
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // Crear un botón de WhatsApp
        var whatsappButton = document.createElement('a');
        whatsappButton.href = "https://wa.me/1234567890"; // reemplaza con tu número de WhatsApp
        whatsappButton.target = "_blank";
        whatsappButton.textContent = "Contactar en WhatsApp";
        
        // Opcional: estilo del botón
        whatsappButton.style.position = 'fixed';
        whatsappButton.style.bottom = '20px';
        whatsappButton.style.right = '20px';
        whatsappButton.style.padding = '10px 20px';
        whatsappButton.style.backgroundColor = '#25D366';
        whatsappButton.style.color = '#fff';
        whatsappButton.style.borderRadius = '5px';
        whatsappButton.style.textDecoration = 'none';
        
        // Agregar el botón al cuerpo de la página
        document.body.appendChild(whatsappButton);
    });
})();
