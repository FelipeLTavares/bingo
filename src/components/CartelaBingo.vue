<template>
  <v-card class="mx-auto" max-width="340px" min-width="340px">
    <v-card-title class="text-center">
      {{ playerName }}
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-row>
          <v-col v-for="letter in Object.keys(ticketNumbers)" cols="auto" style="width: 20%;">
            <v-sheet>
              {{ letter }}
            </v-sheet>
          </v-col>
        </v-row>

        <v-row v-for="(_, rowIndex) in 5" :key="rowIndex">
          <v-col v-for="col in Object.keys(ticketNumbers)" :key="col + rowIndex" cols="auto" style="width: 20%;">
            <v-sheet v-if="col === 'N' && rowIndex === 2">
              <v-icon icon="mdi-star" />
            </v-sheet>
            <v-sheet v-else :class="{ selected: props.selecteds.includes(ticketNumbers[col][rowIndex]) }">
              {{ ticketNumbers[col][rowIndex] }}
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">

const props = defineProps({
  ticketNumbers: {
    type: Object,
    default: []
  },
  playerName: {
    type: String,
    default: "Anonymous Player"
  },
  selecteds: {
    type: Array<Number>,
    default: []
  }
});

</script>

<style scoped>
.v-sheet {
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 10px; */
  border: 1px solid #ccc;
  /* border-radius: 4px; */
  /* min-height: 40px; */
  /* width: 100%; */
}

.selected {
  background-color: #4caf50;
  color: white;
}
</style>
