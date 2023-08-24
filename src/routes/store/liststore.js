import { writable } from "svelte/store";

let listArr = [{title:"demo",desc:"demo"}];

export const listStore = writable(listArr);

// in store creating an array of objects contains the title,descrition  -->
