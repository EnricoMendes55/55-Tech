// Acesso à coleção de serviços (src/content/services). Usado no build, nunca no navegador.
import { getCollection, type CollectionEntry } from 'astro:content';

export type ServiceEntry = CollectionEntry<'services'>;

const byOrder = (a: ServiceEntry, b: ServiceEntry) => a.data.order - b.data.order;

/** Os serviços principais, na ordem de exibição. */
export async function getServices(): Promise<ServiceEntry[]> {
  const entries = await getCollection('services', (entry) => entry.data.kind === 'service');
  return entries.sort(byOrder);
}

/** A oferta de entrada (Auditoria Digital 55). */
export async function getAuditOffer(): Promise<ServiceEntry> {
  const [audit] = await getCollection('services', (entry) => entry.data.kind === 'audit');
  if (!audit) throw new Error('Nenhum arquivo com `kind: audit` em src/content/services.');
  return audit;
}

/** Os serviços indicados em `combinesWith`, na ordem em que foram listados no arquivo. */
export async function getCombinedServices(entry: ServiceEntry): Promise<ServiceEntry[]> {
  const services = await getServices();
  return entry.data.combinesWith.flatMap(({ id }) =>
    services.filter((service) => service.id === id),
  );
}

/** Caminho da página do serviço, sem o base path. Passe por url() antes de usar num link. */
export function servicePath(entry: ServiceEntry): string {
  return `/servicos/${entry.id}/`;
}
