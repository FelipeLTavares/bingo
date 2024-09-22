<template>
    <DefaultLayout>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card>
                    <v-card-title>Setup a new game</v-card-title>

                    <v-card-text>
                        <v-form @submit.prevent="startGame">
                            <v-text-field v-model="gameNickname" label="Game name" required></v-text-field>

                            <v-text-field v-model="playerName" label="New player name"></v-text-field>

                            <v-btn @click="addPlayer" color="primary" class="mt-3">
                                Add new player
                            </v-btn>

                            <v-container v-if="!!players.length" class="d-flex flex-wrap ga-6 justify-sm-start" >
                                <CartelaBingo v-for="player in players" :player-name="player.name" :ticket-numbers="player.ticketNumbers"
                                :key="player.name"></CartelaBingo>
                            </v-container>
                        </v-form>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="success" class="mt-3" @click="startGame">START GAME</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </DefaultLayout>
</template>

<script setup lang="ts">
import CartelaBingo from '@/components/CartelaBingo.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
import router from '@/router';
import { GameService } from '@/services/gameService';
import { IPlayer } from '@/types';
import { generateBingoTicket } from '@/utils/generateTicket';
import { ref } from 'vue';

const gameNickname = ref<string>('');
const playerName = ref<string>('');
const players = ref<IPlayer[]>([]);

const addPlayer = () => {
  if (playerName.value !== "") {
    const name: string = playerName.value;
    const ticketNumbers = generateBingoTicket();
    const newPlayer = {
      name: `${name}`,
      ticketNumbers: { ...ticketNumbers }
    };
    players.value.push(newPlayer);
    playerName.value = "";
  }
};

let startGame = async () => {
  if (players.value.length < 2) return window.alert('São necessários pelo menos 2 jogadores!');

  const gameService = new GameService();
  const dexieId = await gameService.addGame({
    gameNickname: gameNickname.value,
    finished: false,
    drawnNumbers: [],
    players: [...players.value],
    winners: [],
  });

  if (dexieId) {
    router.push(`/games/${dexieId}`)
  }
};
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>