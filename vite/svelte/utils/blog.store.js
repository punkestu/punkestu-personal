import { writable, derived } from "svelte/store";

export const apiData = writable({title: "", body: "", postAt: "", thumbnail: ""});
export const state = writable("fetch");
export const blogData = derived(apiData, ($apiData) => {
    if ($apiData) {
        if (
            $apiData.title &&
            $apiData.body &&
            $apiData.postAt &&
            $apiData.thumbnail
        ) {
            return $apiData;
        }
    }
    return null;
});