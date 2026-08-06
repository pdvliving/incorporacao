// ─── HELPERS ──────────────────────────────────────────────────
const mesesLabel = ["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ","JAN","FEV","MAR","ABR"];
const anos2      = [2026,2026,2026,2026,2026,2026,2026,2026,2026,2026,2026,2026,2027,2027,2027,2027];
const HOJE_MES   = 7;
let zoomLevel    = 1;
const COL_W      = 70;

function getCorProjeto(p, i) {
  if (p.isCoringa && i === p.ganttInicio) return '#8a63a3';
  if (p.statusMacro === 'Lançado')  return '#5f6f52';
  if (p.statusMacro === 'Previsto') return '#4d7399';
  if (p.statusMacro === 'Coringa')  return '#8a63a3';
  return '#6f5b47';
}

function statusTagMacro(s) {
  const map = { 'Lançado':'lancado','Previsto':'previsto','Coringa':'coringa','Em contratação':'contratacao' };
  return `<span class="tag-status tag-${map[s]||'previsto'}">${s}</span>`;
}

function farolDot(f) {
  const map = { g:'farol-g', a:'farol-a', r:'farol-r' };
  return `<span class="farol ${map[f]||'farol-vazio'}"></span>`;
}

function normalizarChave(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,'-').toLowerCase();
}

