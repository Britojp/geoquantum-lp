<template>
  <div class="responsive-example">
    <h2 class="text-h3 mb-6">Exemplo de Responsividade</h2>
    
    <!-- Grid responsivo -->
    <div class="responsive-grid mb-8">
      <v-card class="pa-4">
        <h3>Card 1</h3>
        <p>Este card se adapta automaticamente ao tamanho da tela</p>
      </v-card>
      <v-card class="pa-4">
        <h3>Card 2</h3>
        <p>Grid responsivo com 1-4 colunas dependendo do breakpoint</p>
      </v-card>
      <v-card class="pa-4">
        <h3>Card 3</h3>
        <p>Funciona perfeitamente em todos os dispositivos</p>
      </v-card>
      <v-card class="pa-4">
        <h3>Card 4</h3>
        <p>Layout adaptativo e responsivo</p>
      </v-card>
    </div>
    
    <!-- Visibilidade responsiva -->
    <div class="mb-8">
      <h3 class="mb-4">Visibilidade por Breakpoint</h3>
      
      <div class="d-xs-block d-sm-none pa-4 bg-primary text-white rounded">
        Visível apenas em mobile (xs)
      </div>
      
      <div class="d-none d-sm-block d-md-none pa-4 bg-secondary text-white rounded">
        Visível apenas em smartphone grande (sm)
      </div>
      
      <div class="d-none d-md-block d-lg-none pa-4 bg-accent text-white rounded">
        Visível apenas em tablet (md)
      </div>
      
      <div class="d-none d-lg-block pa-4 bg-dark text-white rounded">
        Visível apenas em desktop (lg+)
      </div>
    </div>
    
    <!-- Container responsivo -->
    <div class="responsive-container mb-8">
      <v-card class="pa-6">
        <h3>Container Responsivo</h3>
        <p>Este container se adapta automaticamente à largura da tela, mantendo margens apropriadas em todos os dispositivos.</p>
      </v-card>
    </div>
    
    <!-- Flex responsivo -->
    <div class="responsive-flex mb-8">
      <v-card class="pa-4 flex-1">
        <h3>Coluna 1</h3>
        <p>Em mobile: coluna única</p>
        <p>Em desktop: lado a lado</p>
      </v-card>
      <v-card class="pa-4 flex-1">
        <h3>Coluna 2</h3>
        <p>Layout flexível que se adapta</p>
        <p>Perfeito para formulários e layouts</p>
      </v-card>
    </div>
    
    <!-- Informações da tela -->
    <v-card class="pa-6 bg-grey-lighten-4">
      <h3>Informações da Tela</h3>
      <div class="mt-4">
        <p><strong>Largura:</strong> {{ screenSize.width }}px</p>
        <p><strong>Altura:</strong> {{ screenSize.height }}px</p>
        <p><strong>Breakpoint:</strong> {{ screenSize.breakpoint }}</p>
        <p><strong>Dispositivo:</strong> {{ deviceType }}</p>
        <p><strong>Orientação:</strong> {{ screenSize.orientation }}</p>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useResponsive } from '@/composables/useResponsive'

const { screenSize } = useResponsive()

const deviceType = computed(() => {
  if (screenSize.value.isMobile) return 'Mobile'
  if (screenSize.value.isTablet) return 'Tablet'
  if (screenSize.value.isDesktop) return 'Desktop'
  return 'Large Desktop'
})
</script>

<style scoped>
.responsive-example {
  padding: 2rem;
}

.flex-1 {
  flex: 1;
}

@media (max-width: 768px) {
  .responsive-example {
    padding: 1rem;
  }
}
</style> 