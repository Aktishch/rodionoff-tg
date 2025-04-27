import './scss/main.scss'
import animation from './ts/animation'
import currentTab from './ts/current-tab'
import loadMedia from './ts/load-media'
import preloader from './ts/preloader'
import waved from './ts/waved'

window.addEventListener('DOMContentLoaded', ((): void => {
  animation()
  currentTab()
  preloader()
  waved()
}) as EventListener)

window.addEventListener('load', loadMedia as EventListener)
