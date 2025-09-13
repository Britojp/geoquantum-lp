import { ref, onMounted, onUnmounted } from 'vue'

export interface ScreenSize {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isLargeDesktop: boolean
  orientation: 'portrait' | 'landscape'
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export function useResponsive() {
  const screenSize = ref<ScreenSize>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    orientation: 'portrait',
    breakpoint: 'xs'
  })

  const updateScreenSize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    
    screenSize.value = {
      width,
      height,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 992,
      isDesktop: width >= 992 && width < 1200,
      isLargeDesktop: width >= 1200,
      orientation: width > height ? 'landscape' : 'portrait',
      breakpoint: getBreakpoint(width)
    }
  }

  const getBreakpoint = (width: number): ScreenSize['breakpoint'] => {
    if (width < 576) return 'xs'
    if (width < 768) return 'sm'
    if (width < 992) return 'md'
    if (width < 1200) return 'lg'
    if (width < 1400) return 'xl'
    return 'xxl'
  }

  const isBreakpoint = (breakpoint: ScreenSize['breakpoint']) => {
    return screenSize.value.breakpoint === breakpoint
  }

  const isBreakpointUp = (breakpoint: ScreenSize['breakpoint']) => {
    const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }
    return screenSize.value.width >= breakpoints[breakpoint]
  }

  const isBreakpointDown = (breakpoint: ScreenSize['breakpoint']) => {
    const breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 }
    return screenSize.value.width < breakpoints[breakpoint]
  }

  const isMobile = () => screenSize.value.isMobile
  const isTablet = () => screenSize.value.isTablet
  const isDesktop = () => screenSize.value.isDesktop
  const isLargeDesktop = () => screenSize.value.isLargeDesktop

  onMounted(() => {
    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    window.addEventListener('orientationchange', updateScreenSize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
    window.removeEventListener('orientationchange', updateScreenSize)
  })

  return {
    screenSize,
    updateScreenSize,
    isBreakpoint,
    isBreakpointUp,
    isBreakpointDown,
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop
  }
} 