<script>
	import {fade, scale} from 'svelte/transition';
	import {cols, message, current, currentWords, randomWord, currentWord} from "../stores";

	export let row

	let numbers = []
</script>

<div class="word" style="--cols: {$cols}" class:error={$current === row && $message}>
    {#each Array($cols) as _, c}
        <div class="cell">

            <!-- eğer mevcut satırda işlem yapılıyorsa -->
            {#if $current === row}

                <!-- geri silmede scale animasyonunu engellemek için kontrol gerekti -->
                {#if $currentWord?.[c]}
                    {#key $currentWord?.[c]}
                        <div class="highlight" in:scale={{ opacity: 1, start: 1.1, duration: 100 }}>{($currentWord?.[c] ?? '').toLocaleUpperCase('TR')}</div>
                    {/key}
                {:else}
                    <div></div>
                {/if}

            <!-- doldurulmuş kelime mevcut ise -->
            {:else if $currentWords?.[row]?.[c]}
                {#key $currentWords[row][c]}
                    <div
                        class:same={$currentWords[row][c] === $randomWord[c]}
                        class:has={$randomWord.includes($currentWords[row][c]) && !$currentWords[row].slice(0, c).includes($currentWords[row][c])}
                        class="no"
                        out:fade
                        in:fade={{ delay: (c + 1) * 50 }}
                    >
                        {$currentWords[row][c].toLocaleUpperCase('TR')}
                    </div>
                {/key}
            {:else}
                <div></div>
            {/if}
        </div>
    {/each}
</div>

<style>
    .word {
        width: 330px;
        display: grid;
        grid-template-columns: repeat(var(--cols, 6), 1fr);
        column-gap: 5px;
    }

    .word .cell {
        aspect-ratio: 1/1;
        position: relative;
    }

    .word .cell div {
        border: 2px solid var(--column);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;
        height: 100%;
        position: absolute;
        inset: 0;
        width: 100%;
        z-index: 1;
    }

    .word .cell div.highlight {
        border-color: var(--column-highlight);
    }

    .word .cell div.no {
        background: var(--no);
        border-color: var(--no);
        color: #fff;
    }

    .word .cell div.same {
        background: var(--same) !important;
        border-color: var(--same) !important;
        color: #fff;
    }

    .word .cell div.has {
        background: var(--has);
        border-color: var(--has);
        color: #fff;
    }

    .word.error {
        animation: shake 0.5s;
    }

    @keyframes shake {
        0% {
            transform: translate(1px, 1px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(1px, 2px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }
</style>
