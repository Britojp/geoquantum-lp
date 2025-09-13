import type { Directive, DirectiveBinding } from 'vue'

// Diretiva simples para responsividade
export const vResponsive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    
    if (typeof value === 'object') {
      const { show, hide } = value
      
      if (show && hide) {
        updateResponsiveVisibility(el, show, hide)
      }
    }
    
    // Adicionar listener de resize
    const handleResize = () => {
      if (typeof value === 'object' && value.show && value.hide) {
        updateResponsiveVisibility(el, value.show, value.hide)
      }
    }
    
    window.addEventListener('resize', handleResize)
    
    // Armazenar referência para cleanup
    ;(el as any)._resizeHandler = handleResize
  },
  
  beforeUnmount(el: HTMLElement) {
    const handler = (el as any)._resizeHandler
    if (handler) {
      window.removeEventListener('resize', handler)
    }
  }
}

// Função auxiliar para atualizar visibilidade
function updateResponsiveVisibility(
  el: HTMLElement, 
  show: string[], 
  hide: string[]
) {
  const width = window.innerWidth
  let breakpoint = 'xl'
  
  if (width < 576) breakpoint = 'xs'
  else if (width < 768) breakpoint = 'sm'
  else if (width < 992) breakpoint = 'md'
  else if (width < 1200) breakpoint = 'lg'
  
  if (show.includes(breakpoint)) {
    el.style.display = ''
  } else if (hide.includes(breakpoint)) {
    el.style.display = 'none'
  }
}

// Registrar diretivas globalmente
export function registerResponsiveDirectives(app: any) {
  app.directive('responsive', vResponsive)
} 