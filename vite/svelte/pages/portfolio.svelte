<script>
    import Header from "../components/header.svelte";
    import Footer from "../components/footer.svelte";
</script>

<svelte:head>
    <title>Punkestu | Portfolio</title>
</svelte:head>

<Header />
<section
    id="intro"
    class="w-full md:w-2/3 flex flex-col-reverse md:flex-row gap-8 justify-between items-center mt-8"
>
    <div class="md:w-3/4">
        <h1 class="text-4xl font-bold">Punkestu</h1>
        <h2>Moch. Bima Pangestu</h2>
        <p class="text-slate-400 mt-2">
            Computer Science Entusiast, Fullstack Developer, NodeJS | Express |
            Typescript, Banyuwangi | Jember, Indonesia
        </p>
    </div>
    <img src="/public/bio.png" class="rounded-full md:w-1/4" alt="bio" />
</section>
<section id="featured" class="w-full md:w-2/3 mt-8">
    <h2 class="text-2xl font-semibold">Featured</h2>
    <div class="flex flex-col gap-4 lg:gap-0 lg:flex-row mt-2 mb-4">
        <a href="/blog/who-am-i" class="lg:w-1/2 lg:pe-2">
            <div
                class="text-center px-2 py-20 border-2 hover:shadow-lg hover:shadow-white rounded-xl text-xl duration-300"
            >
                Who am I
            </div>
        </a>
        <a href="/blog/anime-app" class="lg:w-1/2 lg:ps-2">
            <div
                class="text-center px-2 py-20 border-2 hover:shadow-lg hover:shadow-white rounded-xl text-xl duration-300"
            >
                Anime App
            </div></a
        >
    </div>
    <a href="/blogs" class="text-slate-300 hover:text-slate-200 duration-300"
        >Read all blogs &raquo;</a
    >
</section>
<Footer />
