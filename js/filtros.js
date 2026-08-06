// ─── FILTROS E KPIs ───────────────────────────────────────────
let projetosFiltrados = [...projetos];

function aplicarFiltros() {
  const ano     = document.getElementById('filtroAno').value;
  const seg     = document.getElementById('filtroSegmento').value;
  const doninho = document.getElementById('filtroDoninho').value;
  const status  = document.getElementById('filtroStatus').value;
  const etapa   = document.getElementById('filtroEtapa').value;
  const busca   = document.getElementById('filtroBusca').value.toLowerCase();

  projetosFiltrados = projetos.filter(p => {
    if (ano     && String(p.anoLancamento) !== ano) return false;
    if (seg     && p.segmento !== seg)              return false;
    if (doninho && p.doninho !== doninho)            return false;
    if (status  && p.statusExecucao !== status)     return false;
    if (etapa   && !(p.detalhes && p.detalhes[etapa])) return false;
    if (busca   && !p.terreno.toLowerCase().includes(busca)
                && !p.bairro.toLowerCase().includes(busca)) return false;
    return true;
  });

  atualizarKPIs(projetosFiltrados);
  renderGantt(projetosFiltrados);
  renderTabela(projetosFiltrados);
  renderCards(projetosFiltrados);
}

function limparFiltros() {
  ['filtroAno','filtroSegmento','filtroDoninho','filtroStatus','filtroEtapa','filtroBusca']
    .forEach(id => { document.getElementById(id).value = ''; });
  aplicarFiltros();
}

function atualizarKPIs(lista) {
  document.getElementById('kpiLancamentos').textContent  = lista.length;
  document.getElementById('kpiAndamento').textContent    = lista.filter(p => p.statusExecucao === 'Em andamento').length;
  document.getElementById('kpiNaoIniciado').textContent  = lista.filter(p => p.statusExecucao === 'Não iniciado').length;
  document.getElementById('kpiFinalizado').textContent   = lista.filter(p => p.statusExecucao === 'Finalizado').length;
  document.getElementById('kpiFull').textContent         = lista.filter(p => p.segmento === 'Full').length;
}
