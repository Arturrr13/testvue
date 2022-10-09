<template>
    <div class="burger__nav">
                <div class="menuToggle"  @click="toggleActive"></div>
                <div class="menu">
                    <div>
                        <ul>
                            <li>
                                <router-link rel="nofollow" to="/where" data-content="where?" class="anchor">
                                    where?
                                </router-link>
                            </li>
                            <li>
                                <router-link rel="nofollow" to="/what" data-content="what?" class="anchor">
                                    what?
                                </router-link>
                            </li>
                            <li>
                                <router-link rel="nofollow" to="/who" data-content="who?" class="anchor">
                                    who?
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    name: 'MainBurger',
    methods:{
        toggleActive(){
            document.querySelector('.burger__nav').classList.toggle('active') 
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .burger__nav{
        display: none;
        position: absolute;
        z-index: 90;
        right: 0;
        width: 100px;
        height: 59px;
        background: #805efb00;
        transition: height .5s, width .5s;
        transition-delay: 0s, 0.75s;
        overflow: hidden;
        &.active{
            width: 300px;
            height: 215px;
            position: fixed;
            border-radius: 10px;
            top: 0;
            transition: width .5s, height .5s;
            transition-delay: 0s, .75s;
            background: #FFCB46;
            .menu{
                background: #08007a00;
                div .anchor{
                    color: #373737;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 140%;
                }
                div .anchor:hover{
                    color: rgb(255, 255, 255);
                }
                div ul{
                    margin: 20px 0;
                    li{
                        margin-bottom: 10px;
                    }
                }
            }
        }
        .menuToggle{
            position: relative;
            padding-right: 10px;
            width: 100%;
            height: 60px;
            cursor: pointer;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            overflow: hidden;
            &::before{
                content: '';
                position: absolute;
                width: 32px;
                height: 2px;
                background: whitesmoke;
                transform: translateY(-10px);
                box-shadow: 0 10px whitesmoke;
                transition: 0.5s;
            }
            &::after{
                content: '';
                position: absolute;
                width: 32px;
                height: 2px;
                background: whitesmoke;
                transform: translateY(10px);
                transition: 0.5s;
            }
        }
        &.active .menuToggle::before{
            transform: translate(0px) rotate(45deg);
            box-shadow: 0 0 whitesmoke;
            background: #373737;
        }
        &.active .menuToggle::after{
            transform: translate(0px) rotate(-45deg);
            background: #373737;
        }
        .menu{
            width: 100%;
            padding: 0 15px;
            background: #FFCB46;
            .social{
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                flex-direction: row;
                gap: 15px;
            }
        }
    }

    @media  screen and (max-width:768px){
        .burger__nav{
            display: block;
        }
    }
</style>