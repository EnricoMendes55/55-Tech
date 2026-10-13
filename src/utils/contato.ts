import { site } from '../data/site';

export const linkInstagram = `https://www.instagram.com/${site.instagram}/`;

export function linkWhatsapp(mensagem?: string): string {
  const texto = mensagem ? `?text=${encodeURIComponent(mensagem)}` : '';
  return `https://wa.me/${site.whatsapp}${texto}`;
}

// Botão principal de contato: WhatsApp quando houver número, Instagram enquanto não houver.
export const contatoPrincipal = site.whatsapp
  ? {
      rotulo: 'Falar no WhatsApp',
      href: linkWhatsapp('Olá! Vim pelo site da 55 Tech e gostaria de conversar.'),
      evento: 'clique_whatsapp',
    }
  : { rotulo: 'Falar no Instagram', href: linkInstagram, evento: 'clique_instagram' };
