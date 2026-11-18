// Monta o texto do pedido de orçamento que o formulário leva ao WhatsApp. Só formata texto:
// não envia nada a lugar nenhum.
import { quoteMessage } from '../data/contactForm';

export interface QuoteRequestData {
  /** Primeira linha, conforme o serviço (ver `quoteMessage.openings`). */
  opening: string;
  name: string;
  company: string;
  service: string;
  deadline: string;
  website: string;
  need: string;
  /** Nome da página onde está o formulário (ex.: "Contato"). */
  page?: string;
}

export function buildQuoteMessage(request: QuoteRequestData): string {
  const { fields, origin } = quoteMessage;
  const line = (label: string, value: string) => (value ? `${label}: ${value}` : '');
  const source = request.page ? `${origin} · página: ${request.page}` : origin;

  return [
    request.opening,
    line(fields.name, request.name),
    line(fields.company, request.company),
    line(fields.service, request.service),
    line(fields.deadline, request.deadline),
    line(fields.website, request.website),
    line(fields.need, request.need),
    `(${source})`,
  ]
    .filter(Boolean)
    .join('\n');
}
