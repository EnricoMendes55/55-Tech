// As quatro frentes de serviço. Para mudar um texto, edite o objeto correspondente.

export interface Servico {
  numero: string;
  titulo: string;
  descricao: string;
  objetivo: string;
}

export const servicos: Servico[] = [
  {
    numero: '01',
    titulo: 'Presença digital',
    descricao:
      'Sites institucionais, landing pages, páginas de vendas, reformulação de sites e identidade visual digital.',
    objetivo: 'Apresentar melhor a empresa, transmitir confiança e gerar oportunidades.',
  },
  {
    numero: '02',
    titulo: 'Sistemas e soluções digitais',
    descricao:
      'Sistemas de gestão personalizados, painéis administrativos, integrações e melhorias em aplicações existentes.',
    objetivo: 'Reduzir tarefas manuais, organizar informações e ganhar eficiência.',
  },
  {
    numero: '03',
    titulo: 'Design e estratégia de produto',
    descricao:
      'UX/UI, estruturação de fluxos, prototipação, design systems e consultoria para transformar uma ideia em um produto digital viável.',
    objetivo: 'Criar algo mais útil, fácil de usar e alinhado com a operação.',
  },
  {
    numero: '04',
    titulo: 'Performance e crescimento digital',
    descricao:
      'SEO técnico, Google Analytics, acompanhamento de conversões, análise de comportamento e otimização de landing pages.',
    objetivo: 'Entender o que funciona, encontrar problemas e melhorar os resultados do site.',
  },
];

// Oferta de entrada, exibida em destaque abaixo dos serviços.
export const auditoria = {
  titulo: 'Auditoria Digital 55',
  descricao:
    'Uma análise do seu site atual: experiência no celular, SEO técnico básico, desempenho e oportunidades de conversão.',
  entregas: ['Relatório com prioridades claras', 'Reunião de apresentação dos resultados'],
};
