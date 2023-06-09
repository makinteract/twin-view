<script>
  import Icon from 'svelte-awesome';
  import cloud from 'svelte-awesome/icons/cloudUpload';
  import WebViewer from './components/WebViewer.svelte';
  import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';
  import { Pane, Splitpanes } from 'svelte-splitpanes';
  import Navi from './components/Navi.svelte';
  import Alert from './components/Alert.svelte';
  import SideMenu from './components/SideMenu.svelte';

  let selectedFile = undefined;
  let wrongFileInput = false;
  let ratio = 50;

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...acceptedFiles];
    files.rejected = [...fileRejections];
    selectedFile = files.accepted[0] || undefined; // get the first file
    wrongFileInput = files.rejected.length > 0;
    if (wrongFileInput) {
      setTimeout(() => {
        wrongFileInput = false;
      }, 2000);
    }
    // console.log(file);
    // console.log(files);
  }

  function resetFile() {
    selectedFile = undefined;
  }
  function resetPanes() {
    ratio = 50;
  }
  function minimizePane() {
    ratio = 80;
  }
</script>

<!-- Alert -->
{#if wrongFileInput}
  <Alert show="true">Invalid file. Choose a PDF or an image file!</Alert>
{/if}

<!-- Main -->
<div class="bg-base-200 min-h-screen flex flex-col overflow-hidden">
  <Navi />

  {#if !selectedFile}
    <div class="hero grow">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <Dropzone
            on:drop={handleFilesSelect}
            disableDefaultStyles
            multiple={false}
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
    <div class="flex">
      <SideMenu
        on:clickHome={resetFile}
        on:clickReset={resetPanes}
        on:clickMinimize={minimizePane} />

      <Splitpanes class="grow">
        <!-- {#each { length: 2 } as _, i} -->
        <Pane minSize={10} bind:size={ratio}>
          <div class="h-[calc(100vh-3rem)]">
            <WebViewer file={selectedFile} />
          </div>
        </Pane>
        <Pane minSize={10}>
          <div class="h-[calc(100vh-3rem)]">
            <WebViewer file={selectedFile} />
          </div>
        </Pane>
        <!-- {/each} -->
      </Splitpanes>
    </div>
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
