// ─────────────────────────────────────────────────────────────
// MODELO DE CHECKLIST – separado dos projetos
// Futuramente pode vir de: dados/checklists.json via fetch()
// ─────────────────────────────────────────────────────────────
function criarModeloDetalhes() {
  return {
    "Demolição": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Visita + Orçamentos Demolição",                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Boas Vindas",                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de vizinhos (contratação e realizado)",      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ronda / Portaria",                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Contratação demolidora",                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Contratação tapume demolição",                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Documentação LCR",                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Demanda Entrada de Energia Obra",                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Solicitação Orçamentos LCR",                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Posses (farol por lote + link QF)",                farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Supressões",                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Energia",                               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Água",                                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Esgoto",                                farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação Acréscimo de Obra",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Acréscimo de Energia",                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Entrada de Energia de Obra",                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Remediação",                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Demolição",                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "ART",                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Placa de Obra",                                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PCA",                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Plano de Demolição",                               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Certificado de Britagem",                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Início demolição",                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Chapisco + Canaleta",                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Relatório final de visita MA (pós demo)",          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Plani Pós Demo",                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pendências",                                       farol: "a", dataLimite: "—", status: "—" }
      ]
    },
    "PDV": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Sinal",                                                                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Cronograma Projetos Stand",                                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Projetos Stand (Cronograma, Param., EST, FUN, ELE, HID, STAND, DEC, MINI EXEC)", farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Kick off",                                                                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pasta de obra",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Stand",              farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",             farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Cyrela",                   farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Empreiteira",              farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Segurança do Trabalho",    farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",               farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "Placa de Obra",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PCA",                                                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ar Condicionado (Croqui e Orçamento)",                                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Escopo",                                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Marcenaria (Croqui e Orçamento)",                                                farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pisos (Stand e Backoffice)",                                                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Quintal urbano",                                                                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Checklist",                                                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Concessionárias",                                                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Tapume",                                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Portaria",                                                                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Taludes",                                                                farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Estrutura",                                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Estanqueidade",                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Telhados",                                                               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo Corante",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Aditivo",                                                                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pendências",                                                                      farol: "a", dataLimite: "—", status: "—" }
      ]
    },
    "Pré Obra": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Tapume de obra",                                                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Projeto de Canteiro",                                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Custo planejado para tapume",                                                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Validação Eng. Obra",                                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Solicitação do orçamento e programação da instalação e envelopamento",                                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Desmobilização (AC, Marcenaria)",                                                                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Demolição stand (contratação e programação)",                                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pasta de obra",                                                                                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",          farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Empreiteira",           farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Segurança do Trabalho", farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                                                                                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                                                                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",            farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "TCA",                                                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Certificado de Britagem",                                                                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Concessionária",                                                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Relatório de vizinhos",                                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Manejo Arbóreo",                                                                                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Passagem de obra (FVS, Drone, Fotos, Validação Plani Pós Demo, Rel. vizinhos, e-mail)",                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pendências",                                                                                              farol: "a", dataLimite: "—", status: "—" }
      ]
    },
    "Vizinhos": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Descrição do Caso",                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Formalização da reclamação (e-mail e telefone)",        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Abertura do sinistro junto à EPL + Envio Documentação", farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Vistoria do Perito + Fornecedores",                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Orçamentos",                                            farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Análise da Seguradora",                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Assinatura da Minuta Inicial",                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Início dos Serviços / Reembolso",                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Assinatura da Minuta Final",                            farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Reembolso EPL",                                         farol: "a", dataLimite: "—", status: "—" }
      ]
    }
  };
}

