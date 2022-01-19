<script>
    import { modal, rows, cols } from "../../stores";
</script>

<header>
    <h6>NASIL OYNANIR?</h6>
    <button on:click={() => $modal = false}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
            <path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
    </button>
</header>

<p class="description">
    {$rows} denemede doğru <strong>KELİME</strong>'yi tahmin edin. <br><br>
    Her tahmin {$cols} harften oluşan geçerli bir kelime olmalı. Göndermek için "Enter" tuşuna basın. <br><br>
    Her tahmininizden sonra, kutulardaki renkler tahmininize ne kadar yaklaştığınızı gösterecek.
</p>

<div class="divider"></div>

<div class="examples">

    <section>
        <h5>Örnekler</h5>
        <div class="word">
            <div class="same">K</div>
            <div>A</div>
            <div>Ç</div>
            <div>A</div>
            <div>K</div>
        </div>

        <p>
            <strong>K</strong> harfi kelimede geçiyor ve doğru sırada.
        </p>
    </section>

    <section>
        <div class="word">
            <div>Ç</div>
            <div class="has">U</div>
            <div>K</div>
            <div>U</div>
            <div>R</div>
        </div>

        <p>
            <strong>U</strong> harfi kelimede geçiyor ancak sırası hatalı.
        </p>
    </section>

    <section>
        <div class="word">
            <div>K</div>
            <div>Ö</div>
            <div>P</div>
            <div class="no">E</div>
            <div>K</div>
        </div>

        <p>
            <strong>E</strong> harfi kelimede geçmiyor.
        </p>
    </section>

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
    .description {
        font-size: 13px;
        line-height: 1.5;
        margin-top: 25px;
    }
    .divider {
        height: 1px;
        background: var(--column);
        margin: 25px 0;
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
    .word div.has {
        background: var(--has);
        border-color: var(--has);
        color: #fff;
    }
    .word div.no {
        background: var(--no);
        border-color: var(--no);
        color: #fff;
    }
    .examples {
        display: grid;
        row-gap: 30px;
        font-size: 14px;
    }
    .examples h5 {
        font-size: 15px;
        margin-bottom: 15px;
    }
</style>
