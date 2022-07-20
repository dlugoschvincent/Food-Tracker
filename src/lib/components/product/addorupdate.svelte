<script lang="ts">
  import type { definitions } from 'types/database';
  import { page } from '$app/stores';
  import Inputfloat from '../formelements/inputfloat.svelte';
  let edit = false;
  export let product: definitions['Food'] = {
    bar_code: parseInt($page.params.product),
    name: '',
    fat: 0,
    protein: 0,
    carbohydrates: 0,
    saturated_fat: 0,
    fibre: 0,
    salt: 0,
    sugar: 0
  };
  $: kiloJoules = Math.round(
    product.protein * 16.7 + product.carbohydrates * 16.7 + product.fat * 37.7
  );
  function toggleEdit() {
    edit = !edit;
  }
</script>

<form method="post">
  <fieldset class:opacity-80={!edit} class="auto-cols-fr grid gap-8" disabled={!edit}>
    <Inputfloat
      disabled
      hidden
      placeholder="Barcode"
      bind:value={product.bar_code}
      type="text"
      required
      name="bar_code" />
    <div class="col-span-1">
      <Inputfloat placeholder="Name" bind:value={product.name} type="text" required name="name" />
    </div>
    {#if edit}
      <button
        class="p-2 rounded-full bg-orange-500 cursor-pointer place-self-end col-span-1"
        type="submit">
        <div class="i-bx:save text-xl" />
      </button>
    {:else}
      <div
        class="p-2 rounded-full bg-orange-500 cursor-pointer place-self-end col-span-1"
        on:click={toggleEdit}>
        <div class="i-akar-icons:edit text-xl" />
      </div>
    {/if}

    <div class="col-span-2">Nutrients per 100 gram:</div>

    <Inputfloat
      placeholder="Fat"
      bind:value={product.fat}
      type="number"
      required
      min="0"
      max={100 - product.protein - product.carbohydrates}
      step="0.1"
      name="fat" />
    <Inputfloat
      placeholder="Protein"
      bind:value={product.protein}
      type="number"
      required
      min="0"
      max={100 - product.fat - product.carbohydrates}
      step="0.1"
      name="protein" />
    <Inputfloat
      placeholder="Carbohydrates"
      bind:value={product.carbohydrates}
      type="number"
      required
      min="0"
      max={100 - product.fat - product.protein}
      step="0.1"
      name="carbohydrates" />
    <Inputfloat
      disabled
      placeholder="Kilojoules"
      bind:value={kiloJoules}
      type="number"
      required
      min="0"
      max={Math.floor(37.7 * 100)}
      step="0.1"
      name="kilojoules" />
  </fieldset>
</form>
<form method="post" action="{$page.url.pathname}?_method=PUT" class="grid gap-4">
  <div class="col-span-6">How much did you eat?</div>
  <div class="col-span-5">
    <Inputfloat step="0.1" type="number" name="grams" placeholder="Grams" />
  </div>
  <button type="submit" class="rounded-md border-2 border-orange-500 p-2 col-span-1">Eat</button>
</form>
