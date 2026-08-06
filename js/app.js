// ─── INICIALIZAÇÃO ────────────────────────────────────────────
document.getElementById('dataAtual').textContent = new Date().toLocaleDateString('pt-BR', {
  day: '2-digit', month: 'long', year: 'numeric'
});

// Roda tudo ao carregar
aplicarFiltros();
setTimeout(irParaHoje, 300);
