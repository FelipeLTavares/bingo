<template>
    <DefaultLayout>
        <v-container class="mt-5">
          <v-row class="d-flex justify-center mb-4">
            <v-col cols="12" md="8">
              <h2 class="text-center">B I N G O</h2>
            </v-col>
          </v-row>
      
          <v-row class="d-flex justify-center mb-4">
            <v-col cols="12" md="4">
              <v-btn class="mx-auto d-block" @click="handleNewNumber" color="primary" :disabled="game?.finished">
                CALL A NUMBER
              </v-btn>
            </v-col>
          </v-row>
      
          <v-row v-if="game?.finished" class="mb-4">
            <v-col cols="12">
              <h2 class="text-center">WINNER(S):</h2>
            </v-col>
            <v-col cols="12" v-for="winner in game.winners" :key="winner.name" class="mb-2">
              <v-sheet class="pa-3 text-center winner-card">
                {{ winner.name }}
              </v-sheet>
            </v-col>
          </v-row>
      
          <v-card class="mb-4">
            <v-card-title>
              <v-row class="d-flex justify-center align-center">
                <v-col cols="12" md="6" class="text-center">
                  Last called number:
                </v-col>
                <v-col cols="12" md="6" class="text-center">
                  <v-sheet class="number-display">
                    {{ currentNumber || game?.lastNumber }}
                  </v-sheet>
                </v-col>
              </v-row>
            </v-card-title>
          </v-card>
      
          <v-card class="mb-4">
            <v-card-text>
              <v-row class="d-flex justify-center">
                <v-col cols="12">
                  <v-row>
                    <v-col cols="2" v-for="n in 75" :key="n" class="d-flex justify-center">
                      <v-sheet
                        class="number-cell"
                        :class="{ 'selected-number': game?.drawnNumbers.includes(n) }"
                      >
                        {{ n }}
                      </v-sheet>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
      
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="8">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                  v-for="(player, index) in game?.players"
                  :key="index"
                  class="mb-4"
                >
                  <CartelaBingo
                    :player-name="player.name"
                    :ticket-numbers="player.ticketNumbers"
                    :selecteds="game?.drawnNumbers"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
    </DefaultLayout>
  </template>
  
  <script setup lang="ts">
  import CartelaBingo from '@/components/CartelaBingo.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
  import { indexedDbService } from '@/services/indexedDbService';
  import { IGame, IPlayer } from '@/types';
  import { selectRandomNumber } from '@/utils/selectRandomNumber';
  import { onBeforeUnmount, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const id = route.params.id;
  
  const game = ref<IGame>();
  const currentNumber = ref(null);
  let timer: any = null;
  
  const getGameData = async () => {
      const foundedGame = await indexedDbService.getOneGame(+id);
      if (foundedGame) game.value = foundedGame;
  }
  
  const verifyTicketIsWinner = (player: IPlayer) => {
      const numeros = Object.values(player.ticketNumbers).flatMap((el) => el).filter(el => el);
      let isWinner = true;
      for (let numero of numeros) {
          if (!isWinner) {
              break;
          };
          isWinner = !!game.value?.drawnNumbers.includes(numero);
      }
      return isWinner;
  };
  
  const handleNewNumber = () => {
      if (!game?.value) return;
      if (game.value.winners?.length > 0) return;
  
      const newNumber = selectRandomNumber(game.value?.drawnNumbers || []);
      game.value.drawnNumbers.push(newNumber);
      game.value.drawnNumbers = [...game.value?.drawnNumbers || []];
      currentNumber.value = newNumber;
  
      game.value.players.forEach((player) => {
          if (verifyTicketIsWinner(player)) {
              game.value?.winners.push(player);
          }
      })
  
      if (game.value.drawnNumbers.length > 75) {
          clearInterval(timer);
      }
  
      indexedDbService.updateGame(Number(game.value.id), {
          ...game.value,
          winners: [...game.value.winners],
          finished: game.value.winners.length > 0,
          drawnNumbers: [...game.value.drawnNumbers || []],
          lastNumber: newNumber,
      })
  
      if (game.value.winners.length > 0) {
          window.alert(`BINGO!!! Vencedor(es): ${game.value.winners.map((winner: IPlayer) => winner.name)}`);
          clearInterval(timer);
      }
  }
  
  onBeforeUnmount(() => clearInterval(timer));
  
  onMounted(() => getGameData())
  </script>
  
  <style scoped>
  .winner-card {
    background-color: #f0f8ff;
    font-size: 18px;
    font-weight: bold;
  }
  
  .number-display {
    font-size: 3rem;
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
  }
  
  .number-cell {
    padding: 10px;
    text-align: center;
    border: 1px solid #e0e0e0;
    font-size: 18px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .selected-number {
    background-color: #4caf50;
    color: white;
  }
  
  @media (max-width: 600px) {
    .number-display {
      font-size: 2rem;
    }
  
    .number-cell {
      font-size: 14px;
      min-width: 30px;
      min-height: 30px;
    }
  
    .winner-card {
      font-size: 16px;
    }
  }
  </style>
  