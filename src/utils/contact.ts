import { site } from '../data/site';
import { url } from './url';

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;

export function getWhatsAppUrl(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${site.whatsapp}${text}`;
}

interface DirectContact {
  label: string;
  /** Nome do canal, para frases como "ou fale direto pelo WhatsApp". */
  channel: 'WhatsApp' | 'Instagram';
  href: string;
  event: string;
}

const instagramContact: DirectContact = {
  label: 'Falar no Instagram',
  channel: 'Instagram',
  href: instagramUrl,
  event: 'instagram_click',
};

function whatsAppContact(message: string): DirectContact {
  return {
    label: 'Falar no WhatsApp',
    channel: 'WhatsApp',
    href: getWhatsAppUrl(message),
    event: 'whatsapp_click',
  };
}

/**
 * Contato direto (alternativa ao pedido de orçamento): WhatsApp quando houver número, Instagram
 * enquanto não houver. A mensagem pronta cita a página de origem, quando ela tiver nome.
 */
export function getDirectContact(pageName?: string): DirectContact {
  if (!site.whatsapp) return instagramContact;
  const origin = pageName ? ` (página: ${pageName})` : '';
  return whatsAppContact(`Olá! Vim pelo site da 55 Tech${origin} e gostaria de conversar.`);
}

/** Contato direto com a mensagem do WhatsApp já citando o assunto (ex.: o nome do serviço). */
export function getContactAbout(subject: string): DirectContact {
  if (!site.whatsapp) return instagramContact;
  return whatsAppContact(`Olá! Vim pelo site da 55 Tech e quero conversar sobre ${subject}.`);
}

/** Ação principal do site: pedir um orçamento pelo formulário de contato. */
export const quoteRequest = {
  label: 'Solicitar orçamento',
  /** Rótulo visível no cabeçalho em telas estreitas; o nome acessível continua `label`. */
  shortLabel: 'Orçamento',
  event: 'quote_request_click',
  /** Rótulo do mesmo pedido quando o assunto é a Auditoria Digital 55. */
  auditLabel: 'Solicitar a Auditoria',
};

/** Valor de `?servico=` que seleciona "Mais de um serviço (solução integrada)" no formulário. */
export const integratedSolutionSlug = 'solucao-integrada';

/**
 * Link para o formulário de orçamento. `serviceId` (nome do arquivo do serviço ou
 * `integratedSolutionSlug`) chega como `?servico=` e deixa o assunto já selecionado.
 * Na home, o formulário é a seção #contato da própria página. Sem WhatsApp não há formulário,
 * então o link leva à página de contato, que mostra os outros canais.
 */
export function getQuoteHref(serviceId?: string, { onHome = false } = {}): string {
  if (!site.whatsapp) return url('/contato/');
  const query = serviceId ? `?servico=${serviceId}` : '';
  return onHome ? url(`/${query}#contato`) : url(`/contato/${query}#formulario`);
}
