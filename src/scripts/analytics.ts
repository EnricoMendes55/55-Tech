// Consentimento e Google Analytics 4.
// O GA4 só é carregado se houver um ID em src/data/site.ts E o visitante tiver aceitado.
import { site } from '../data/site';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// A chave e os valores abaixo ficam gravados no navegador dos visitantes.
// Não renomear: mudar faria a escolha já feita ser esquecida (ver CLAUDE.md, "Dados persistidos").
type ConsentChoice = 'aceito' | 'recusado';
const STORAGE_KEY = 'consentimento-analytics';
let loaded = false;

export function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'aceito' || value === 'recusado' ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sem acesso ao armazenamento (navegação privada): a escolha vale só para esta visita.
  }
}

export function loadGA4(): void {
  if (loaded || !site.ga4Id) return;
  loaded = true;

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
export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (loaded) window.gtag('event', name, params);
}
