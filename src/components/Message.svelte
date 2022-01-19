<script>
	import {fly} from "svelte/transition";
	import {message} from "../stores";

	$: if ($message) {
		setTimeout(() => $message = false, 750)
	}
</script>

{#if ![true, false].includes($message)}
    {#key $message}
        <div out:fly={{ y: -20 }} in:fly={{ y: -20 }} class="message">{$message}</div>
    {/key}
{/if}

<style>
    .message {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: 100px;
        background: #fff;
        height: 40px;
        z-index: 15;
        display: flex;
        align-items: center;
        padding: 0 15px;
        border-radius: 5px;
        color: #222;
    }
</style>
