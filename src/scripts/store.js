import { writable } from "svelte/store";

// App State
export let currentPage = writable(0)
export let fileName1 = writable('')
export let fileName2 = writable('')

// Infomation
export let designername = writable('')
export let version1 = writable('')
export let version2 = writable('')
export let checkername = writable('')

// Insertion Data
export let _Compare = writable({})
export let insertData1 = writable([]) 
export let insertData2 = writable([]) 

