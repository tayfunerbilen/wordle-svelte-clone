<script>
	import {
		currentWord,
		modal,
		allWords,
		currentWords,
		current,
		cols,
		rows,
		message,
		lightMode,
		win,
		lose,
		randomWord
	} from "./stores";
	import Header from "./components/Header.svelte";
	import Grid from "./components/Grid.svelte";
	import Keyboard from "./components/Keyboard.svelte";
	import Message from "./components/Message.svelte";
	import Modal from "./components/Modal.svelte";
	import Win from "./components/modals/Win.svelte";
	import Lose from "./components/modals/Lose.svelte";

	const keys = [
		'q', 'w', 'e', 'r', 't', 'y', 'u', 'ı', 'o', 'p', 'ğ', 'ü',
		'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ş', 'i',
		'z', 'x', 'c', 'v', 'b', 'n', 'm', 'ö', 'ç'
	]

	document.addEventListener('keyup', e => {

		// harf geçerli bir harf ise ekle
		if (keys.includes(e.key.toLowerCase()) && $currentWord.length < $cols) {
			$currentWord = [...$currentWord, e.key.toLowerCase()]
		}

		// mevcut kelimenin uzunluğu 0'dan büyükse bir azaltıp harfi çıkart
		if (e.key === 'Backspace') {
			$currentWord.length = $currentWord.length > 0 ? $currentWord.length - 1 : 0
		}

		if (e.key === 'Enter') {

			// kelime tamamlanmamışsa
			if ($currentWord.length !== $cols) {
				$message = true
			} else {

				// kelime tamamsa ve mevcut kelimelerde bulunuyorsa
				// mevcut kelimelere ekleyip sonrakine geçir
				if ($allWords[$cols].includes($currentWord.join(''))) {

					$currentWords = [...$currentWords, $currentWord]
					$currentWord = []

					// kazandı mı?
					if ($currentWords.length > 0 && $currentWords.map(words => words.join('')).includes($randomWord.join(''))) {
						$win = true
					} else if ($currentWords.length === $rows) {
						$lose = true
					}

					$current += 1

				} else {
					$message = 'Kelime bulunamadı'
				}
			}
		}
	})

	// ayarlar değişirse oyunu sıfırla
	$: if ($cols || $rows) {
		$currentWord = $currentWords = []
		$current = 0
	}

	// kelime uzunluğu değiştirse rastgele kelimeyi değiştir
	$: if ($cols) {
		$randomWord = $allWords[$cols][Math.floor(Math.random() * $allWords[$cols].length)].split('')
	}

	$: $lightMode ? document.body.classList.add('light') : document.body.classList.remove('light')

</script>

<div class="container">
    <Message/>
    <Header/>
    {#if $win}
        <Win/>
    {/if}
    {#if $lose}
        <Lose/>
    {/if}
    <Grid/>
    {#if $modal}
        <Modal/>
    {/if}
    <Keyboard keys={keys}/>
</div>

<style>
    .container {
        width: 500px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
