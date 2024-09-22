<template>
    <DefaultLayout>
        <v-container class="mt-5">
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card>
                        <v-card-title class="headline text-center">
                            Games
                        </v-card-title>
                        <v-card-text>
                            <v-list two-line>
                                <v-list-item v-for="game in games" :key="game.id" @click="goToGame(game.id as string)"
                                    class="hoverable">
                                    <v-list-item-content>
                                        <v-list-item-title style="font-weight: bold;">{{ game.gameNickname }}</v-list-item-title>
                                        <v-list-item-subtitle>ID: {{ game.id }}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </DefaultLayout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { GameService } from '@/services/gameService';
import DefaultLayout from '@/components/DefaultLayout.vue';

const games = ref<any>([]);

//
const getAllgames = async () => {
    const gameService = new GameService();
    const allGames = await gameService.getAllGames();
    games.value = allGames
}

const router = useRouter();

const goToGame = (id: string) => {
    router.push(`/games/${id}`);
};

onMounted(() => { getAllgames() })
</script>

<style scoped>
.hoverable {
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.hoverable:hover {
    background-color: #f5f5f5;
}
</style>