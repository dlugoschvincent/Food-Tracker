import { writable } from 'svelte/store';

import { browser } from '$app/env';
const localStorageItem = browser ? sessionStorage.getItem('selectedDate') : null;
const initialValue = localStorageItem ? new Date(localStorageItem) : new Date();

export const selectedDate = writable<Date>(initialValue);

selectedDate.subscribe((date) => {
  if (browser) sessionStorage.setItem('selectedDate', date.toISOString());
});
