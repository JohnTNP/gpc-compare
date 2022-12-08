<script>
  import { currentPage } from "../scripts/store";
  const goToPage = (pageNumber) => {
    currentPage.update((value) => {
      return pageNumber;
    });
  };
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<div class="navbar">
  <a
    href="#"
    on:click={() => {
      goToPage(0);
    }}><i class="fa fa-fw fa-home" /> Home</a
  >
  <a
    href="#"
    on:click={() => {
      goToPage(1);
    }}><i class="fa fa-fw fa-arrow-circle-up" /> Updated Items</a
  >
  <a
    href="#"
    on:click={() => {
      goToPage(2);
    }}><i class="fa fa-fw fa-trash-o" /> Deleted Items</a
  >
  <a
    href="#"
    on:click={() => {
      goToPage(3);
    }}><i class="fa fa-fw fa-plus" /> Inserted Items</a
  >
  <a
    href="#"
    on:click={() => {
      goToPage(4);
    }}><i class="fa fa-fw fa-square" /> Show All</a
  >
  <a href="#"><i class="fa fa-fw fa-print" /> Print</a>
</div>

<style>
  .navbar {
    position: fixed;
    left: 0;
    top: 0;
    background: #0794a7;
    overflow: auto;
    width: 100%;
  }
  .navbar a {
    text-decoration: none;
    float: left;
    padding: 12px;
    font-size: 1rem;
    color: white;
    font-family: monospace;
    transition: background 0.5s;
  }
  .navbar a:hover {
    background-color: rgb(0, 190, 220);
    transition-duration: 0.5s;
  }
</style>
