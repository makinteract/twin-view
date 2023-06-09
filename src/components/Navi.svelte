<script>
  import Icon from 'svelte-awesome';
  import github from 'svelte-awesome/icons/github';
  import logo from '../assets/logo_nobg.png';
</script>

<div class="navbar h-12 bg-base-100 flex-none p-0">
  <div class="flex-1">
    <a href="./">
      <img class="w-20 h-20 p-2" src={logo} alt="" />
    </a>
    <div href="./" class="normal-case text-xl font-bold">Twin View</div>
  </div>
  <div class="flex-none">
    <a
      href="https://github.com/makinteract/twin-view"
      class="btn btn-square btn-ghost mr-1">
      <Icon data={github} scale="3" />
    </a>
  </div>
</div>
