<!-- SCRIPT -->
<script lang="ts">
    import { _ } from 'svelte-i18n';
</script>


<!-- HTML -->
<nav>
    <a href="/" class="project-name">{$_('general.project-name')}</a>
    <a href="/">{$_('navbar.home')}</a>
    <a href="/pokemon">{$_('navbar.pokemon')}</a>
</nav>


<!-- STYLING -->
<style lang="scss">
    @import '../../styles/app.scss';

    nav {
        display: flex;
        flex-direction: column;
        background-color: $dark-1;
        height: 100vh;
        max-width: 20vw;
        min-width: 10vw;

        a:first-child {
            margin: $spacing-24;
            color: $orange;
            border: none;

            &:hover {
                border: none;
            }
        }
        
        a {
            display: flex;
            margin: 0 $spacing-24 $spacing-24 $spacing-24;
            padding: $spacing-12;
            color: $light-1;
            text-decoration: none;
            font-weight: 600;
        }

        a:hover {
            border: $border-width solid $light-1;
            border-radius: $border-radius;
        }

        .project-name {
            font-size: 1.6rem;
            font-weight: 700;
            white-space: no-warp;
        }
    }
</style>