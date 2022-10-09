<template>
	<router-view class="router-view"/>
</template>


<style lang="scss">
*, *::after, *::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app{
    position: relative;
    height: 100%;
}

html, body{
    width: 100%;
    height: 100%;
    background: #BEBEBE;
	font-family: 'Grtsk Giga';
	color: #373737;
	overflow: hidden;
}

.router-view {
	height: 100%;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
        background: #FFCB46;
        animation: coverAnimation 1.5s linear both;
    }
}

@keyframes coverAnimation {
    0% {opacity: 0; transform: translateX(100%);}
    15% {opacity: 1; transform: translateX(0);}
    35% {opacity: 1; transform: translateX(0);}
    100% {transform: translateX(-100%);}
    
}
</style>
