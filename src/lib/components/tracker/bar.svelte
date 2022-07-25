<script lang="ts">
  import Chart, { type ChartConfiguration, type ChartData, type ChartOptions } from 'chart.js/auto';
  import { onMount } from 'svelte';
  import type { definitions } from 'types/database';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
  let context: HTMLCanvasElement;
  let protein = 0;
  let fat = 0;
  let carbohydrates = 0;
  let data: ChartData;
  let config: ChartConfiguration;
  let options: ChartOptions;
  let chart: Chart;
  $: {
    protein = servings.map((x) => (x.grams / 100) * x.Food.protein).reduce((x, y) => x + y, 0);
    fat = servings.map((x) => (x.grams / 100) * x.Food.fat).reduce((x, y) => x + y, 0);
    carbohydrates = servings
      .map((x) => (x.grams / 100) * x.Food.carbohydrates)
      .reduce((x, y) => x + y, 0);
  }

  $: data = {
    labels: [''],
    datasets: [
      {
        axis: 'y',
        label: 'Fat',
        data: [fat],
        backgroundColor: ['orange'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        axis: 'y',
        label: 'Protein',
        data: [protein],
        backgroundColor: ['blue'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        axis: 'y',
        label: 'Carbohydrates',
        data: [carbohydrates],
        backgroundColor: ['red'],
        borderWidth: 1,
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }
    ]
  };

  $: options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: { stacked: true, display: false, max: fat + carbohydrates + protein },
      y: { stacked: true, display: false }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: { enabled: true }
    }
  };

  $: config = {
    type: 'bar',
    data,
    options
  };

  onMount(() => {
    chart = new Chart(context, config);
  });

  $: if (chart) {
    chart.data = data;
    chart.options = options;
    chart.update('resize');
  }
</script>

<div class="relative h-6">
  <canvas bind:this={context} class="rounded-md" />
</div>
