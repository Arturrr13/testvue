<template>
    <div class="wrapper">
        <div class="wrapper__text">
            <div class="text">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
            <div class="text--2">FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainTextRun',
    props:{

    }
}
</script>

<style lang="scss" scoped>
    .wrapper{
        position: absolute;
        height: 100vh;
        width: 100%;
        overflow: hidden;
    }
    .wrapper__text{
        transform: rotate(-45deg);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    .text, .text--2{
        font-style: italic;
        font-weight: 700;
        font-size: 52px;
        line-height: 110%;
        text-transform: uppercase;
        opacity: 0.1;
        animation: runText 12s linear infinite;
        white-space: nowrap;
    }

    .text--2{
        rotate: 180deg;
    }

    @keyframes runText {
      0% {transform: translateX(105%);}
      100% {transform: translateX(-200%);}
    }

    @media  screen and (max-width:1000px){
        @keyframes runText {
          0% {transform: translateX(120%);}
          100% {transform: translateX(-350%);}
        }
    }

    @media  screen and (max-width:868px){
        @keyframes runText {
          0% {transform: translateX(120%);}
          100% {transform: translateX(-450%);}
        }
    }

    @media  screen and (max-width:560px){
        @keyframes runText {
          0% {transform: translateX(120%);}
          100% {transform: translateX(-650%);}
        }
    }
</style>