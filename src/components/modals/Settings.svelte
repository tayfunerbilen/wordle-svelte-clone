<script>
	import {lightMode, modal, rows, cols} from "../../stores";
</script>

<div class="modal-content">
    <header>
        <h6>AYARLAR</h6>
        <button on:click={() => $modal = false}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
        </button>
    </header>

    <div class="settings">
        <section>
            <div>
                <h6>Açık Tema</h6>
                <p>Gözüm gönlüm açılsın diyenlere!</p>
            </div>
            <button on:click={() => $lightMode = !$lightMode} class:checked={$lightMode} class="checkbox"></button>
        </section>
        <section>
            <div>
                <h6>Deneme Sayısı</h6>
                <p>Kelimeyi kaç denemede bulabilirsin?</p>
            </div>
            <div class="range">
                <strong>{$rows}</strong>
                <input on:input={e => $rows = parseInt(e.target.value)} type="range" min="2" max="8" value={$rows}>
            </div>
        </section>
        <section>
            <div>
                <h6>Kelime Uzunluğu</h6>
                <p>Tahmin edeceğiniz kelime kaç harfli olsun?</p>
            </div>
            <div class="range">
                <strong>{$cols}</strong>
                <input on:input={e => $cols = parseInt(e.target.value)} type="range" min="4" max="6" value={$cols}>
            </div>
        </section>
    </div>

    <p class="copyright">
        Orijinali <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">WORDLE</a> olan kelime tahmin oyunu <a href="https://twitter.com/tayfunerbilen">tarafımca</a> Svelte kullanılarak oluşturulmuştur.
    </p>
</div>

<style>
    header {
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: space-between;
    }
    header h6 {
        font-size: 16px;
        font-weight: 600;
        margin: 0 auto;
    }
    header button {
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
    }
    header button svg {
        fill: var(--text)
    }

    .settings section {
        display: flex;
        border-bottom: 1px solid var(--column);
        padding: 15px 0;
        justify-content: space-between;
        align-items: center;
    }
    .settings section h6 {
        font-size: 18px;
        font-weight: 500;
        opacity: .6;
    }
    .settings section p {
        font-size: 13px;
        opacity: .3;
        margin-top: 4px;
    }
    .settings section .checkbox {
        width: 32px;
        height: 20px;
        background: var(--column-highlight);
        border-radius: 20px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 2px;
        transition: 300ms all;
    }
    .settings section .checkbox::before {
        content: '';
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        transition: 300ms all;
    }
    .settings section .checkbox.checked {
        background: var(--same);
    }
    .settings section .checkbox.checked::before {
        transform: translateX(12px);
    }
    .settings section .range {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
    }
    .modal-content {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .copyright {
        font-size: 12px;
        margin-top: auto;
        padding-bottom: 20px;
        text-align: center;
    }
    .copyright a {
        color: var(--text);
        font-weight: bold;
        text-decoration: underline wavy;
    }
</style>
