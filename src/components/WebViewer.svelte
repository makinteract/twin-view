<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import WebViewer from '@pdftron/pdfjs-express-viewer';

  const dispatch = createEventDispatcher();

  let view;
  export let file;

  onMount(async () => {
    WebViewer(
      {
        licenseKey: 'Assup6XVHI6Up4VMA6Zf',
        path: '/lib',
        disabledElements: ['zoomOutButton', 'viewControlsOverlay'],
      },
      view
    ).then((instance) => {
      // Config interface
      instance.UI.loadDocument(file, { filename: file.name });
      instance.UI.setTheme('dark');
      instance.UI.disableElements(['leftPanel', 'leftPanelButton']);
      instance.UI.disableElements([
        'panToolButton',
        'selectToolButton',
        'viewControlsButton',
      ]);

      // Viewer
      const { documentViewer } = instance.Core;
      documentViewer.setMargin(20);
      documentViewer.addEventListener('documentLoaded', () => {
        dispatch('loaded');
      });
    });
  });
</script>

<div class="viewer" bind:this={view} />

<style>
  .viewer {
    width: 100%;
    height: 100%;
    border-color: white;
    border-width: 1rem;
    border: solid;
  }
</style>
