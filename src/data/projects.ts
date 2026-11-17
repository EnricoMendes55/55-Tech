// Cards da seção "Projetos & Experimentos".
// Adicionar um projeto = adicionar um objeto à lista. Remover = apagar o objeto.
// Quando um projeto for publicado, troque o status para 'published' e preencha `link`.

export interface Project {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  status: 'in-progress' | 'published';
  /** Endereço do projeto ou do estudo de caso. Só aparece quando o status é 'published'. */
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Site institucional',
    type: 'Projeto conceitual',
    description:
      'Um site moderno e responsivo para uma empresa fictícia, do design ao desenvolvimento.',
    highlights: ['Design responsivo', 'Desenvolvimento web', 'Boas práticas de SEO'],
    status: 'in-progress',
  },
  {
    title: 'Sistema de gestão',
    type: 'Aplicação demonstrativa',
    description:
      'Um painel para pequenos negócios, com foco em usabilidade e organização de processos.',
    highlights: ['Dashboard', 'Usabilidade', 'Organização de processos'],
    status: 'in-progress',
  },
  {
    title: 'Landing page',
    type: 'Projeto conceitual',
    description:
      'Uma página focada em conversão de leads, com atenção à experiência, performance e medição.',
    highlights: ['Conversão de leads', 'Performance', 'Analytics'],
    status: 'in-progress',
  },
];
