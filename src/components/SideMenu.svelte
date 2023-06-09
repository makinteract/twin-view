<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from 'svelte-awesome';
  import home from 'svelte-awesome/icons/home';
  import columns from 'svelte-awesome/icons/columns';
  import right from 'svelte-awesome/icons/toggleRight';

  const dispatch = createEventDispatcher();
</script>

<ul class="menu bg-base-100 rounded-box pt-3 text-gray-700">
  <li>
    <div class="lg:tooltip lg:tooltip-right lg:tooltip-warning" data-tip="Home">
      <a on:click={() => dispatch('clickHome')}>
        <Icon data={home} scale="1.5" />
      </a>
    </div>
  </li>
  <li>
    <div
      class="lg:tooltip lg:tooltip-right lg:tooltip-warning"
      data-tip="Reset panes">
      <a on:click={() => dispatch('clickReset')}>
        <Icon data={columns} scale="1.5" />
      </a>
    </div>
  </li>
  <li>
    <div
      class="lg:tooltip lg:tooltip-right lg:tooltip-warning"
      data-tip="Minimize right pane">
      <a on:click={() => dispatch('clickMinimize')}>
        <Icon data={right} scale="1.5" />
      </a>
    </div>
  </li>
</ul>
