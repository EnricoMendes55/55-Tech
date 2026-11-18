// Textos do formulário de orçamento e da mensagem que ele prepara para o WhatsApp.
// Mudar um texto aqui muda o formulário da home e o de /contato/.

export const contactForm = {
  labels: {
    name: 'Nome',
    company: 'Empresa',
    service: 'Serviço de interesse',
    need: 'O que você precisa e qual é o objetivo?',
    deadline: 'Prazo desejado',
    website: 'Site ou rede social atual',
  },
  /** Acrescentado ao rótulo dos campos opcionais. */
  optional: '(opcional)',
  servicePlaceholder: 'Selecione uma opção',
  /** Opções do serviço além dos serviços e da Auditoria, que vêm de src/content/services/. */
  integratedSolution: 'Mais de um serviço (solução integrada)',
  unsure: 'Ainda não sei',
  /** Máximo de caracteres do campo de necessidade. Acima disso o envio é bloqueado (nada é cortado). */
  needLimit: 2000,
  needPlaceholder:
    'Ex.: queremos um site para apresentar a empresa e receber pedidos de orçamento.',
  deadlinePlaceholder: 'Selecione (opcional)',
  deadlines: ['O quanto antes', 'Nos próximos 3 meses', 'Em mais de 3 meses', 'Ainda não sei'],
  websitePlaceholder: 'Ex.: suaempresa.com.br',
  /** Só orienta: o campo continua opcional, inclusive para a Auditoria. */
  websiteHint: 'Se estiver solicitando a Auditoria Digital 55, informe o endereço do site.',
  submit: 'Continuar no WhatsApp',
  note: 'Ao continuar, o WhatsApp abre com sua mensagem pronta para revisão e envio. O formulário não envia automaticamente seus dados à 55 Tech.',
  errors: {
    required: 'Preencha este campo.',
    select: 'Selecione uma opção.',
    /** {max} é trocado pelo limite, já formatado (ex.: 2.000). */
    tooLong: 'Use no máximo {max} caracteres.',
  },
  /** Contador do campo de necessidade; {n} e {max} são trocados pelos números formatados. */
  counter: {
    remaining: 'Restam {n} de {max} caracteres.',
    remainingOne: 'Resta 1 de {max} caracteres.',
    over: '{n} caracteres acima do limite de {max}.',
    overOne: '1 caractere acima do limite de {max}.',
  },
};

/** Mensagem pronta: a primeira linha depende do serviço escolhido; campos vazios não aparecem. */
export const quoteMessage = {
  openings: {
    default: 'Olá! Gostaria de solicitar um orçamento.',
    audit: 'Olá! Gostaria de solicitar a Auditoria Digital 55.',
    unsure: 'Olá! Gostaria de ajuda para entender qual solução faz sentido para a minha empresa.',
  },
  fields: {
    name: 'Nome',
    company: 'Empresa',
    service: 'Serviço',
    deadline: 'Prazo desejado',
    website: 'Site atual',
    need: 'Necessidade e objetivo',
  },
  /** Última linha, entre parênteses; recebe " · página: {nome}" quando a página tem nome. */
  origin: 'Enviado pelo formulário do site',
};
