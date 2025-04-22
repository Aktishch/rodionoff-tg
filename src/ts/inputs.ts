import { regularExpressions } from './utils'

const inputName = (event: Event): void => {
  const input = event.target as HTMLInputElement

  if (input.value.match(regularExpressions.name)) input.value = input.value.replace(regularExpressions.name, '')
}

const inputNumber = (event: Event): void => {
  const input = event.target as HTMLInputElement

  input.value = input.value.replace(regularExpressions.number, '')
}

const inputFloat = (event: Event): void => {
  const input = event.target as HTMLInputElement

  input.value = input.value
    .replace(regularExpressions.numberSeparator, '')
    .replace(regularExpressions.floatingPoint, ' ')
}

export default (): void => {
  document.addEventListener('input', ((event: Event): void => {
    switch ((event.target as HTMLInputElement).getAttribute('data-input')) {
      case 'name': {
        inputName(event)
        break
      }

      case 'number': {
        inputNumber(event)
        break
      }

      case 'float': {
        inputFloat(event)
        break
      }
    }
  }) as EventListener)
}