// ─────────────────────────────────────────────────────────────
// PROJETOS
// ─────────────────────────────────────────────────────────────
var projetos = [
  {
    id: 1, terreno: "Ouvidor Peleja", bairro: "Vila Mariana",
    statusMacro: "Lançado", segmento: "Padrão",
    doninho: "Denis Pimentel",
    statusExecucao: "Em andamento",
    posseLotes: "01/10/2024", inicioDemolicao: "05/10/2024", terminoDemolicao: "20/11/2024",
    inicioPDV: "10/12/2024", finalizacaoPDV: "15/01/2025",
    meeting: "28/01/2026", demolicaoPDV: "05/02/2026",
    inicioPreObra: "10/02/2026", inicioObra: "21/02/2026",
    anoLancamento: 2026, ganttInicio: 1, ganttFim: 2,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 2, terreno: "Rua Butantã", bairro: "Pinheiros",
    statusMacro: "Lançado", segmento: "Full",
    doninho: "Giulia Oliveira",
    statusExecucao: "Não iniciado",
    posseLotes: "08/02/2024", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "06/04/2026", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "18/04/2026",
    anoLancamento: 2026, ganttInicio: 3, ganttFim: 4,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 3, terreno: "Fernandes Moreira II", bairro: "Chácara S. Antônio",
    statusMacro: "Lançado", segmento: "Full",
    doninho: "Akemi Yoshikawa",
    statusExecucao: "Finalizado",
    posseLotes: "06/12/2023", inicioDemolicao: "10/01/2024", terminoDemolicao: "28/02/2024",
    inicioPDV: "05/03/2024", finalizacaoPDV: "20/04/2024",
    meeting: "23/04/2026", demolicaoPDV: "25/04/2026",
    inicioPreObra: "01/05/2026", inicioObra: "16/05/2026",
    anoLancamento: 2026, ganttInicio: 4, ganttFim: 5,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 4, terreno: "Chicago", bairro: "Brooklin",
    statusMacro: "Lançado", segmento: "Padrão",
    doninho: "Denis Pimentel",
    statusExecucao: "Em andamento",
    posseLotes: "15/03/2024", inicioDemolicao: "20/03/2024", terminoDemolicao: "30/04/2024",
    inicioPDV: "10/05/2024", finalizacaoPDV: "30/05/2024",
    meeting: "20/05/2026", demolicaoPDV: "01/06/2026",
    inicioPreObra: "05/06/2026", inicioObra: "14/06/2026",
    anoLancamento: 2026, ganttInicio: 5, ganttFim: 6,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 5, terreno: "Guaratuba", bairro: "Conceição",
    statusMacro: "Previsto", segmento: "Padrão",
    doninho: "Denis Pimentel",
    statusExecucao: "Não iniciado",
    posseLotes: "—", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "—", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "Set/2026",
    anoLancamento: 2026, ganttInicio: 8, ganttFim: 8,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 6, terreno: "Antônio das Chagas", bairro: "Chácara S. Antônio",
    statusMacro: "Previsto", segmento: "Full",
    doninho: "Akemi Yoshikawa",
    statusExecucao: "Em andamento",
    posseLotes: "—", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "—", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "Out/2026",
    anoLancamento: 2026, ganttInicio: 9, ganttFim: 9,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 7, terreno: "Canário Moema", bairro: "Moema",
    statusMacro: "Previsto", segmento: "Full",
    doninho: "Giulia Oliveira",
    statusExecucao: "Não iniciado",
    posseLotes: "—", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "—", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "Nov/2026",
    anoLancamento: 2026, ganttInicio: 10, ganttFim: 10,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 8, terreno: "Dona Inácia Uchôa I", bairro: "Vila Mariana",
    statusMacro: "Previsto", segmento: "Padrão",
    doninho: "Denis Pimentel",
    statusExecucao: "Em andamento",
    posseLotes: "—", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "—", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "Dez/2026",
    anoLancamento: 2026, ganttInicio: 11, ganttFim: 12,
    detalhes: criarModeloDetalhes()
  },
  {
    id: 9, terreno: "Otávio Tarquínio", bairro: "Campo Belo",
    statusMacro: "Coringa", segmento: "Full",
    doninho: "Giulia Oliveira",
    statusExecucao: "Não iniciado",
    posseLotes: "—", inicioDemolicao: "—", terminoDemolicao: "—",
    inicioPDV: "—", finalizacaoPDV: "—",
    meeting: "—", demolicaoPDV: "—",
    inicioPreObra: "—", inicioObra: "Jan/2027",
    anoLancamento: 2027, ganttInicio: 11, ganttFim: 12,
    isCoringa: true,
    detalhes: criarModeloDetalhes()
  }
];
