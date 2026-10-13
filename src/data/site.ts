// Informações gerais do site. Tudo que é "dado da empresa" fica aqui.

interface Site {
  nome: string;
  slogan: string;
  descricao: string;
  /** Só dígitos, com DDI e DDD. Ex.: '5551999999999'. Vazio = botões usam o Instagram e o formulário some. */
  whatsapp: string;
  /** Vazio = o e-mail não aparece no site. */
  email: string;
  /** Usuário do Instagram, sem @. */
  instagram: string;
  /** ID de medição do GA4 (G-XXXXXXXXXX). Vazio = sem analytics e sem banner de cookies. */
  ga4Id: string;
}

export const site: Site = {
  nome: '55 Tech',
  slogan: 'Tecnologia que faz seu negócio evoluir.',
  descricao:
    'Estratégia, design e desenvolvimento para empresas que querem crescer com soluções digitais melhores.',
  whatsapp: '',
  email: '',
  instagram: '55.tech',
  ga4Id: '',
};

export const menu = [
  { rotulo: 'Serviços', ancora: 'servicos' },
  { rotulo: 'Projetos', ancora: 'projetos' },
  { rotulo: 'Processo', ancora: 'processo' },
  { rotulo: 'Sobre', ancora: 'sobre' },
  { rotulo: 'Contato', ancora: 'contato' },
];
