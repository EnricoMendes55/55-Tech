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
  tagline: 'Tecnologia que faz negócios evoluírem.',
  description:
    'Estratégia, design e desenvolvimento para empresas que querem crescer com soluções digitais melhores.',
  whatsapp: '5548991777530',
  email: '',
  instagram: '55.tech',
  ga4Id: '',
};

interface NavigationItem {
  label: string;
  /**
   * Caminho sem o base path. Âncora na página inicial ('/#servicos') ou página ('/servicos/').
   * Faz parte da URL pública, por isso continua em português.
   */
  path: string;
}

export const navigation: NavigationItem[] = [
  { label: 'Serviços', path: '/servicos/' },
  { label: 'Projetos', path: '/#projetos' },
  { label: 'Processo', path: '/#processo' },
  { label: 'Sobre', path: '/quem-somos/' },
  { label: 'Contato', path: '/contato/' },
];
