const questionInput = document.getElementById('question');
const btn = document.getElementById('btn');
const tittle = document.getElementById('tittle');
const main = document.getElementsByTagName('main')[0];
let chat = document.getElementById('chat');


// Evento de clic para agregar la tarea
btn.addEventListener('click', chatBot);



function chatBot(e) {
    e.preventDefault(); // Evita que el formulario se recargue

    if (questionInput.value.trim() !== '') {
        
        tittle.classList.add('hidden');

        if (chat.classList.contains('hidden')) {
            chat.classList.remove('hidden');
            chat.classList.add('flex');
        }
        
        let span = document.createElement("span");
        span.classList.add('bg-gray-800', 'py-2', 'px-4', 'rounded-2xl', 'text-white', 'mb-2' , 'max-w-6/10', 'self-end', 'break-words');
        span.innerHTML = questionInput.value;
        chat.appendChild(span);

        let span2 = document.createElement("span");
        span2.classList.add('py-2', 'px-4', 'rounded-2xl', 'text-white', 'mb-2' , 'max-w-full', 'self-start', 'break-words');
        span2.innerHTML = questionInput.value;
        chat.appendChild(span2);
        
        
        question.value = ''; // Limpia el input después de agregar la tarea
        
    }
}
