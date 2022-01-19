<script>
	import {fly} from "svelte/transition";
	import {modal} from "../stores";
	import Help from "./modals/Help.svelte";
	import Settings from "./modals/Settings.svelte";

	// !todo dinamik importa bakılacak
	let components = {
		Help,
		Settings
	}

	$: Component = components[$modal]
</script>

<div class="modal" out:fly={{ y: 50, duration: 200 }} in:fly={{ y: 50, duration: 200 }}>
    <div class="inner">
        <svelte:component this={Component}/>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        inset: 0;
        z-index: 2;
        background: var(--bg);
    }

    .inner {
        width: 500px;
        margin: 0 auto;
        height: 100%;
    }
</style>
