<script>
	export let key

	const keyHandle = () => {
		document.dispatchEvent(
			new KeyboardEvent('keyup', {key})
		)
	}
</script>

<button on:click={keyHandle}>
    <slot>
        {key.toLocaleUpperCase('TR')}
    </slot>
</button>

<style>
    button {
        flex-grow: 1;
        background: var(--key);
        border: none;
        color: var(--text);
        font-weight: 500;
        font-size: 17px;
        padding: 15px 0;
        border-radius: 4px;
    }
</style>
