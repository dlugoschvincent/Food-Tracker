<script lang="ts">
  import type { definitions } from 'types/database';
  import { page } from '$app/stores';
  import { user } from '$lib/stores/userStore';
  import { supabase } from '$lib/supabaseclient';
  import { goto } from '$app/navigation';
  import { selectedDate } from '$lib/stores/dateStore';

  export let product: definitions['Food'];

  $: kiloJoules = Math.round(
    product.protein * 176 + product.carbohydrates * 172 + product.fat * 400
  );

  async function eat(event: SubmitEvent) {
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const { error, status, data } = await supabase
      .from<definitions['UserAteFood']>('UserAteFood')
      .insert({
        food_id: product.bar_code,
        meal: $page.url.searchParams.get('meal') as string,
        grams: parseInt(formData.get('grams') as string),
        user_id: $user?.id,
        created_at: $selectedDate.toISOString()
      });
    if (data) {
      goto(`/${$selectedDate.toISOString().slice(0, 10)}`);
    }
  }
</script>

<form
  class="auto-rows-max grid gap-4"
  method="post"
  action="/products/{$page.params.product}?_method=PATCH&meal={$page.url.searchParams.get('meal')}">
  <div class="grid">
    <label for="bar_code" class="text-sm">Bar Code</label>
    <input
      id="bar_code"
      class="input-text"
      type="number"
      name="bar_code"
      bind:value={product.bar_code}
      disabled />
  </div>
  <div class="grid">
    <label for="name" class="text-sm">Name</label>
    <input
      required
      id="name"
      class="input-text"
      type="text"
      name="name"
      bind:value={product.name} />
  </div>

  <div class=" mt-4">Nutrients per 100 gram:</div>

  <div class="grid">
    <label for="fat" class="text-sm">Fat</label>
    <input
      max={100 - product.protein - product.carbohydrates}
      min="0"
      step="0.1"
      required
      id="fat"
      class="input-text"
      type="number"
      name="fat"
      bind:value={product.fat} />
  </div>

  <div class="grid">
    <label for="carbohydrates" class="text-sm">Carbohydrates</label>
    <input
      max={100 - product.protein - product.fat}
      min="0"
      step="0.1"
      required
      id="carbohydrates"
      class="input-text"
      type="number"
      name="carbohydrates"
      bind:value={product.carbohydrates} />
  </div>
  <div class="grid">
    <label for="protein" class="text-sm">Protein</label>
    <input
      max={100 - product.fat - product.carbohydrates}
      min="0"
      step="0.1"
      required
      id="protein"
      class="input-text"
      type="number"
      name="protein"
      bind:value={product.protein} />
  </div>
  <div class="grid">
    <label for="kilojoules" class="text-sm">Kilojoules</label>
    <input
      disabled
      step="0.1"
      id="kilojoules"
      class="input-text"
      type="number"
      name="kilojoules"
      value={kiloJoules} />
  </div>
  <button class="rounded-md bg-orange-300 border-2 border-orange-300 p-2" type="submit"
    >Update Product</button>
</form>

<form
  method="post"
  action="/products/{$page.params.product}?_method=DELETE"
  class="auto-rows-max grid gap-4">
  <button type="submit" class="rounded-md bg-red-500 border-2 border-red-500 p-2">Delete</button>
</form>

<form on:submit|preventDefault={eat} class="auto-rows-max grid gap-4">
  <div class="grid">
    <label for="grams" class="text-sm">Grams</label>
    <input step="0.1" id="grams" class="input-text" type="number" name="grams" />
  </div>
  <input type="hidden" value={$user?.id} name="userId" />
  <button type="submit" class="rounded-md bg-orange-500 border-2 border-orange-500 p-2">Eat</button>
</form>
