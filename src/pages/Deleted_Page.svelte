<script>
  // @ts-nocheck

  import { _Compare, insertData1 } from "../scripts/store";
</script>

{#if $_Compare.greenInserts != undefined}
  <table id="myTable">
    <thead>
      <tr class="header">
        <th>Name</th>
        <th>Bit</th>
        <th>Mnemonic</th>
      </tr>
    </thead>
    {#each $insertData1 as data1, index0}
      {#if $_Compare.greenInserts.includes(data1.name)}
        {#each data1.bits as bit, index1}
          <tr>
            {#if index1 == 0}
              <td rowspan={data1.bits.length}>{data1.name}</td>
            {/if}
            <td>{bit}</td>
            <td>{data1.mnemonics[index1]}</td>
          </tr>
        {/each}
      {/if}
    {/each}
  </table>
{/if}

<style>
</style>
