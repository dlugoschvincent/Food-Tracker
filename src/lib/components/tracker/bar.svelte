<script lang="ts">
  import Chart, { type ChartConfiguration, type ChartData, type ChartOptions } from 'chart.js/auto';
  import { onMount } from 'svelte';
  import type { definitions } from 'types/database';
  export let servings: (definitions['UserAteFood'] & { Food: definitions['Food'] })[];
  let context: HTMLCanvasElement;
  let protein = 0;
  let fat = 0;
  let carbohydrates = 0;
  let chart: Chart;
  $: {
    protein = servings.map((x) => (x.grams / 100) * x.Food.protein).reduce((x, y) => x + y, 0);
    fat = servings.map((x) => (x.grams / 100) * x.Food.fat).reduce((x, y) => x + y, 0);
    carbohydrates = servings
      .map((x) => (x.grams / 100) * x.Food.carbohydrates)
      .reduce((x, y) => x + y, 0);
  }

  let data: ChartData = {
    labels: [''],
    datasets: [
      {
        label: 'Fat',
        data: [fat],
        backgroundColor: ['orange'],
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        label: 'Protein',
        data: [protein],
        backgroundColor: ['blue'],
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        label: 'Carbohydrates',
        data: [carbohydrates],
        backgroundColor: ['red'],
        barPercentage: 1.0,
        categoryPercentage: 1.0
      },
      {
        label: 'Nothing',
        data: [0],
        backgroundColor: ['grey'],
        barPercentage: 1.0,
        categoryPercentage: 1.0
      }
    ]
  };

  let options: ChartOptions = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      xAlign: { stacked: true, display: false },
      yAlign: { stacked: true, display: false }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: { enabled: true, position: 'nearest' }
    }
  };

  let config: ChartConfiguration = {
    type: 'bar',
    data,
    options
  };

  onMount(() => {
    chart = new Chart(context, config);
  });

  $: if (chart) {
    chart.data.datasets[0].data = [fat];
    chart.data.datasets[1].data = [protein];
    chart.data.datasets[2].data = [carbohydrates];
    if (fat + carbohydrates + protein === 0) {
      chart.options.scales.xAlign.max = 1;
      chart.data.datasets[3].data = [1];
    } else {
      chart.options.scales.xAlign.max = fat + carbohydrates + protein;
    }
    chart.update();
  }
</script>

<div class="relative h-6">
  <canvas bind:this={context} class="rounded-md" />
</div>
