<script>
  import { fade, fly } from 'svelte/transition';

  export let show = false;
  $: {
    if (show) {
      setTimeout(() => {
        show = false;
      }, 3000);
    }
  }

  function click() {
    show = false;
  }
</script>

{#if show}
  <div class="absolute inset-0 justify-center items-center">
    <div
      in:fade={{ duration: 200 }}
      out:fly={{ y: -200, duration: 2000 }}
      class="alert alert-error shadow-lg">
      <div on:click={click}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <slot />
      </div>
    </div>
  </div>
{/if}
