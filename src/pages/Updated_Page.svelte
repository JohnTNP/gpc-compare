<script defer>
  // @ts-nocheck

  import DataTable from "../lib/DataTable.svelte";
  import { onMount } from "svelte";
  import { Compare } from "../scripts/compare";
  import { readGPCFile } from "../scripts/gpc";
  import {
    _Compare,
    insertData1,
    insertData2,
    fileName1,
    fileName2,
  } from "../scripts/store";

  let isCompareReady = false;
  onMount(() => {
    readGPCFile($fileName1).then((data1) => {
      insertData1.update((value) => {
        return (value = data1);
      });
      readGPCFile($fileName2).then((data2) => {
        insertData2.update((value) => {
          return (value = data2);
        });
        _Compare.update((value) => {
          return (value = new Compare($insertData1, $insertData2));
        });
      });
    });
    setTimeout(() => {
      isCompareReady = true;
    }, 1000);
  });
</script>

<main>
  {#if isCompareReady}
    <DataTable />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
