<script>
import { listStore } from "./store/liststore";

  import List from "./list.svelte";

  let listArr;
  
  listStore.subscribe((value) => {
    listArr = value;
  });
  
console.log("listArr: ",listArr)
</script>

<!-- passing each object as prop to List -->
<div class="flex flex-col mt-4">
  {#each listArr as item}
   <List item={item} />
  
  {/each}
</div>
