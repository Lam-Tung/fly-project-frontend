<!-- SCRIPT -->
<script>
    import '../i18n';
    import Navbar from "./lib/Navbar.svelte";
    import { isLoading } from 'svelte-i18n';
    import '../styles/app.scss';
</script>

<!-- HTML -->
<!-- svelte-ignore empty-block -->
{#if $isLoading}
{:else}
<div class="app-container">
    <Navbar />
    <slot />
</div>
{/if}

<!-- STYLING -->
<style global lang="scss">
    @import '../styles/app.scss';

    .app-container {
        display: flex;
    }
</style>