    // Array para almacenar los nombres de los participantes
    const amigos = [];

    // Función para agregar un nombre a la lista (CON VALIDACIÓN)
    function agregarAmigo() {
        const nombreInput = document.getElementById('amigo');
        const amigo = nombreInput.value.trim();
        
        // Expresión regular que solo permite letras (incluyendo ñ y acentos) y espacios.
        const soloLetras = /^[a-zA-\s]+$/;

        if (amigo) {
            // Se agrega la nueva condición para validar el texto
            if (soloLetras.test(amigo)) {
                amigos.push(amigo);
                actualizarLista();
                nombreInput.value = ''; // Limpia el campo de texto
                nombreInput.focus(); // Pone el foco de nuevo en el input
            } else {
                // Mensaje de error si se ingresan números o símbolos
                alert('El nombre solo puede contener letras y espacios.');
            }
        } else {
            alert('Por favor, escribe un nombre.');
        }
    }
