<template>
  <DefaultLayout>
    <v-container class="mt-5 text-center">
      <h1>Bem-vindo ao Bingo!</h1>
      <v-row class="mt-4" justify="center">
        <v-col cols="12" md="4">
          <v-btn class="mx-auto d-block" color="primary" @click="goToNewGame" width="100%">
            NEW GAME
          </v-btn>
        </v-col>
        <v-col cols="12" md="4" class="mt-3 mt-md-0">
          <v-btn class="mx-auto d-block" color="secondary" @click="goToSavedGames" width="100%">
            SAVED GAMES
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/components/DefaultLayout.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToNewGame = () => {
  router.push('/new-game');
};

const goToSavedGames = () => {
  router.push('/games');
};
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.v-btn {
  font-size: 1.2rem;
}
</style>
