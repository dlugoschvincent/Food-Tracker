<script lang="ts">
  import Chart, {
    type ChartConfiguration,
    type ChartData,
    type ChartOptions
  } from 'chart.js/auto/auto.mjs'
  import type { Database } from 'types/database/database.types'
  import { onMount } from 'svelte'
  export let servings:
    | (Database['public']['Tables']['UserAteFood']['Row'] & {
        Food: Database['public']['Tables']['Food']['Row']
      })[]
    | undefined
  let context: HTMLCanvasElement
  let protein = 0
  let fat = 0
  let carbohydrates = 0
  let chart: Chart
  $: {
    if (servings != undefined) {
      protein =
        Math.round(
          servings.map((x) => (x.grams / 100) * x.Food.protein).reduce((x, y) => x + y, 0) * 10
        ) / 10
      fat =
        Math.round(
          servings.map((x) => (x.grams / 100) * x.Food.fat).reduce((x, y) => x + y, 0) * 10
        ) / 10
      carbohydrates =
        Math.round(
          servings.map((x) => (x.grams / 100) * x.Food.carbohydrates).reduce((x, y) => x + y, 0) *
            10
        ) / 10
    }
  }

  let data: ChartData = {
    labels: [''],
    datasets: [
      {
        label: 'Fat',
        data: [fat],
        backgroundColor: ['orange'],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        borderSkipped: true
      },
      {
        label: 'Protein',
        data: [protein],
        backgroundColor: ['blue'],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        borderSkipped: true
      },
      {
        label: 'Carbohydrates',
        data: [carbohydrates],
        backgroundColor: ['red'],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        borderSkipped: true
      },
      {
        label: 'Nothing',
        data: [0],
        backgroundColor: ['grey'],
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        borderSkipped: true
      }
    ]
  }

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
  }

  let config: ChartConfiguration = {
    type: 'bar',
    data,
    options
  }

  onMount(() => {
    chart = new Chart(context, config)
  })

  $: if (chart) {
    chart.data.datasets[0].data = [fat]
    chart.data.datasets[1].data = [protein]
    chart.data.datasets[2].data = [carbohydrates]
    if (fat + carbohydrates + protein === 0) {
      chart.options.scales.xAlign.max = 1
      chart.data.datasets[3].data = [1]
    } else {
      chart.options.scales.xAlign.max = fat + carbohydrates + protein
    }
    chart.update()
  }
</script>

<div class="h-6 relative">
  <canvas bind:this={context} class="rounded-md" />
</div>
