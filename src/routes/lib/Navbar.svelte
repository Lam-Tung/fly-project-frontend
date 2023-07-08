<!-- SCRIPT -->
<script lang="ts">
    import { _ } from 'svelte-i18n';
    import { page } from '$app/stores';
</script>


<!-- HTML -->
<nav>
    <a href="/" class="project-name">{$_('general.project-name')}</a>
    <a href="/" class:active={$page.url.pathname === '/'}><i class="fa-solid fa-house icon-margin"></i>{$_('navbar.home')}</a>
    <a href="/pokemon" class:active={$page.url.pathname === '/pokemon'}><i class="fa-solid fa-database icon-margin"></i>{$_('navbar.pokemon')}</a>
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

        .project-name {
            font-size: 1.6rem;
            font-weight: 700;
            white-space: no-warp;
        }

        a:first-child {
            margin: $spacing-24;
            color: $orange;
            border: $border-width solid transparent;
            border-right: transparent;

            &:hover {
                border: $border-width solid transparent;
                border-right: transparent;
            }

            &.active {
                border: $border-width solid transparent;
                border-right: transparent;
                background-color: $dark-1;
            }
        }
        
        a {
            display: flex;
            border: $border-width solid transparent;
            border-right: transparent;
            margin: 0 0 $spacing-24 $spacing-24;
            padding: $spacing-12;
            color: $light-1;
            text-decoration: none;
            font-weight: 600;
        }

        a.active {
            border: $border-width solid $light-1;
            border-radius: $border-radius;
            border-right: transparent;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            background-color: $light-2;
            color: $dark-1;

            &:hover {
                margin: 0 0 $spacing-24 $spacing-24;
                border-right: transparent;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        a:hover {
            border: $border-width solid $light-1;
            border-radius: $border-radius;
            margin: 0 $spacing-24 $spacing-24 $spacing-24;
        }

        .icon-margin {
            margin-right: $spacing-12;
        }
    }
</style>