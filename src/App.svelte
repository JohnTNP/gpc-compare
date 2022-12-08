<script>
  import HomePage from "./pages/Home_Page.svelte";
  import UpdatedPage from "./pages/Updated_Page.svelte";
  import DeletedPage from "./pages/Deleted_Page.svelte";
  import InsertedPage from "./pages/Inserted_Page.svelte";
  import ShowAllPage from "./pages/ShowAll_Page.svelte";
  import { currentPage } from "./scripts/store";
  import NavBar from "./lib/NavBar.svelte";
</script>

{#if $currentPage == 0}
  <HomePage />
{/if}
{#if $currentPage != 0}
  <NavBar />
{/if}
{#if $currentPage == 1}
  <UpdatedPage />
{/if}
{#if $currentPage == 2}
  <DeletedPage />
{/if}
{#if $currentPage == 3}
  <InsertedPage />
{/if}
{#if $currentPage == 4}
  <ShowAllPage />
{/if}

<style>
</style>
