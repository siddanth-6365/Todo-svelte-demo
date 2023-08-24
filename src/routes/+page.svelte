<script>
 
 import { Button } from "flowbite-svelte";
  import AddNote from "./AddNote.svelte";
  import Display from "./Display.svelte";

  import "../app.css";
  import { listStore } from "./store/liststore";

  let listArr;
  listStore.subscribe((val) => {
    listArr = val;
  });

  let formModal = false;
</script>

<div class="">
  <div class="flex justify-center mt-10">
    <div class="">
      <div class=" gap-4">
        <h1 class="text-5xl font-bold mb-2">2Do-List :</h1>
        <p class="text-lg text-gray-700 ml-4">
         [ {listArr.length}
          {listArr.length <= 1 ? "list" : "lists"}
          remaining
         ]
        </p>
        <Button
          class="ml-12 p-4 mt-2"
          on:click={() => {
            formModal = true;
          }}>Add Todo</Button
        >
      </div>

      <!--on button click display addnote modal -->
      {#if formModal}
        <AddNote bind:formodal={formModal} />
      {/if}

    </div>
  </div>

      <!--Display list-->
  <div class="max-w-50% ml-[41%]">
    <Display />
  </div>

</div>

<slot />

