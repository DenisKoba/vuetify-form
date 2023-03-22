<template>
  <div class="container">
    <v-card width="400" class="form">
      <form>
        <v-text-field
          v-model="state.password"
          :error-messages="validator.password.$errors.map(e => e.$message)"
          :counter="10"
          label="Password"
          required
          @input="validator.password.$touch"
          @blur="validator.password.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.email"
          :error-messages="validator.email.$errors.map(e => e.$message)"
          label="Email"
          required
          @input="validator.email.$touch"
          @blur="validator.email.$touch"
        ></v-text-field>

        <v-btn
          class="me-4"
          @click="validate"
        >
          Login
        </v-btn>
      </form>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import router from "@/router";

const initialState = reactive({
  password: '',
  email: '',
});

const state = reactive({
  ...initialState,
})

const rules = {
  password: { required, valid: (value: string) =>  value.length >= 6 },
  email: { required, email },
}

const validator = useVuelidate(rules, state)

async function validate(): Promise<void> {
  const isValid = await validator.value.$validate();

  if (isValid) {
    router.push('game');
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
}

.form {
  padding: 20px !important;
}
</style>
