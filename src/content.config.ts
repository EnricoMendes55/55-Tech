// Schemas das coleções de conteúdo. O build falha se algum arquivo tiver campo faltando ou errado.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Um arquivo Markdown por serviço em src/content/services/. O nome do arquivo vira a URL:
// presenca-digital.md → /servicos/presenca-digital/ (URL pública: não renomear sem redirecionamento).
const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z
    .object({
      /** 'service' = uma das frentes; 'audit' = a oferta de entrada (Auditoria Digital 55). */
      kind: z.enum(['service', 'audit']),
      /** Ordem de exibição entre os serviços. */
      order: z.number().int(),
      /** Número exibido no card ('01'...). Obrigatório para kind 'service'. */
      number: z
        .string()
        .regex(/^\d{2}$/)
        .optional(),
      title: z.string(),
      /** Resumo curto, usado no card e no topo da página do serviço. */
      summary: z.string(),
      /** Objetivo do cliente com o serviço. */
      goal: z.string(),
      /** Descrição para buscadores e compartilhamento (até 160 caracteres). */
      seoDescription: z.string().max(160),
      /** Entregas em destaque (usado pela auditoria). */
      deliverables: z.array(z.string()).default([]),
    })
    .refine((data) => data.kind === 'audit' || data.number, {
      message: 'Serviços precisam de `number`.',
      path: ['number'],
    }),
});

export const collections = { services };
