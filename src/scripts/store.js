import { writable } from "svelte/store";

export let currentPage = writable(0)
export let fileName1 = writable('')
export let fileName2 = writable('')
export let designername = writable('')
export let version1 = writable('')
export let version2 = writable('')
export let checkername = writable('')