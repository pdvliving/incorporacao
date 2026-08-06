// ─────────────────────────────────────────────────────────────
// MODELO DE CHECKLIST — separado dos projetos
// Futuramente pode vir de: dados/checklists.json via fetch()
// ─────────────────────────────────────────────────────────────
function criarModeloDetalhes() {
  return {
    "Demolição": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Visita + Orçamentos Demolição",           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de Boas Vindas",                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Laudo de vizinhos (contratação e realizado)", farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ronda / Portaria",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Contratação demolidora",                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Contratação tapume demolição",            farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Documentação LCR",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Demanda Entrada de Energia Obra",         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Solicitação Orçamentos LCR",              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Posses (farol por lote + link QF)",       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Supressões",                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Energia",                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Água",                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação de Esgoto",                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Ligação Acréscimo de Obra",               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Acréscimo de Energia",                    farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Entrada de Energia de Obra",              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Remediação",                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Demolição",                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "ART",                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Placa de Obra",                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PCA",                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Plano de Demolição",                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Certificado de Britagem",                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Início demolição",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Chapisco + Canaleta",                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Relatório final de visita MA (pós demo)", farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Plani Pós Demo",                          farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pendências",                              farol: "a", dataLimite: "—", status: "—" }
      ]
    },
    "PDV": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Sinal",                                                                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Cronograma Projetos Stand",                                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Projetos Stand (Cronograma, Param., EST, FUN, ELE, HID, STAND, DEC, MINI EXEC)",  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Kick off",                                                                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pasta de obra",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Stand",        farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",       farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Cyrela",             farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Empreiteira",        farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Segurança do Trabalho", farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                                                                   farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",         farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
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
        { assunto: "Tapume de obra",                                                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Projeto de Canteiro",                                                                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Custo planejado para tapume",                                                                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Validação Eng. Obra",                                                                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Solicitação do orçamento e programação da instalação e envelopamento",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Desmobilização (AC, Marcenaria)",                                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Demolição stand (contratação e programação)",                                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pasta de obra",                                                                               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Alvará de Tapume",          farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Empreiteira",           farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "ART Segurança do Trabalho", farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "PGRCC inicial",                                                                               farol: "a", dataLimite: "—", status: "—" },
        { assunto: "PGRCC final",                                                                                 farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Seguro de Obra",            farol: "a", farolVenc: true, dataLimite: "—", status: "—" },
        { assunto: "TCA",                                                                                         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Certificado de Britagem",                                                                     farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Concessionária",                                                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Relatório de vizinhos",                                                                       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Manejo Arbóreo",                                                                              farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Passagem de obra (FVS, Drone, Fotos, Validação Plani Pós Demo, Rel. vizinhos, e-mail)",       farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Pendências",                                                                                   farol: "a", dataLimite: "—", status: "—" }
      ]
    },
    "Vizinhos": {
      dataInicio: "—", dataFim: "—",
      itens: [
        { assunto: "Descrição do Caso",                                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Formalização da reclamação (e-mail e telefone)",         farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Abertura do sinistro junto à EPL + Envio Documentação",  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Vistoria do Perito + Fornecedores",                      farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Orçamentos",                                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Análise da Seguradora",                                  farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Assinatura da Minuta Inicial",                           farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Início dos Serviços / Reembolso",                        farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Assinatura da Minuta Final",                             farol: "a", dataLimite: "—", status: "—" },
        { assunto: "Reembolso EPL",                                          farol: "a", dataLimite: "—", status: "—" }
      ]
    }
  };
}
