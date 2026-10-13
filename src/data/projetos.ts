// Cards da seção "Projetos & Experimentos".
// Adicionar um projeto = adicionar um objeto à lista. Remover = apagar o objeto.
// Quando um projeto for publicado, troque o status para 'publicado' e preencha `link`.

export interface Projeto {
  titulo: string;
  tipo: string;
  descricao: string;
  destaques: string[];
  status: 'em-desenvolvimento' | 'publicado';
  /** Endereço do projeto ou do estudo de caso. Só aparece quando o status é 'publicado'. */
  link?: string;
}

export const projetos: Projeto[] = [
  {
    titulo: 'Site institucional',
    tipo: 'Projeto conceitual',
    descricao:
      'Um site moderno e responsivo para uma empresa fictícia, do design ao desenvolvimento.',
    destaques: ['Design responsivo', 'Desenvolvimento web', 'Boas práticas de SEO'],
    status: 'em-desenvolvimento',
  },
  {
    titulo: 'Sistema de gestão',
    tipo: 'Aplicação demonstrativa',
    descricao:
      'Um painel para pequenos negócios, com foco em usabilidade e organização de processos.',
    destaques: ['Dashboard', 'Usabilidade', 'Organização de processos'],
    status: 'em-desenvolvimento',
  },
  {
    titulo: 'Landing page',
    tipo: 'Projeto conceitual',
    descricao:
      'Uma página focada em conversão de leads, com atenção à experiência, performance e medição.',
    destaques: ['Conversão de leads', 'Performance', 'Analytics'],
    status: 'em-desenvolvimento',
  },
];