// ─── GANTT ────────────────────────────────────────────────────
function renderGantt(lista) {
  const container = document.getElementById('ganttContainer');
  const w = COL_W * zoomLevel;
  const totalW = w * mesesLabel.length + 200;
  let html = `<table style="width:${totalW}px;border-collapse:collapse;min-width:${totalW}px;"><thead><tr>`;
  html += `<th style="background:rgba(0,0,0,0.1);color:rgba(255,255,255,0.85);font-size:11px;padding:8px 10px;text-align:left;width:200px;border-right:1px solid rgba(255,255,255,0.1);">PROJETO</th>`;
  mesesLabel.forEach((m, i) => {
    const isHoje = i === HOJE_MES;
    html += `<th style="background:${isHoje?'rgba(229,57,53,0.2)':'rgba(0,0,0,0.1)'};color:${isHoje?'#ffd7d2':'rgba(255,255,255,0.85)'};font-size:11px;padding:8px 4px;text-align:center;width:${w}px;border-right:1px solid rgba(255,255,255,0.1);white-space:pre-line;line-height:1.2;">${m}\n${anos2[i]}</th>`;
  });
  html += '</tr></thead><tbody>';
  lista.forEach(p => {
    html += `<tr><td style="background:#e7dccd;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.2);width:200px;border-right:1px solid rgba(255,255,255,0.1);">
      <div style="font-size:13px;font-weight:700;color:var(--text-dark);">${p.terreno}</div>
      <div style="font-size:11px;color:var(--text-light);">${p.bairro} · ${p.statusMacro}</div></td>`;
    mesesLabel.forEach((m, i) => {
      const isHoje = i === HOJE_MES;
      let barHTML = '';
      if (i >= p.ganttInicio && i <= p.ganttFim) {
        const cor = getCorProjeto(p, i);
        const isStart = i === p.ganttInicio, isEnd = i === p.ganttFim;
        const radius = isStart && isEnd ? '9px' : isStart ? '9px 0 0 9px' : isEnd ? '0 9px 9px 0' : '0';
        barHTML = `<div style="position:absolute;top:50%;transform:translateY(-50%);height:18px;background:${cor};border-radius:${radius};left:${isStart?4:0}px;right:${isEnd?4:0}px;"></div>`;
      }
      const hojeBar = isHoje ? `<div style="position:absolute;top:0;bottom:0;left:50%;width:2px;background:#e53935;z-index:5;"></div>` : '';
      html += `<td style="background:${isHoje?'rgba(229,57,53,0.05)':'var(--white)'};border-bottom:1px solid rgba(0,0,0,0.05);border-right:1px solid rgba(0,0,0,0.05);position:relative;height:36px;width:${w}px;padding:0;">${barHTML}${hojeBar}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';
  container.innerHTML = html;
}

function zoomGantt(dir) {
  zoomLevel = Math.max(0.6, Math.min(2, zoomLevel + dir * 0.2));
  renderGantt(projetosFiltrados);
}

function irParaHoje() {
  const scroll = document.getElementById('ganttScroll');
  scroll.scrollLeft = (200 + HOJE_MES * COL_W * zoomLevel) - 300;
}

// ─── TÓPICOS (checklist) ──────────────────────────────────────
function toggleTopico(projetoId, topico) {
  const chave    = normalizarChave(topico);
  const conteudo = document.getElementById(`topico-${projetoId}-${chave}`);
  const icone    = document.getElementById(`toggle-icon-${projetoId}-${chave}`);
  const aberto   = conteudo.classList.contains('open');
  conteudo.classList.toggle('open', !aberto);
  icone.textContent = aberto ? '+' : '−';
}

function renderTopicosProjeto(p) {
  const topicosOrdem = ["Demolição","PDV","Pré Obra","Vizinhos"];
  return topicosOrdem.map(topico => {
    const bloco      = p.detalhes && p.detalhes[topico];
    const itens      = bloco ? bloco.itens : [];
    const dataInicio = bloco ? bloco.dataInicio : '—';
    const dataFim    = bloco ? bloco.dataFim    : '—';
    const chave      = normalizarChave(topico);
    return `
      <div class="topico-box">
        <div class="topico-header" onclick="toggleTopico(${p.id}, '${topico}')">
          <div class="topico-titulo">${topico}</div>
          <div class="topico-toggle" id="toggle-icon-${p.id}-${chave}">+</div>
        </div>
        <div class="topico-conteudo" id="topico-${p.id}-${chave}">
          <div class="topico-datas">
            <div>📅 Início: <strong>${dataInicio}</strong> &nbsp;→&nbsp; Fim: <strong>${dataFim}</strong></div>
            <div></div><div></div><div></div><div></div>
          </div>
          <div class="topico-col-header">
            <div>Assunto</div><div>Farol</div><div>Venc.</div><div>Data limite</div><div>Status / observação</div>
          </div>
          ${itens.length
            ? itens.map(item => `
              <div class="topico-linha">
                <div>${item.assunto || '—'}</div>
                <div>${farolDot(item.farol)}</div>
                <div>${item.farolVenc ? farolDot(item.farolVencCor || 'a') : '—'}</div>
                <div>${item.dataLimite || '—'}</div>
                <div style="white-space:pre-line;">${item.status || '—'}</div>
              </div>`).join('')
            : `<div class="topico-linha"><div colspan="5">Sem informações</div></div>`
          }
        </div>
      </div>`;
  }).join('');
}

// ─── TABELA DESKTOP ───────────────────────────────────────────
function renderTabela(lista) {
  const tbody = document.getElementById('tbodyProjetos');
  let html = '';
  lista.forEach(p => {
    html += `
      <tr>
        <td><button class="expand-btn" id="btn-${p.id}" onclick="toggleDetalhe(${p.id})">+</button></td>
        <td><strong>${p.terreno}</strong><br><span style="font-size:11px;color:var(--text-light);">${p.bairro}</span></td>
        <td>${p.segmento}</td>
        <td>${p.doninho}</td>
        <td>${statusTagMacro(p.statusMacro)}</td>
        <td>${p.posseLotes}</td>
        <td>${p.inicioDemolicao}</td>
        <td>${p.terminoDemolicao}</td>
        <td>${p.inicioPDV}</td>
        <td>${p.finalizacaoPDV}</td>
        <td>${p.meeting}</td>
        <td>${p.demolicaoPDV}</td>
        <td>${p.inicioPreObra}</td>
        <td>${p.inicioObra}</td>
      </tr>
      <tr class="detail-row" id="detail-${p.id}">
        <td colspan="14" style="padding:0;">
          <div style="background:#eadfce;padding:12px 40px;">
            <div style="font-weight:700;color:var(--bronze);font-size:13px;margin-bottom:8px;letter-spacing:1px;">📋 STATUS — ${p.terreno.toUpperCase()}</div>
            ${renderTopicosProjeto(p)}
          </div>
        </td>
      </tr>`;
  });
  tbody.innerHTML = html;
}

function toggleDetalhe(id) {
  const row = document.getElementById(`detail-${id}`);
  const btn = document.getElementById(`btn-${id}`);
  const isOpen = row.classList.contains('open');
  row.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.textContent = isOpen ? '+' : '−';
}

// ─── CARDS MOBILE ─────────────────────────────────────────────
function renderCards(lista) {
  const container = document.getElementById('cardsMobile');
  if (!container) return;
  container.innerHTML = lista.map(p => `
    <div class="card-projeto">
      <div class="card-projeto-header" onclick="toggleCard(${p.id})">
        <div class="card-projeto-info">
          <div class="card-projeto-nome">${p.terreno}</div>
          <div class="card-projeto-bairro">${p.bairro}</div>
          <div class="card-projeto-meta">
            ${statusTagMacro(p.statusMacro)}
            <span class="card-meta-item">${p.segmento}</span>
            <span class="card-meta-item">👤 ${p.doninho}</span>
          </div>
        </div>
        <div class="card-projeto-chevron" id="chevron-${p.id}">▼</div>
      </div>
      <div class="card-projeto-body" id="card-body-${p.id}">
        <div class="card-datas-grid">
          <div class="card-data-item">
            <div class="card-data-label">Início demolição</div>
            <div class="card-data-valor">${p.inicioDemolicao}</div>
          </div>
          <div class="card-data-item">
            <div class="card-data-label">Término demolição</div>
            <div class="card-data-valor">${p.terminoDemolicao}</div>
          </div>
          <div class="card-data-item">
            <div class="card-data-label">Início PDV</div>
            <div class="card-data-valor">${p.inicioPDV}</div>
          </div>
          <div class="card-data-item">
            <div class="card-data-label">Início obra</div>
            <div class="card-data-valor">${p.inicioObra}</div>
          </div>
        </div>
        <div class="card-topicos">
          ${["Demolição","PDV","Pré Obra","Vizinhos"].map(topico => {
            const bloco = p.detalhes && p.detalhes[topico];
            const itens = bloco ? bloco.itens : [];
            return `
              <div class="card-topico-titulo">${topico}</div>
              ${itens.map(item => `
                <div class="topico-linha-mobile">
                  <div class="topico-linha-mobile-assunto">${item.assunto}</div>
                  <div class="topico-linha-mobile-meta">
                    ${farolDot(item.farol)}
                    <span>${item.dataLimite !== '—' ? item.dataLimite : 'Sem prazo'}</span>
                    <span>${item.status !== '—' ? item.status : ''}</span>
                  </div>
                </div>`).join('')}`;
          }).join('')}
        </div>
      </div>
    </div>`).join('');
}

function toggleCard(id) {
  const body    = document.getElementById(`card-body-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  const aberto  = body.classList.contains('open');
  body.classList.toggle('open', !aberto);
  chevron.textContent = aberto ? '▼' : '▲';
}
