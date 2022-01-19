<script>
	import {rows} from "../stores";
	import Word from "./Word.svelte";
</script>

<div class="words" style="--rows: {$rows}">
    {#each Array($rows) as _, row (row)}
        <Word row={row}/>
    {/each}
</div>

<style>
    .words {
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(var(--rows, 6), 1fr);
        row-gap: 5px;
    }
</style>
