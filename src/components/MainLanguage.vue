<template>
    <div class="wrapper__language">
        <div class="wrapper__icon">
            <span>👅</span>
        </div>
        <span class="language" style="--t:.2s">UA</span>
        <span class="language" style="--t:.5s">RU</span>
    </div>
</template>

<script>
export default {
    name: 'MainLanguage'
}
</script>

<style lang="scss" scoped>
    .wrapper__icon{
        width: 38px;
        height: 38px;
        border: 1px solid #ffffff1e;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            cursor: pointer;
        }
    }
    .language{
        display: none;
        opacity: 0;
        padding-left: 10px;
        &:hover{
            cursor: pointer;
        }
    }

    .wrapper__language{
        position: absolute;
        top: 38px;
        left: 36px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .wrapper__language:hover .language{
        display: block;
        animation: languageAnim .2s linear both;
        animation-delay: var(--t);
    }
    @keyframes languageAnim {
      0% {opacity: 0; transform: translateX(-15px);}
      100% {opacity: 1; transform: translateX(0);}
    }
</style>