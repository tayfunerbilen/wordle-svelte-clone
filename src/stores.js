import { writable } from 'svelte/store';
import words from "./words";

// olası mesajlar için
export const message = writable(false);

// kaç sütundan oluşacağı
export const cols = writable(5);

// kaç satırdan oluşacağı
export const rows = writable(6);

// kaçıncı satırda
export const current = writable(0);

// tüm kelimeler
export const allWords = writable(words)

// seçilen rastgele kelime
export const randomWord = writable(words[5][Math.floor(Math.random() * words[5].length)].split(''))

// yazılan kelimeler
export const currentWords = writable([]);

// yazılan mevcut kelime
export const currentWord = writable([]);

// açık mod
export const lightMode = writable(false)

export const modal = writable(false)

export const win = writable(false)
export const lose = writable(false)
