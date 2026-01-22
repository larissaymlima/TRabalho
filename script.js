// Seleciona o formulário
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os dados (opcional para demonstração)
    const nome = formulario.querySelector('input[type="text"]').value;

    // Simula um feedback para o usuário
    alert(`Obrigado pelo contato, ${nome}! A equipe Robotic Continuity retornará em breve.`);
    
    formulario.reset(); // Limpa os campos após o envio
});