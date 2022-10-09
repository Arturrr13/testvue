<template>
    <div class="wrapper__menu">
        <ul>
            <li>
                <router-link rel="nofollow" to="/where" data-content="where?">
                    where?
                </router-link>
            </li>
            <li>
                <router-link rel="nofollow" to="/what" data-content="what?">
                    what?
                </router-link>
            </li>
            <li>
                <router-link rel="nofollow" to="/who" data-content="who?">
                    who?
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MainMenu'
}
</script>

<style lang="scss" scoped>
    li{
        position: absolute;
        list-style: none;
    }
    li:nth-child(1){
        transform: rotate(-90deg);
        top: 50%;
        left: 0;
    }
    li:nth-child(2){
        transform: rotate(90deg);
        top: 50%;
        right: 0;
    }
    li:nth-child(3){
        bottom: 19px;
        right: calc(50% - 67px);
    }
    a {
        position: relative;
        display: inline-block;
        color: #373737;
        font-size: 16px;
        font-weight: 600;
        line-height: 140%;
        text-decoration: none;
        overflow: hidden;
        &::before {
          position: absolute;
          content: attr(data-content);
          top: 0;
          left: 0;
          width: 0;
          color: rgb(255, 255, 255);
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          transition: width 275ms ease;
        }
        &:hover::before {
          width: 100%;
          text-decoration: underline;
          cursor: pointer;
        }
    }

    @media  screen and (max-width:1230px){
        li:nth-child(1){
            left: -10px;
        }
        li:nth-child(2){
            right: -10px;
        }
        li:nth-child(3){
            bottom: 10px;
        }
    }

    @media  screen and (max-width:768px){
        .wrapper__menu{
            display: none;
        }
    }
</style>