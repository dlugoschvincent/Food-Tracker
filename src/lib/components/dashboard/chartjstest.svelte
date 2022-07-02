<script lang="ts">
  import Chart from 'chart.js/auto/auto.esm';
  import { onMount } from 'svelte';
  let ctx: any;
  let data: any;
  onMount(() => {
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Protein', 'Fat', 'Carbohydrates'],
        datasets: [
          {
            data: [200, 100, 200],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 0,
            hoverOffset: 4
          }
        ]
      },
      options: {
        layout: {
          padding: 20
        },
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16
              }
            }
          },
          title: {
            display: true,
            text: 'Nutrients Today',
            font: { size: 20 }
          }
        }
      }
    });
  });
</script>

<div class="mx-auto max-w-xl">
  <canvas bind:this={ctx} />
</div>
