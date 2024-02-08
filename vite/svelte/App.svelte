<script>
    import { Router, Route } from "svelte-routing";
    import Portfolio from "./pages/portfolio.svelte";
    import Blog from "./pages/blog.svelte";
    import Notfound from "./pages/notfound.svelte";
</script>

<Router url="">
    <Route path="/portfolio"><Portfolio /></Route>
    <Route path="/blog/:slug" let:params><Blog slug={params.slug} /></Route>
    <Route><Notfound /></Route>
</Router>
