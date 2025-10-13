<template>
  <div class="section-header">
    <h2 class="section-title">{{ title }}</h2>
    <div class="title-underline"></div>
    <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #1a365d;
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.title-underline {
  width: 4rem;
  height: 3px;
  background: linear-gradient(90deg, #1fa7a1 0%, #2d5a87 100%);
  border-radius: 2px;
  margin: 0 auto 1.25rem;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
}

/* Responsividade */
@media (min-width: 768px) {
  .section-title {
    font-size: 2.75rem;
  }

  .section-subtitle {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .section-title {
    font-size: 3.25rem;
  }

  .section-subtitle {
    font-size: 1.375rem;
  }
}

@media (max-width: 479px) {
  .section-header {
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }
}
</style>
