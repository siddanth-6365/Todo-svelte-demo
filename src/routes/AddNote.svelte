<script>
  import { Button, Modal, Label, Input, Textarea } from "flowbite-svelte";
  import { listStore } from "./store/liststore";

  let listArr;
  listStore.subscribe((value) => {
    listArr = value;
  });

  let titleInput;
  let descInput;

  const AddNote = (event) => {
    event.preventDefault();
    console.log("called : ", listArr);

    if (titleInput && descInput) {
      const newNote = {
        title: titleInput,
        desc: descInput,
      };
      listStore.update((arr) => [...arr, newNote]);
      console.log("arr: ", newNote);
      formodal = false;
    }
  };

  export let formodal = false;
</script>

<!-- used flowbite ui for modal -->
<Modal bind:open={formodal} size="xs" autoclose={false} class="w-full">
  <form
    class="flex flex-col space-y-6"
    on:submit={(e) => AddNote(e)}
    action="#"
  >
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Add Todo
    </h3>
    <Label class="space-y-2">
      <span>Title</span>
      <Input
        class="border border-md border-gray-700"
        bind:value={titleInput}
        type="text"
        name="title"
        placeholder="assignment"
        required
      />
    </Label>
    <Label class="space-y-2">
      <span>Description</span>
      <Textarea
        class="border border-md border-gray-700"
        bind:value={descInput}
        name="desc"
      />
    </Label>

    <Button type="submit" class="w-full1">Add +</Button>
  </form>
</Modal>
