<script>
	import {current, currentWords, win, allWords, message, randomWord, currentWord, cols} from "../../stores";

	// skor tablosu
	$: scoreBoard = $currentWords.map((word, k) => {
		return word.reduce((prev, cur, index) => {
			if ($currentWords?.[k]?.[index]) {
				if ($currentWords[k][index] === $randomWord[index]) {
					prev += '🟩';
				} else if ($randomWord.includes($currentWords[k][index]) && !$currentWords[k].slice(0, index).includes($currentWords[k][index])) {
					prev += '🟨'
				} else {
					prev += '⬛'
				}
			}
			return prev
		}, '')
	})

	const share = () => {
		$message = "Skor tablonuz kopyalandı"
		navigator.clipboard.writeText(
			`${$randomWord.join('')} kelimesini ${$current}. seferde bilmeyi başardım!\n\n` +
			scoreBoard.join("\n")
		).then(res => console.log(res))
	}

	const playAgain = () => {
		$win = false
		$current = 0
		$currentWords = $currentWord = []
		$randomWord = $allWords[$cols][Math.floor(Math.random() * $allWords[$cols].length)].split('')
	}
</script>

<div class="popup">
    <div class="inner">
        <h3>KAZANDIN!</h3>
        <div class="word">
            {#each $randomWord as letter}
                <div class="same">{letter.toLocaleUpperCase('TR')}</div>
            {/each}
        </div>
        <div class="divider"></div>
        <div class="result">
            <div class="result-inner">
                <a class="share-btn" target="_blank" href={`https://twitter.com/intent/tweet?text=${$randomWord.join('')} kelimesini ${$current}. seferde bilmeyi başardım!%0a%0a${scoreBoard.join("%0a")}`}>
                    TWEET AT
                </a>
                <button on:click={share} class="share-btn">
                    KOPYALA
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path fill="var(--white)"
                              d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path>
                    </svg>
                </button>
            </div>
            <button style="width: 100%; text-align: center" on:click={playAgain} class="share-btn">
                YENİDEN OYNA
            </button>
        </div>
    </div>
</div>

<style>
    .popup {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, .8);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: auto;
        z-index: 5;
    }

    .inner {
        background: #222;
        width: 500px;
        padding: 25px;
        border-radius: 5px;
        max-width: 100%;
    }

    .inner h3 {
        margin-bottom: 15px;
        font-size: 22px;
    }

    .word {
        display: flex;
        gap: 5px;
        margin-bottom: 12px;
    }

    .word div {
        width: 40px;
        height: 40px;
        border: 2px solid var(--column);
        font-size: 28px;
        font-weight: bold;
        color: var(--text);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .word div.same {
        background: var(--same);
        border-color: var(--same);
        color: #fff;
    }

    .result {
        display: flex;
        flex-direction: column;
    }

    .result-inner {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .share-btn {
        background: #444;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
        height: 50px;
        padding: 0 15px;
        border-radius: 4px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        gap: 10px;
        text-decoration: none;
    }

    .divider {
        height: 1px;
        background: var(--text);
        opacity: .1;
        margin: 20px 0;
    }
</style>
