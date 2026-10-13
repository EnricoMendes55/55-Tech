// Consentimento e Google Analytics 4.
// O GA4 só é carregado se houver um ID em src/data/site.ts E o visitante tiver aceitado.
import { site } from '../data/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

type Escolha = 'aceito' | 'recusado';
const CHAVE = 'consentimento-analytics';
let carregado = false;

export function lerEscolha(): Escolha | null {
  try {
    const valor = localStorage.getItem(CHAVE);
    return valor === 'aceito' || valor === 'recusado' ? valor : null;
  } catch {
    return null;
  }
}

export function salvarEscolha(escolha: Escolha): void {
  try {
    localStorage.setItem(CHAVE, escolha);
  } catch {
    // Sem acesso ao armazenamento (navegação privada): a escolha vale só para esta visita.
  }
}

export function carregarGA4(): void {
  if (carregado || !site.ga4Id) return;
  carregado = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // O gtag espera o objeto `arguments`, não um array.
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', site.ga4Id);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`;
  document.head.append(script);
}

/** Envia um evento de conversão. Não faz nada se o GA4 não estiver carregado. */
export function registrarEvento(nome: string, parametros: Record<string, string> = {}): void {
  if (carregado) window.gtag('event', nome, parametros);
}
