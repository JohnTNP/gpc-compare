<script>
  // @ts-nocheck

  import { openGPCFile } from "../scripts/gpc";
  import {
    fileName1,
    fileName2,
    designername,
    checkername,
    version1,
    version2,
    currentPage,
  } from "../scripts/store";

  const submitInput = () => {
    var isInputMissed = $fileName1 == "" || $fileName2 == "";
    /*||
      $version1 == "" ||
      $version2 == "" ||
      $designername == "" ||
      $checkername == ""*/
    if (isInputMissed) {
      alert("Please Enter the Correct Input");
      return 0;
    }
    currentPage.update(() => {
      return 1;
    });
  };
</script>

<main>
  <div class="openFile-container">
    <div class="button-container">
      <button
        type="button"
        class="choose"
        on:click={() => {
          openGPCFile().then((data) => {
            fileName1.update(() => {
              return data;
            });
          });
        }}
      >
        Open File 1
      </button>
      <p>{$fileName1.split("\\").slice(-1)}</p>
    </div>
    <div class="button-container">
      <button
        type="button"
        class="choose"
        on:click={() => {
          openGPCFile().then((data) => {
            fileName2.update(() => {
              return data;
            });
          });
        }}
      >
        Open File 2
      </button>
      <p>{$fileName2.split("\\").slice(-1)}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-75">
      <div class="container">
        <form>
          <div class="row">
            <div class="col-50">
              <label for="version">Version 1</label>
              <input
                bind:value={$version1}
                type="text"
                id="version"
                name="version"
                placeholder="1.0"
              />
              <label for="designer">Designer's name</label>
              <input
                bind:value={$designername}
                type="text"
                id="designer"
                name="address"
                placeholder="Rungaroon K"
              />
            </div>
            <div class="col-50">
              <label for="version2">Version 2</label>
              <input
                bind:value={$version2}
                type="text"
                id="version"
                name="version"
                placeholder="1.1"
              />
              <label for="checker">Checker's name</label>
              <input
                bind:value={$checkername}
                type="text"
                id="designer"
                name="address"
                placeholder="Tanaphon S"
              />
            </div>
          </div>
          <input
            type="button"
            value="Submit"
            class="submit-btn"
            on:click={() => {
              submitInput();
            }}
          />
        </form>
      </div>
    </div>
  </div>
</main>

<style>
  * {
    box-sizing: border-box;
  }
  main {
    text-align: center;
  }
  .openFile-container {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  button {
    background-color: #007993;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    width: 10rem;
    transition: 0.2s;
  }
  button:hover {
    opacity: 0.8;
    width: 10.5rem;
  }
  .submit-btn {
    background-color: #007993;
    color: white;
    padding: 12px;
    margin: 10px 0;
    margin-top: 2rem;
    border: none;
    width: 20rem;
    cursor: pointer;
    font-size: 17px;
    transition: 0.2s;
    border-radius: 3px;
  }
  .submit-btn:hover {
    opacity: 0.8;
    width: 21rem;
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
  }
  .col-50 {
    flex: 50%;
  }
  .col-75 {
    flex: 75%;
  }

  .col-50,
  .col-75 {
    padding: 0 16px;
  }

  .container {
    padding: 1% 20% 1% 20%;
    border-radius: 3px;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    padding: 12px;
    background: #ebf7f8;
    border-radius: 3px;
  }
  input[type="text"]:hover {
    background: #d1fff2;
  }
  input[type="text"]:focus {
    background: #d1fff2;
  }
</style>
