<template>
    <v-layout>
      <v-app-bar color="surface-variant" title="Application bar">
        <!-- <v-btn @click="toggleTheme">toggle theme</v-btn> -->
      </v-app-bar>
  
      <v-main class="d-flex align-center  flex-column" style="min-height: 300px;">
        <v-container>
          <v-row class="d-flex align-center">
            <v-col>
              <v-text-field v-model="playerNameInput" hide-details="auto" label="Insert player name" clearable />
            </v-col>
            <v-col class="d-flex align-center">
              <v-btn icon color="indigo-darken-3" @click="generateTicket">
                <v-icon icon="mdi-plus" />
              </v-btn>
            </v-col>
          </v-row>
  
          <v-row>
            <v-btn color="green" @click="startGame">
              COMEÇAR
            </v-btn>
          </v-row>
  
          <v-row class="d-flex ga-4 pa-2 justify-center justify-space-around">
            <CartelaBingo v-for="player in players" :player-name="player.name" :ticket-numbers="player.ticketNumbers"
              :key="player.name"></CartelaBingo>
          </v-row>
        </v-container>
  
      </v-main>
    </v-layout>
  </template>
  
  <script lang="ts" setup>
  // import { useTheme } from 'vuetify';
  import { ref } from 'vue';
  import { generateBingoTicket } from '@/utils/generateTicket';
  import router from '@/router';
  import { IPlayer } from '@/types';
  import CartelaBingo from '@/components/CartelaBingo.vue';
  import { indexedDbService } from '@/services/indexedDbService';
  
  // const theme = useTheme()
  
  // function toggleTheme() {
  //   theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // }
  
  const players = ref<IPlayer[]>([]);
  let playerNameInput = ref<string>("");
  
  const generateTicket = () => {
    if (playerNameInput.value !== "") {
      const name: string = playerNameInput.value;
      const ticketNumbers = generateBingoTicket();
      const newPlayer = {
        name: `${name}`,
        ticketNumbers: { ...ticketNumbers }
      };
      players.value.push(newPlayer);
      playerNameInput.value = "";
    }
  };
  
  let startGame = async () => {
    if (players.value.length < 2) return window.alert('São necessários pelo menos 2 jogadores!');
  
    const dexieId = await indexedDbService.addGame({
      finished: false,
      drawnNumbers: [],
      players: [...players.value],
      winners: [],
      gameNickname: '',
    });
  
    if (dexieId) {
      router.push(`/jogo/${dexieId}`)
    }
  };
  
  </script>