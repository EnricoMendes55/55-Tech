import { site } from '../data/site';

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;

export function getWhatsAppUrl(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${site.whatsapp}${text}`;
}

// Botão principal de contato: WhatsApp quando houver número, Instagram enquanto não houver.
export const primaryContact = site.whatsapp
  ? {
      label: 'Falar no WhatsApp',
      href: getWhatsAppUrl('Olá! Vim pelo site da 55 Tech e gostaria de conversar.'),
      event: 'whatsapp_click',
    }
  : { label: 'Falar no Instagram', href: instagramUrl, event: 'instagram_click' };
