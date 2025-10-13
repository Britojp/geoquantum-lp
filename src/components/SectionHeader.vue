<template>
  <div class="section-header" :class="align">
    <div v-if="badge" class="header-badge">
      <i v-if="badgeIcon" :class="badgeIcon"></i>
      <span>{{ badge }}</span>
    </div>

    <h2 class="header-title">{{ title }}</h2>
    
    <div v-if="subtitle" class="title-underline"></div>
    
    <p v-if="subtitle" class="header-subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  badge?: string
  badgeIcon?: string
  align?: 'left' | 'center' | 'right'
}

withDefaults(defineProps<Props>(), {
  align: 'center',
})
</script>

<style scoped>
.section-header {
  margin-bottom: 3rem;
}

.section-header.left {
  text-align: left;
}

.section-header.center {
  text-align: center;
}

.section-header.right {
  text-align: right;
}

.header-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(31, 167, 161, 0.1);
  border: 1px solid rgba(31, 167, 161, 0.25);
  border-radius: 1.5rem;
  color: #1a365d;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.25rem;
}

.header-badge i {
  font-size: 1rem;
  color: #1fa7a1;
}

.header-title {
  font-size: 2rem;
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

.section-header.left .title-underline {
  margin: 0 0 1.25rem 0;
}

.section-header.right .title-underline {
  margin: 0 0 1.25rem auto;
}

.header-subtitle {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
}

.section-header.left .header-subtitle {
  margin: 0;
}

.section-header.right .header-subtitle {
  margin: 0 0 0 auto;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 4rem;
  }

  .header-badge {
    font-size: 0.9375rem;
    padding: 0.625rem 1.25rem;
  }

  .header-title {
    font-size: 2.5rem;
  }

  .title-underline {
    width: 5rem;
  }

  .header-subtitle {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .header-title {
    font-size: 2.75rem;
  }
}

@media (max-width: 479px) {
  .section-header {
    margin-bottom: 2rem;
  }

  .header-badge {
    font-size: 0.8125rem;
    padding: 0.5rem 0.875rem;
  }

  .header-title {
    font-size: 1.75rem;
  }

  .title-underline {
    width: 3rem;
    height: 2px;
  }

  .header-subtitle {
    font-size: 0.9375rem;
  }
}
</style>
