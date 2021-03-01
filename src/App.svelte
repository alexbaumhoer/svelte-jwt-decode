<script lang="ts">
  import JWT from './util/jwt';

  let token: JWT, decodedHeader: string, decodedPayload: string, errorMessage: string;

  $: if (token) {
    // Reset any error messages on token change
    errorMessage = undefined;

    try {
      decodedHeader = token.decodedHeader();
      decodedPayload = token.decodedPayload();
    } catch (error) {
      errorMessage = error;
    }
  }

  function handleInput(event: Event) {
    if (event.target.value) {
      token = new JWT(event.target.value);
    } else {
      token = undefined;
    } 
  }
</script>

<main>
  <h1>JWT Decoder</h1>
  <input on:input={handleInput} type="text" />
  {#if token}
    {#if errorMessage}
      <p>{errorMessage}</p>
    {:else}
      <h2>Header</h2>
      <p>{decodedHeader}</p>
      <h2>Payload</h2>
      <p>{decodedPayload}</p>
    {/if}
  {:else}
    <p>No token entered</p>
  {/if}
</main>

<style>
  main {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }
</style>