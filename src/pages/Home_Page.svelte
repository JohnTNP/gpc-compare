<script>
  import Form from "../lib/Form.svelte";
</script>

<main>
  <h2 class="glow pointer">GSIM/MoviolaW Comparison Tool</h2>
  <Form />
</main>

<style>
  main {
    padding: 0 0 0 1rem;
  }
  .glow {
    user-select: none;
    font-size: 5rem;
    color: #fff;
    text-align: center;
    animation: glow 3s ease-in-out infinite alternate;
  }
  @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #7ba5bd,
        0 0 40px #7ba5bd, 0 0 50px #7ba5bd, 0 0 60px #7ba5bd, 0 0 70px #7ba5bd;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #0794a7, 0 0 40px #0794a7,
        0 0 50px #0794a7, 0 0 60px #0794a7, 0 0 70px #0794a7, 0 0 80px #0794a7;
    }
  }
</style>
