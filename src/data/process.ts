// Etapas da contratação e da entrega, os passos depois do pedido de orçamento e os formatos de
// trabalho.

export interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: 'Conversa inicial',
    description: 'Entendemos o seu negócio, o momento da empresa e o que você precisa resolver.',
  },
  {
    title: 'Diagnóstico e proposta',
    description: 'Você recebe uma proposta com escopo, prazo e investimento definidos.',
  },
  {
    title: 'Design e desenvolvimento',
    description: 'Construímos a solução em etapas, com validações suas ao longo do caminho.',
  },
  {
    title: 'Entrega',
    description: 'Publicamos, testamos e explicamos como usar e manter o que foi entregue.',
  },
  {
    title: 'Acompanhamento',
    description: 'Se fizer sentido, seguimos com melhorias, manutenção e análise de resultados.',
  },
];

/** "O que acontece em seguida", em /contato/: do pedido de orçamento ao início do projeto. */
export const afterRequestSteps: Step[] = [
  {
    title: 'Recebemos a sua solicitação',
    description:
      'A Crislaine, do Atendimento e Sucesso do Cliente, organiza as informações e retorna para dar sequência.',
  },
  {
    title: 'Entendemos a necessidade',
    description:
      'Conversamos sobre o objetivo, o prazo desejado e o que já existe na sua empresa. As questões técnicas são avaliadas pelo Enrico, de Produto e Tecnologia.',
  },
  {
    title: 'Proposta personalizada',
    description:
      'Quando houver alinhamento, preparamos uma proposta com escopo, etapas, prazo, investimento e condições de pagamento. A negociação é conduzida pelo Dr. Michel, de Negócios.',
  },
  {
    title: 'O projeto começa',
    description:
      'O trabalho começa com a proposta aprovada, o contrato formalizado, a entrada confirmada e os materiais necessários disponíveis. A partir daí, seguimos em etapas e entregas.',
  },
];

export const workFormats = [
  {
    title: 'Projetos fechados',
    description:
      'Site, landing page, identidade visual, sistema ou aplicativo, com escopo e preço definidos.',
  },
  {
    title: 'Consultoria e otimização',
    description: 'Auditoria de site, SEO técnico, UX e analytics, por diagnóstico ou pacote.',
  },
  {
    title: 'Acompanhamento contínuo',
    description:
      'Plano mensal de melhorias, manutenção, relatórios e conversão, com escopo combinado.',
  },
];
