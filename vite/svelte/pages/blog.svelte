<script>
    export let slug;
    import { marked } from "marked";
    import { onMount } from "svelte";
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
    import { apiData, state, blogData } from "../utils/blog.store";
    onMount(async () => {
        await fetch(`/api/v1/blogs/${slug}`)
            .then((res) => {
                if (res.status === 404) {
                    state.set("not found");
                    return;
                } else if (res.status !== 200) {
                    state.set("error");
                    return;
                }
                state.set("success");
                return res.json();
            })
            .then((data) => {
                apiData.set(data);
            });
    });
</script>

<Header />
<section id="content" class="w-full md:w-2/3 mt-8">
    {#if $state !== "success"}
        <div class="w-full h-[80vh] flex justify-center items-center">
            {#if $state === "not found"}
                ⚠️ Blog Not Found
            {:else if $state === "error"}
                🤯 Error
            {/if}
        </div>
    {/if}
    {#if $blogData}
        <div class="w-full h-64 mb-2 bg-slate-700">
            <img
                src={$blogData.thumbnail}
                alt="thumbnail"
                class="w-full h-full object-cover object-center"
            />
        </div>
        <h1 class="text-4xl font-bold">{$blogData.title}</h1>
        <p class="text-slate-400">| {$blogData.postAt}</p>
        <hr class="my-4" />
        <div class="text-justify w-full">
            {@html marked($blogData.body)}
        </div>
    {/if}
</section>
<Footer />
