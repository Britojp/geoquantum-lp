<template>
  <v-row class="mobile-grid">
    <v-col
      v-for="(card, idx) in cards"
      :key="card.title + idx"
      cols="12"
      md="6"
      lg="4"
      class="mb-6 mb-sm-4 mb-md-6"
    >
      <div
        class="tech-card animate-on-scroll mobile-card touch-optimized"
        :style="{ animationDelay: `${0.1 + idx * 0.1}s` }"
      >
        <div class="tech-card-image">
          <img :src="card.image" :alt="card.title" loading="lazy" />
          <div class="tech-card-chip">{{ card.chip }}</div>
        </div>
        <div class="tech-card-content">
          <h3 class="tech-card-title">{{ card.title }}</h3>
          <p class="tech-card-text">{{ card.description }}</p>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
type TechCard = { image: string; chip: string; title: string; description: string }
defineProps<{ cards: TechCard[] }>()
</script>

<style scoped>
.tech-card {
  overflow: hidden;
  border-radius: 12px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background: #ffffff;
  border: 1px solid rgba(26, 54, 93, 0.1);
}
.tech-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(26, 54, 93, 0.12);
}
.tech-card-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.tech-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.tech-card:hover .tech-card-image img {
  transform: scale(1.05);
}
.tech-card-chip {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #d4a574;
  color: #2e3a47;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}
.tech-card-content {
  padding: 16px;
}
.tech-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 6px;
}
.tech-card-text {
  color: #4a5568;
  font-size: 0.95rem;
}
@media (max-width: 600px) {
  .tech-card-chip {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
}
</style>
