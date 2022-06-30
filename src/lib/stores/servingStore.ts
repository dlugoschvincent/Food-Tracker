import { writable } from 'svelte/store';
import type { definitions } from 'types/database';

export const servings = writable<(definitions['UserAteFood'] & { Food: definitions['Food'] })[]>();
