<template>
  <div class="container">
    <v-card width="400" class="card">
      <div>
        <v-text-field id="sizeX" v-model="sizeX" />
      </div>
      <div>
        <v-text-field id="sizeY" v-model="sizeY" />
      </div>
    </v-card>
    <div class="grid">
      <div v-for="i in +sizeY" :key="i" class="row">
        <div v-for="j in +sizeX" :key="j" class="square"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const sizeX = ref(0)
const sizeY = ref(0)
</script>

<style>
.card {
  width: 200px;
  height: 200px;
  padding: 20px !important;
  position: absolute !important;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
}

.grid {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.square {
  width: 36px;
  height: 36px;
  background-color: white;
  margin: 2px;
  transition: .3s;
}

.square:hover {
  background-color: blue;
}
</style>
