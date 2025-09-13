# Sistema Responsivo GeoQuantum

## Visão Geral

O sistema responsivo da GeoQuantum foi projetado para garantir que o site funcione perfeitamente em todos os tamanhos de tela, desde smartphones até monitores de alta resolução.

## Breakpoints

### Padrão Bootstrap 5
- **xs**: 0px - 575.98px (Smartphones pequenos)
- **sm**: 576px - 767.98px (Smartphones grandes)
- **md**: 768px - 991.98px (Tablets)
- **lg**: 992px - 1199.98px (Desktops pequenos)
- **xl**: 1200px - 1399.98px (Desktops grandes)
- **xxl**: 1400px+ (Monitores de alta resolução)

## Classes Utilitárias

### Visibilidade
```html
<!-- Ocultar em mobile -->
<div class="d-xs-none d-sm-block">Conteúdo visível apenas em telas maiores</div>

<!-- Mostrar apenas em desktop -->
<div class="d-lg-block d-md-none">Conteúdo apenas em desktop</div>

<!-- Centralizar em mobile -->
<div class="text-xs-center text-md-left">Texto centralizado em mobile</div>
```

### Grid Responsivo
```html
<!-- Grid que se adapta automaticamente -->
<div class="responsive-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Container responsivo -->
<div class="responsive-container">
  Conteúdo centralizado com largura máxima
</div>
```

### Flexbox Responsivo
```html
<!-- Flex que vira coluna em mobile -->
<div class="responsive-flex">
  <div>Coluna 1</div>
  <div>Coluna 2</div>
</div>
```

## Hook Vue (Composition API)

### useResponsive()
```typescript
import { useResponsive } from '@/composables/useResponsive'

export default {
  setup() {
    const { 
      screenSize, 
      isMobile, 
      isTablet, 
      isDesktop,
      isBreakpoint,
      isBreakpointUp,
      isBreakpointDown 
    } = useResponsive()

    return {
      screenSize,
      isMobile,
      isTablet,
      isDesktop,
      isBreakpoint,
      isBreakpointUp,
      isBreakpointDown
    }
  }
}
```

### Uso no Template
```vue
<template>
  <div>
    <!-- Conteúdo condicional baseado no tamanho da tela -->
    <div v-if="isMobile">Versão Mobile</div>
    <div v-else-if="isTablet">Versão Tablet</div>
    <div v-else>Versão Desktop</div>
    
    <!-- Informações da tela -->
    <p>Largura: {{ screenSize.width }}px</p>
    <p>Breakpoint: {{ screenSize.breakpoint }}</p>
    <p>Orientação: {{ screenSize.orientation }}</p>
  </div>
</template>
```

## Diretivas Vue

### v-responsive
```vue
<template>
  <!-- Mostrar apenas em breakpoints específicos -->
  <div v-responsive="{ show: ['md', 'lg'], hide: ['xs', 'sm'] }">
    Conteúdo apenas em tablets e desktops
  </div>
  
  <!-- Ocultar em breakpoints específicos -->
  <div v-responsive="{ show: ['xs', 'sm'], hide: ['md', 'lg'] }">
    Conteúdo apenas em mobile
  </div>
</template>
```

### v-orientation
```vue
<template>
  <!-- Classes diferentes para cada orientação -->
  <div v-orientation="{ 
    portrait: ['portrait-layout'], 
    landscape: ['landscape-layout'] 
  }">
    Layout adaptativo
  </div>
</template>
```

### v-accessibility
```vue
<template>
  <!-- Suporte para acessibilidade -->
  <div v-accessibility="{ 
    reducedMotion: true, 
    highContrast: true, 
    darkMode: true 
  }">
    Conteúdo acessível
  </div>
</template>
```

## Mixins SCSS

### respond-to()
```scss
.my-component {
  @include respond-to(xs) {
    font-size: 14px;
    padding: 10px;
  }
  
  @include respond-to(sm) {
    font-size: 16px;
    padding: 15px;
  }
  
  @include respond-to(md) {
    font-size: 18px;
    padding: 20px;
  }
  
  @include respond-to(lg) {
    font-size: 20px;
    padding: 25px;
  }
  
  @include respond-to(xl) {
    font-size: 22px;
    padding: 30px;
  }
}
```

