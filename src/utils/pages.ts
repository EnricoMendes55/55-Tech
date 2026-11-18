// Nome legível da página aberta, citado na mensagem pronta do WhatsApp ("página: Quem somos")
// para a equipe saber de onde veio o contato. Usado no build, nunca no navegador.
import { getCollection } from 'astro:content';
import { withoutBase } from './url';

const staticPages: Record<string, string> = {
  '/': 'Início',
  '/servicos/': 'Serviços',
  '/quem-somos/': 'Quem somos',
  '/contato/': 'Contato',
  '/privacidade/': 'Privacidade',
};

/** Nome da página para `pathname` (com base path), ou undefined se não houver um nome definido. */
export async function getPageName(pathname: string): Promise<string | undefined> {
  const path = withoutBase(pathname);
  if (staticPages[path]) return staticPages[path];

  const slug = path.match(/^\/servicos\/([^/]+)\/$/)?.[1];
  if (!slug) return undefined;
  const services = await getCollection('services');
  return services.find((entry) => entry.id === slug)?.data.title;
}
