// Contador do campo "O que você precisa e qual é o objetivo?". Usado no build (texto inicial) e
// no navegador. Conta caracteres como a pessoa os vê: um emoji ou uma letra acentuada é 1.
import { contactForm } from '../data/contactForm';

const { needLimit, counter } = contactForm;

/** 2000 → "2.000". Sem depender do idioma configurado no navegador. */
const formatNumber = (value: number) => String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const fill = (template: string, n: number) =>
  template.replace('{n}', formatNumber(n)).replace('{max}', formatNumber(needLimit));

export function countCharacters(value: string): number {
  return [...value.replace(/\r\n/g, '\n')].length;
}

export function isOverLimit(value: string): boolean {
  return countCharacters(value) > needLimit;
}

export function counterText(value: string): string {
  const left = needLimit - countCharacters(value);
  if (left === 1) return fill(counter.remainingOne, left);
  if (left >= 0) return fill(counter.remaining, left);
  return fill(left === -1 ? counter.overOne : counter.over, -left);
}

export const tooLongError = fill(contactForm.errors.tooLong, 0);
