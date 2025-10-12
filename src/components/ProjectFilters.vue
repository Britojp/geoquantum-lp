<template>
  <section class="filters-section py-12 py-sm-10 py-md-12">
    <v-container class="mobile-padding">
      <div class="filters-container">
        <div class="filters-header">
          <div class="header-icon">
            <i class="mdi mdi-filter-variant"></i>
          </div>
          <div class="header-content">
            <h3 class="filters-title">Filtrar Projetos</h3>
            <p class="filters-subtitle">Encontre exatamente o que procura</p>
          </div>
        </div>

        <v-row align="center" class="filters-row">
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              v-model="localSearch"
              label="Buscar projetos..."
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              clearable
              density="comfortable"
              @update:model-value="handleSearchChange"
              class="search-field"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="localCategory"
              label="Categoria"
              :items="categories"
              variant="outlined"
              clearable
              density="comfortable"
              @update:model-value="handleCategoryChange"
              class="category-field"
              hide-details
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              v-model="localTechnology"
              label="Tecnologia"
              :items="technologies"
              variant="outlined"
              clearable
              density="comfortable"
              @update:model-value="handleTechnologyChange"
              class="tech-field"
              hide-details
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-btn
              color="primary"
              variant="elevated"
              @click="handleReset"
              block
              size="large"
              class="reset-btn"
            >
              <i class="mdi mdi-refresh"></i>
              Limpar
            </v-btn>
          </v-col>
        </v-row>

        <div class="active-filters" v-if="hasActiveFilters">
          <div class="active-filters-label">
            <i class="mdi mdi-filter-check"></i>
            <span>Filtros ativos:</span>
          </div>
          <div class="filters-chips">
            <v-chip
              v-if="localSearch"
              closable
              @click:close="clearSearch"
              color="primary"
              variant="outlined"
              size="small"
            >
              <i class="mdi mdi-magnify"></i>
              {{ localSearch }}
            </v-chip>
            <v-chip
              v-if="localCategory"
              closable
              @click:close="clearCategory"
              color="secondary"
              variant="outlined"
              size="small"
            >
              <i class="mdi mdi-tag"></i>
              {{ localCategory }}
            </v-chip>
            <v-chip
              v-if="localTechnology"
              closable
              @click:close="clearTechnology"
              color="info"
              variant="outlined"
              size="small"
            >
              <i class="mdi mdi-code-tags"></i>
              {{ localTechnology }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  categories: string[]
  technologies: string[]
  searchQuery: string
  selectedCategory: string
  selectedTechnology: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:searchQuery': [value: string]
  'update:selectedCategory': [value: string]
  'update:selectedTechnology': [value: string]
  reset: []
}>()

const localSearch = ref(props.searchQuery)
const localCategory = ref(props.selectedCategory)
const localTechnology = ref(props.selectedTechnology)

const hasActiveFilters = computed(() => {
  return !!(localSearch.value || localCategory.value || localTechnology.value)
})

const handleSearchChange = () => {
  emit('update:searchQuery', localSearch.value)
}

const handleCategoryChange = () => {
  emit('update:selectedCategory', localCategory.value)
}

const handleTechnologyChange = () => {
  emit('update:selectedTechnology', localTechnology.value)
}

const clearSearch = () => {
  localSearch.value = ''
  handleSearchChange()
}

const clearCategory = () => {
  localCategory.value = ''
  handleCategoryChange()
}

const clearTechnology = () => {
  localTechnology.value = ''
  handleTechnologyChange()
}

const handleReset = () => {
  localSearch.value = ''
  localCategory.value = ''
  localTechnology.value = ''
  emit('reset')
}
</script>

<style scoped>
.filters-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(26, 54, 93, 0.08);
}

.mobile-padding {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 600px) {
  .mobile-padding {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 960px) {
  .mobile-padding {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.filters-container {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  padding: 28px;
  box-shadow:
    0 4px 20px rgba(26, 54, 93, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(26, 54, 93, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.filters-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(26, 54, 93, 0.08);
}

.header-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #1a365d 0%, #2d5a87 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(26, 54, 93, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-icon:hover {
  transform: scale(1.1) rotate(5deg);
  box-shadow: 0 6px 20px rgba(26, 54, 93, 0.3);
}

.header-icon i {
  font-size: 24px;
  color: white;
}

.header-content {
  flex: 1;
}

.filters-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 4px 0;
}

.filters-subtitle {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

.filters-row {
  margin: 0;
}

.reset-btn {
  height: 56px !important;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.reset-btn i {
  margin-right: 8px;
  font-size: 20px;
}

.active-filters {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(26, 54, 93, 0.08);
}

.active-filters-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #1a365d;
  font-weight: 600;
  font-size: 0.9rem;
}

.active-filters-label i {
  font-size: 18px;
}

.filters-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filters-chips :deep(.v-chip) {
  font-weight: 500;
}

.filters-chips :deep(.v-chip i) {
  margin-right: 6px;
  font-size: 16px;
}

@media (max-width: 599.98px) {
  .filters-container {
    padding: 20px;
    border-radius: 20px;
  }

  .filters-header {
    margin-bottom: 20px;
    padding-bottom: 16px;
  }

  .header-icon {
    width: 45px;
    height: 45px;
  }

  .header-icon i {
    font-size: 22px;
  }

  .filters-title {
    font-size: 1.15rem;
  }

  .filters-subtitle {
    font-size: 0.85rem;
  }

  .reset-btn {
    height: 52px !important;
  }
}
</style>
