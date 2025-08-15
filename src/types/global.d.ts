import L from 'leaflet'

declare global {
  interface Window {
    globalMap?: L.Map
    globalMapContainer?: HTMLElement
  }
}

export {}
