<script lang="ts">
  //import Chart, { type ChartConfiguration } from 'chart.js/auto/auto.esm';
  import Chart from 'chart.js/auto/auto';
  import { onMount } from 'svelte';
  import type { definitions } from 'types/database';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
  let protein = 0;
  let fat = 0;
  let carbohydrates = 0;
  $: if (servings.length > 0) {
    protein = servings.map((x) => (x.grams / 100) * x.Food.protein).reduce((x, y) => x + y);
    fat = servings.map((x) => (x.grams / 100) * x.Food.fat).reduce((x, y) => x + y);
    carbohydrates = servings
      .map((x) => (x.grams / 100) * x.Food.carbohydrates)
      .reduce((x, y) => x + y);
  }
  let context: HTMLCanvasElement;
  $: data = {
    labels: [''],
    datasets: [
      {
        axis: 'y',
        label: ['Fat'],
        data: [fat],
        backgroundColor: ['orange'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        axis: 'y',
        label: ['Protein'],
        data: [protein],
        backgroundColor: ['blue'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        axis: 'y',
        label: ['Carbohydrates'],
        data: [carbohydrates],
        backgroundColor: ['red'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }
    ]
  };
  $: config = {
    type: 'bar',
    data,
    options: {
      layout: { padding: 0 },
      indexAxis: 'y',
      scales: {
        x: { stacked: true, display: false, max: fat + carbohydrates + protein },
        y: { stacked: true, display: false }
      },
      plugins: {
        legend: {
          display: false,
          onClick: null
        },
        tooltip: { enabled: true }
      }
    }
  };
  let chart = null;
  $: {
    if (chart) chart.destroy();
    if (context) chart = new Chart(context, config);
  }
  onMount(() => {});
</script>

{#if servings.length > 0}
  <canvas bind:this={context} height="20" class="rounded-md" />
{/if}