### orientation()
```scss
.my-component {
  @include orientation(portrait) {
    flex-direction: column;
  }
  
  @include orientation(landscape) {
    flex-direction: row;
  }
}
```

### accessibility()
```scss
.my-component {
  @include accessibility(reduced-motion) {
    transition: none;
    animation: none;
  }
  
  @include accessibility(high-contrast) {
    border: 2px solid;
  }
  
  @include accessibility(dark-mode) {
    background: #121212;
    color: #ffffff;
  }
}
```

## Tipografia Responsiva

### Classes Automáticas
```html
<!-- Tamanhos que se adaptam automaticamente -->
<h1 class="text-h1">Título Principal</h1>
<h2 class="text-h2">Subtítulo</h2>
<p class="text-body-1">Texto do corpo</p>
<p class="text-body-2">Texto secundário</p>
```

### Valores CSS
```css
/* Exemplo de como funciona internamente */
.text-h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
}

.text-h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.3;
}
```

## Espaçamentos Responsivos

### Classes Automáticas
```html
<!-- Espaçamentos que se adaptam -->
<section class="py-16">Seção com padding responsivo</section>
<div class="mb-12">Margem responsiva</div>
```

### Valores CSS
```css
/* Exemplo de como funciona internamente */
.py-16 {
  padding-top: clamp(3rem, 6vw, 6rem);
  padding-bottom: clamp(3rem, 6vw, 6rem);
}

.mb-12 {
  margin-bottom: clamp(2rem, 4vw, 4rem);
}
```

## Acessibilidade

### Preferências do Usuário
- **Redução de movimento**: Respeita `prefers-reduced-motion`
- **Alto contraste**: Suporte para `prefers-contrast: high`
- **Modo escuro**: Suporte para `prefers-color-scheme: dark`

### Navegação por Teclado
- Todos os elementos interativos são acessíveis via teclado
- Indicadores de foco visíveis
- Ordem de tab lógica

### Screen Readers
- Textos alternativos para imagens
- Estrutura semântica adequada
- Labels associados corretamente

## Performance

### Otimizações
- **Lazy loading** para imagens
- **Code splitting** automático
- **Tree shaking** para CSS não utilizado
- **Minificação** de assets

### Métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## Testes

### Dispositivos Testados
- iPhone SE (375px)
- iPhone 12 (390px)
- Samsung Galaxy (360px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1920px)
- 4K (3840px)

### Navegadores
- Chrome (mobile e desktop)
- Safari (iOS e macOS)
- Firefox (mobile e desktop)
- Edge (Windows)

## Boas Práticas

### 1. Mobile First
Sempre comece desenvolvendo para mobile e depois adicione funcionalidades para telas maiores.

### 2. Teste Real
Teste em dispositivos reais, não apenas no DevTools.

### 3. Performance
Mantenha o site rápido em todas as conexões.

### 4. Acessibilidade
Garanta que funcione para todos os usuários.

### 5. Consistência
Mantenha padrões visuais consistentes em todos os breakpoints.

## Troubleshooting

### Problemas Comuns

#### 1. Elementos não se adaptam
```scss
// ❌ Errado
.element {
  width: 300px;
}

// ✅ Correto
.element {
  width: 100%;
  max-width: 300px;
}
```

#### 2. Texto muito pequeno em mobile
```scss
// ❌ Errado
.text {
  font-size: 12px;
}

// ✅ Correto
.text {
  font-size: clamp(14px, 4vw, 16px);
}
```

#### 3. Imagens quebram o layout
```scss
// ❌ Errado
img {
  width: 100%;
}

// ✅ Correto
img {
  width: 100%;
  height: auto;
  max-width: 100%;
}
```

## Suporte

Para dúvidas sobre o sistema responsivo, consulte:
- Documentação do Vuetify
- Especificações CSS Media Queries
- Guias de acessibilidade WCAG
- Testes de responsividade do Google 