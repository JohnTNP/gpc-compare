<script>
  // @ts-nocheck

  import {
    fileName1,
    fileName2,
    insertData1,
    insertData2,
    _Compare,
  } from "../scripts/store";
</script>

<main>
  <div class="row">
    <div class="column">
      <table id="myTable">
        <thead>
          <tr class="header">
            <th colspan="3">{$fileName1.split("\\").slice(-1)}</th>
          </tr>
          <tr class="header">
            <th>Item</th>
            <th>Bit</th>
            <th>Mnemonic</th>
          </tr>
        </thead>
        {#each $insertData1 as data1, index0}
          {#if !$_Compare.greenInserts.some((d) => d === data1.name) && !$_Compare.greenObjs[index0].greenBits.length == 0}
            {#each data1.bits as bit, index1}
              <tr>
                {#if index1 == 0}
                  <td rowspan={data1.bits.length}>{data1.name}</td>
                {/if}
                <td
                  class={$_Compare.greenObjs[index0].greenBits.includes(bit) &&
                  $_Compare.greenObjs[index0].greenMnes.includes(
                    data1.mnemonics[index1]
                  )
                    ? "deleted"
                    : ""}>{bit}</td
                >
                <td>{data1.mnemonics[index1]}</td>
              </tr>
            {/each}
          {/if}
        {/each}
      </table>
    </div>

    <div class="column">
      <table id="myTable">
        <thead>
          <tr class="header">
            <th colspan="3">{$fileName2.split("\\").slice(-1)}</th>
          </tr>
          <tr class="header">
            <th>Name</th>
            <th>Bit</th>
            <th>Mnemonic</th>
          </tr>
        </thead>
        {#each $insertData2 as data2, index0}
          {#if !$_Compare.redInserts.some((d) => d === data2.name) && !$_Compare.redObjs[index0].redBits.length == 0}
            {#each data2.bits as bit, index1}
              <tr>
                {#if index1 == 0}
                  <td rowspan={data2.bits.length}>{data2.name}</td>
                {/if}
                <td
                  class={$_Compare.redObjs[index0].redBits.includes(bit) &&
                  $_Compare.redObjs[index0].redMnes.includes(
                    data2.mnemonics[index1]
                  )
                    ? "inserted"
                    : ""}>{bit}</td
                >
                <td
                  class={$_Compare.redObjs[index0].redBits.includes(bit) &&
                  $_Compare.redObjs[index0].redMnes.includes(
                    data2.mnemonics[index1]
                  )
                    ? "inserted"
                    : ""}>{data2.mnemonics[index1]}</td
                >
              </tr>
            {/each}
          {/if}
        {/each}
      </table>
    </div>
  </div>
</main>

<style>
  button {
    background-color: #04aa6d;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-family: monospace;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    margin-left: 15px;
    margin-right: 15px;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 16px;
  }

  #myInput {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }

  #myTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: large;
  }

  #myTable th,
  #myTable td {
    text-align: left;
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 1.1rem;
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header,
  #myTable tr:hover {
    background-color: #f1f1f1;
  }

  .deleted {
    color: green;
    background-color: rgb(213, 250, 244);
  }
  .inserted {
    color: rgb(239, 1, 55);
    background-color: rgb(255, 232, 231) !important;
    print-color-adjust: exact;
  }
  .pointer {
    cursor: pointer;
  }
  .detail {
    display: none;
  }
</style>
