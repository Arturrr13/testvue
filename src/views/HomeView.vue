<template>
	<div class="home">
		<main-burger />
		<main-text-run />
		<main-language />
		<main-logo />
		<main-content />
		<main-menu />
	</div>
</template>

<script>
import MainLogo from '@/components/MainLogo.vue';
import MainLanguage from '@/components/MainLanguage.vue';
import MainContent from '@/components/MainContent.vue';
import MainMenu from '@/components/MainMenu.vue';
import MainTextRun from '@/components/MainTextRun.vue';
import MainBurger from '@/components/MainBurger.vue';

export default {
  name: 'HomeView',
  components: { MainLogo, MainLanguage, MainContent, MainMenu, MainTextRun, MainBurger }
}
</script>
