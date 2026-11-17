// Informações gerais do site. Tudo que é "dado da empresa" fica aqui.

interface Site {
  name: string;
  tagline: string;
  description: string;
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
  name: '55 Tech',
  tagline: 'Tecnologia que faz seu negócio evoluir.',
  description:
    'Estratégia, design e desenvolvimento para empresas que querem crescer com soluções digitais melhores.',
  whatsapp: '5548991777530',
  email: '',
  instagram: '55.tech',
  ga4Id: '',
};

// `anchor` é o id da seção na página inicial e faz parte da URL pública (ex.: /#servicos),
// por isso continua em português.
export const navigation = [
  { label: 'Serviços', anchor: 'servicos' },
  { label: 'Projetos', anchor: 'projetos' },
  { label: 'Processo', anchor: 'processo' },
  { label: 'Sobre', anchor: 'sobre' },
  { label: 'Contato', anchor: 'contato' },
];
