# 🎨 Sistema de Design - GeoQuantum

## 📋 Paleta de Cores

### Cores Principais

- **Primary:** `#1a365d` - Azul escuro profissional
- **Secondary:** `#2d5a87` - Azul médio
- **Accent:** `#1fa7a1` - Verde-azulado (destaque)
- **Warning:** `#ffc857` - Amarelo dourado
- **Success:** `#2d5a87` - Azul sucesso
- **Error:** `#e74c3c` - Vermelho
- **Info:** `#4a90e2` - Azul informação

### Cores de Texto

- **Primário:** `#1a202c` - Texto principal
- **Secundário:** `#4a5568` - Texto secundário
- **Muted:** `#6b7280` - Texto sutil
- **Light:** `#ffffff` - Texto claro

### Cores de Fundo

- **White:** `#ffffff`
- **Light:** `#f8fafc`
- **Lighter:** `#f8f9fa`
- **Grey:** `#f5f5f5`

## 🎨 Gradientes

### Gradientes Principais

```scss
// Primary
linear-gradient(135deg, #1a365d 0%, #2d5a87 100%)

// Secondary
linear-gradient(135deg, #2d5a87 0%, #1fa7a1 100%)

// Accent
linear-gradient(135deg, #1fa7a1 0%, #2d5a87 100%)

// Overlay
linear-gradient(135deg, rgba(26, 54, 93, 0.88) 0%, rgba(45, 90, 135, 0.88) 100%)

// Top Bar (Cards)
linear-gradient(90deg, #1a365d 0%, #2d5a87 50%, #1fa7a1 100%)
```

## 📐 Border Radius

### Padrões

- **Small:** `12px` - Tags, chips pequenos
- **Medium:** `16px` - Botões, inputs
- **Large:** `20px` - Cards médios
- **XLarge:** `24px` - Cards principais
- **Full:** `50%` - Círculos, badges redondos
- **Pills:** `25px` - Badges alongados

### Uso por Componente

- **Cards principais:** `24px` (ServiceCard, ProjectCard)
- **Cards secundários:** `16-20px` (SectorCard, TechCard)
- **Botões:** `25-30px` (arredondados)
- **Inputs/Selects:** `12px`
- **Badges:** `25px`
- **Ícones:** `50%` (circular)

## 🔲 Sombras (Box Shadow)

### Hierarquia

```scss
// Small - Elevação sutil
0 2px 8px rgba(26, 54, 93, 0.06)

// Medium - Cards normais
0 4px 20px rgba(26, 54, 93, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)

// Large - Cards destacados
0 8px 30px rgba(26, 54, 93, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)

// XLarge - Modais, overlays
0 20px 50px rgba(26, 54, 93, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)

// Hover - Estado interativo
0 30px 60px rgba(26, 54, 93, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)
```

## 🔤 Tipografia

### Font Family

```scss
font-family:
  'Roboto',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  sans-serif;
```

### Font Weights

- **Normal:** `400`
- **Medium:** `500`
- **Semibold:** `600`
- **Bold:** `700`

### Tamanhos

- **XS:** `0.75rem` (12px) - Tags, labels pequenos
- **SM:** `0.85rem` (13.6px) - Subtítulos, features
- **Base:** `0.95rem` (15.2px) - Descrições
- **MD:** `1rem` (16px) - Texto padrão
- **LG:** `1.25rem` (20px) - Subtítulos
- **XL:** `1.45rem` (23.2px) - Títulos de cards
- **2XL:** `1.6rem` (25.6px) - Títulos de seções

### Line Heights

- **Títulos:** `1.2-1.3`
- **Corpo:** `1.6-1.7`
- **Compacto:** `1.4`

## 📏 Espaçamentos

### Sistema de Espaçamento

- **XS:** `8px`
- **SM:** `12px`
- **MD:** `16px`
- **LG:** `24px`
- **XL:** `28px`
- **2XL:** `32px`

### Padding de Cards

- **Small:** `20px`
- **Medium:** `24px`
- **Large:** `28px`

### Padding de Containers

- **Mobile:** `1rem` (16px)
- **Tablet:** `2rem` (32px)
- **Desktop:** `3rem` (48px)

## 📦 Alturas de Componentes

### Cards

- **ServiceCard:** `480px` (desktop) → `420px` (mobile)
- **ProjectCard:** `650px` (desktop) → `600px` (mobile)
- **SectorCard:** Altura automática (flex)
- **TechCard:** `140px` (desktop) → `100px` (mobile)

### Imagens em Cards

- **ServiceCard:** `220px`
- **ProjectCard:** `280px` (desktop) → `220px` (mobile)
- **SectorCard:** `200px`
- **SuccessCase:** `220px`

### Hero Sections

- **Altura:** `60vh`
- **Mínima:** `450px` (desktop) → `350px` (mobile)

## 🎭 Animações e Transições

### Timing Functions

```scss
cubic-bezier(0.4, 0, 0.2, 1) // Padrão para suavidade
```

