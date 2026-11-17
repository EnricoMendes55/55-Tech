// As quatro frentes de serviço. Para mudar um texto, edite o objeto correspondente.

export interface Service {
  number: string;
  title: string;
  description: string;
  goal: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Presença digital',
    description:
      'Sites institucionais, landing pages, páginas de vendas, reformulação de sites e identidade visual digital.',
    goal: 'Apresentar melhor a empresa, transmitir confiança e gerar oportunidades.',
  },
  {
    number: '02',
    title: 'Sistemas e soluções digitais',
    description:
      'Sistemas de gestão personalizados, painéis administrativos, integrações e melhorias em aplicações existentes.',
    goal: 'Reduzir tarefas manuais, organizar informações e ganhar eficiência.',
  },
  {
    number: '03',
    title: 'Design e estratégia de produto',
    description:
      'UX/UI, estruturação de fluxos, prototipação, design systems e consultoria para transformar uma ideia em um produto digital viável.',
    goal: 'Criar algo mais útil, fácil de usar e alinhado com a operação.',
  },
  {
    number: '04',
    title: 'Performance e crescimento digital',
    description:
      'SEO técnico, Google Analytics, acompanhamento de conversões, análise de comportamento e otimização de landing pages.',
    goal: 'Entender o que funciona, encontrar problemas e melhorar os resultados do site.',
  },
];

// Oferta de entrada, exibida em destaque abaixo dos serviços.
export const auditOffer = {
  title: 'Auditoria Digital 55',
  description:
    'Uma análise do seu site atual: experiência no celular, SEO técnico básico, desempenho e oportunidades de conversão.',
  deliverables: ['Relatório com prioridades claras', 'Reunião de apresentação dos resultados'],
};
