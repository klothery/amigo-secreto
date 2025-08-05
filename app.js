    // Matriz para almacenar los nombres de los participantes
    const amigos = [];

    // Función para agregar un nombre a la lista (CON VALIDACIÓN)
    function agregarAmigo() {
        const nombreInput = document.getElementById('amigo');
        const amigo = nombreInput.value.trim();
        
        // Expresión regular que solo permite letras (incluyendo ñ) y espacios.
        const soloLetras = /^[a-zA-\s]+$/;

        if (amigo) {
            // Se agrega la nueva condición para validar el texto
            if (soloLetras.test(amigo)) {
                amigos.push(amigo);
                actualizarLista();
                nombreInput.value = ''; 
                nombreInput.focus(); 
            } else {
                // Mensaje de error si se ingresan números o símbolos
                alert('El nombre solo puede contener letras.');
            }
        } else {
            alert('Por favor, escribe un nombre.');
        }
    }

    // Función para mostrar la lista de participantes en la pantalla
    function actualizarLista() {
        const listaNombres = document.getElementById('listaAmigos');
        listaNombres.innerHTML = ''; // Limpia la lista antes de actualizar
        amigos.forEach(amigo => {
            const li = document.createElement('li');
            li.textContent = amigo;
            listaNombres.appendChild(li);
        });
    }

    // Función principal para realizar el sorteo
    function sortearAmigo() {
        if (amigos.length < 2) {
            alert('Necesitas al menos 2 participantes para el sorteo.');
            return;
        }

        let dador = [...amigos];
        let receptor = [...amigos];
        
        const resultadosDiv = document.getElementById('resultado');
        resultadosDiv.innerHTML = '<h3>Resultados del Sorteo:</h3>';
        let asignacionCorrectas = false;

        // Bucle para asegurar que nadie se saque a sí mismo
        while (!asignacionCorrectas) {
            receptor.sort(() => Math.random() - 0.5); // Mezclamos solo una lista
            
            let posible = true;
            for(let i = 0; i < dador.length; i++){
                if(dador[i] === receptor[i]){
                    posible = false;
                    break;
                }
            }

            if (posible) {
                asignacionCorrectas = true;
                for(let i = 0; i < dador.length; i++){
                    const p = document.createElement('p');
                    p.innerHTML = `<strong>${dador[i]}</strong> le regala a ➔ <strong>${receptor[i]}</strong>`;
                    resultadosDiv.appendChild(p);
                }
            }
        }
    }
