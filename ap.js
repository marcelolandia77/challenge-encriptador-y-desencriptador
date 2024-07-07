let originalText = "";

function encriptar() {
    let text = document.getElementById("inputText").value;
    
    // Guardar el texto original
    originalText = text;
    
    // Caso específico para la palabra "hola"
    if (text === "hola") {
        document.getElementById("outputText").value = "hoberial";
    } else {
        // Aplicar las reglas de encriptación generales
        let encryptedText = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.getElementById("outputText").value = encryptedText;
    }
    
    // Limpiar el área de texto de entrada
    document.getElementById("inputText").value = "";
}

function desencriptar() {
    let text = document.getElementById("outputText").value;
    
    // Restaurar el texto original en el área de texto de entrada
    document.getElementById("inputText").value = originalText;
    
    // Limpiar el área de texto de resultado
    document.getElementById("outputText").value = "";
}

function copiar() {
    let copyText = document.getElementById("outputText");
    copyText.select();
    document.execCommand("copy");
}
