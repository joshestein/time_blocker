import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const localStore = (key: string, initial: number) => {
	// receives the key of the local storage and an initial value
	if (!browser) return;

	const toString = (value: number) => JSON.stringify(value, null, 2); // helper function

	if (localStorage.getItem(key) === null) {
		// item not present in local storage
		localStorage.setItem(key, toString(initial)); // initialize local storage with initial value
	}

	const saved = JSON.parse(localStorage.getItem(key)!); // convert to object

	const { subscribe, set, update } = writable(saved); // create the underlying writable store

	return {
		subscribe,
		set: (value: number) => {
			localStorage.setItem(key, toString(value)); // save also to local storage as a string
			return set(value);
		},
		update
	};
};
