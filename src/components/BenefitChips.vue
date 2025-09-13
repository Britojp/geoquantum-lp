<template>
  <div class="benefits" :class="{ center }">
    <div class="benefit" v-for="(b, idx) in items" :key="idx">
      <v-icon color="accent" size="20">{{ b.icon }}</v-icon>
      <span>{{ b.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
type Benefit = { icon: string; text: string }
defineProps<{ items: Benefit[]; center?: boolean }>()
</script>

<style scoped>
.benefits {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.benefits.center {
  justify-content: center;
}
.benefit {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a365d;
  background: rgba(26, 54, 93, 0.06);
  border: 1px solid rgba(26, 54, 93, 0.12);
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 600;
}
</style>
