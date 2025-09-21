const carta = document.getElementById('carta');
const sorpresa = document.getElementById('sorpresa');

// Al hacer clic en la carta → ocultar carta y mostrar sorpresa
carta.addEventListener('click', () => {
  carta.classList.add('hidden');
  sorpresa.classList.remove('hidden');
});
