<script>
  export let item;
  import { listStore } from "./store/liststore";

  let listArr;
  listStore.subscribe((val) => {
    listArr = val;
  });

  const Removelist = (ev, item) => {
    ev.preventDefault();
    listStore.update((arr) => {
      return arr.filter((existingItem) => existingItem !== item);
    });
  };
  
</script>

<div class="flex w-[300px] mt-2">
  {#if item}
    <div
      class="flex w-96 flex-col border border-black rounded p-2 hover:bg-gray-300 cursor-pointer"
    >
      <span class="text-lg font-semibold">{item.title}</span>
      <span class="text-sm">{item.desc}</span>
    </div>
    <div class="mt-4 ml-2 cursor-pointer" on:click={(e) => Removelist(e, item)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </div>
  {/if}
</div>
