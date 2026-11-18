// Equipe da 55 Tech, exibida em /quem-somos/. Só informações fornecidas e autorizadas pela empresa:
// não acrescentar formação, certificações ou experiências sem confirmação.

interface TeamMember {
  name: string;
  /** Iniciais exibidas no lugar da foto, enquanto não houver fotografia real. */
  initials: string;
  role: string;
  description: string;
}

export const teamSection = {
  eyebrow: 'Equipe',
  title: 'As pessoas por trás de cada projeto.',
};

export const team: TeamMember[] = [
  {
    name: 'Enrico Mendes',
    initials: 'EM',
    role: 'CEO · Produto e Tecnologia',
    description:
      'Responsável pela direção de produto e tecnologia, desenvolvimento, qualidade e entrega das soluções.',
  },
  {
    name: 'Dr. Michel Balvedi',
    initials: 'MB',
    role: 'Sócio · Negócios',
    description:
      'Responsável pelo desenvolvimento de negócios, networking, relacionamento comercial, prospecção e vendas.',
  },
  {
    name: 'Crislaine Mendes Vienhage',
    initials: 'CM',
    role: 'Atendimento e Sucesso do Cliente',
    description:
      'Responsável pelo atendimento administrativo, relacionamento com clientes, acompanhamento e suporte.',
  },
];