### Durações

- **Rápida:** `0.2s` - Micro-interações
- **Média:** `0.3-0.4s` - Hovers, clicks
- **Lenta:** `0.5-0.6s` - Transições de estado

### Hover Effects Padrão

```scss
&:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: $shadow-hover;
  border-color: rgba(26, 54, 93, 0.2);
}
```

## 🎯 Componentes Específicos

### Badges

- **Background:** Gradiente primário ou cor sólida
- **Padding:** `8px 16px`
- **Border-radius:** `25px`
- **Font-size:** `0.75-0.85rem`
- **Font-weight:** `700`
- **Text-transform:** `uppercase`
- **Letter-spacing:** `0.5px`

### Ícones

- **Container:** `70-75px` circular
- **Tamanho do ícone:** `32-36px`
- **Background:** Gradiente ou rgba branco
- **Border:** `2-3px solid rgba(255, 255, 255, 0.3)`
- **Backdrop-filter:** `blur(10-15px)`

### Botões CTA

- **Padding:** `12-16px 24-32px`
- **Border-radius:** `25-30px`
- **Font-weight:** `600-700`
- **Gap (ícone):** `8-12px`

### Tech Tags

- **Background:** `rgba(26, 54, 93, 0.08)`
- **Color:** `#1a365d`
- **Padding:** `6px 14px`
- **Border-radius:** `20px`
- **Border:** `1px solid rgba(26, 54, 93, 0.15)`
- **Font-size:** `0.8rem`

### Linhas Decorativas

- **Width inicial:** `50-60px`
- **Height:** `3px`
- **Width hover:** `100-120px`
- **Background:** Gradiente secundário

## 📱 Responsividade

### Breakpoints

- **Mobile:** `< 600px`
- **Tablet:** `600px - 959px`
- **Desktop:** `≥ 960px`

### Ajustes por Breakpoint

#### Mobile (< 600px)

- Cards: altura reduzida em ~80px
- Imagens: altura reduzida em ~60px
- Border-radius: reduzido em ~4px
- Padding: reduzido em ~4-8px
- Font-sizes: reduzidos em ~0.1-0.15rem

#### Tablet (600-959px)

- Valores intermediários entre mobile e desktop

## 🎨 Padrões de Overlay

### Image Overlays

```scss
.service-overlay,
.project-overlay {
  background: linear-gradient(135deg, rgba(26, 54, 93, 0.95) 0%, rgba(45, 90, 135, 0.95) 100%);
  opacity: 0;
  transform: scale(0.98);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

&:hover {
  opacity: 1;
  transform: scale(1);
}
```

### Gradient Overlays (Bottom)

```scss
background: linear-gradient(to top, rgba(26, 54, 93, 0.6) 0%, transparent 100%);
height: 60-70%;
```

## ✨ Efeitos Especiais

### Tech Grid Pattern

```scss
background-image:
  linear-gradient(rgba(26, 54, 93, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(26, 54, 93, 0.05) 1px, transparent 1px);
background-size: 25-30px 25-30px;
```

### Pulse Animation

```scss
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
}
```

### Glow Effect

```scss
box-shadow: 0 0 12px rgba(31, 167, 161, 0.6);
```

## 🎯 Checklist de Consistência

### Para Cada Card/Componente

- [ ] Border-radius: 20-24px
- [ ] Box-shadow: Medium (padrão)
- [ ] Border: 1px solid rgba(26, 54, 93, 0.08)
- [ ] Transition: 0.5s cubic-bezier
- [ ] Hover: translateY(-12px) scale(1.02)
- [ ] Top bar: 4px gradient (se aplicável)
- [ ] Background: gradient branco (#fff → #f8fafc)

### Para Badges

- [ ] Border-radius: 25px
- [ ] Padding: 8px 16px
- [ ] Font-weight: 700
- [ ] Text-transform: uppercase
- [ ] Letter-spacing: 0.5px

### Para Ícones

- [ ] Size: 70-75px circular
- [ ] Icon font-size: 32-36px
- [ ] Backdrop-filter: blur(15px)
- [ ] Border: 2-3px white transparent
- [ ] Hover: scale(1.15) rotate(10deg)

### Para Títulos

- [ ] Font-weight: 700
- [ ] Color: #1a202c
- [ ] Margin-bottom: 12px
- [ ] Line-height: 1.3
- [ ] Underline decorativa: 3px height

## 🚀 Performance

### Otimizações Aplicadas

- `will-change: transform` em elementos animados
- `backdrop-filter` para efeitos glass
- `transform: translateZ(0)` para aceleração GPU
- Loading lazy em imagens
- Transições com cubic-bezier otimizado

## ♿ Acessibilidade

### Considerações

- `prefers-reduced-motion` suportado
- Contraste mínimo: 4.5:1 (WCAG AA)
- Touch targets: mínimo 44px
- Hover states claros
- Focus states visíveis
