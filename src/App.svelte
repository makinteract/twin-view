<script>
  import Icon from 'svelte-awesome';
  import github from 'svelte-awesome/icons/github';
  import cloud from 'svelte-awesome/icons/cloudUpload';
  import logo from './assets/logo.jpeg';
  import WebViewer from './components/WebViewer.svelte';
  import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  let file = undefined;

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
    file = files.accepted[0] || undefined; // get the first file
    // console.log(file);
  }
</script>

<div class="bg-base-200 min-h-screen flex flex-col overflow-hidden">
  <div class="navbar h-24 bg-base-100 flex-none p-0">
    <div class="flex-1">
      <img class="w-24 h-24" src={logo} alt="" />
      <a href="./" class="btn btn-ghost normal-case text-xl">Twin View</a>
    </div>
    <div class="flex-none">
      <a
        href="https://makinteract.kaist.ac.kr"
        class="btn btn-square btn-ghost mr-4">
        <Icon data={github} scale="2" />
      </a>
    </div>
  </div>

  {#if !file}
    <div class="hero grow">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <Dropzone
            on:drop={handleFilesSelect}
            disableDefaultStyles
            multiple="false,"
            accept={['image/*', 'application/pdf']}
            containerClasses="custom-dropzone">
            <div>
              <Icon data={cloud} scale="4" />
            </div>
            <button class="mt-2">Choose a PDF file to view</button>
            <!-- <p class="p-1">Minimum one file</p> -->
          </Dropzone>
        </div>
      </div>
    </div>
  {:else}
    <Splitpanes class="grow">
      {#each { length: 2 } as _, i}
        <Pane minSize={10}>
          <div class="h-[calc(100vh-8rem)]">
            <WebViewer {file} />
          </div>
        </Pane>
      {/each}
    </Splitpanes>
  {/if}
</div>

<style>
  :global(.custom-dropzone) {
    background: white;
    border-radius: 20px;
    border: 2px dashed rgb(0, 0, 0);
    border-image: none;
    max-width: 500px;
    min-width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 3rem;
    color: black;
  }
</style>
