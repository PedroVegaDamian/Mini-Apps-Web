import { flags as originalFlags } from './flags.js'
import { paintFlagInformation, getNumberRandom } from './utils.js'

let counterAnswerCorrect = 0
let flags = [...originalFlags]

const renderFlag = () => {
  const elementMain = document.getElementById('main')

  if (flags.length === 0) {
    elementMain.innerHTML = `
    <p>Respuestas correctas: ${counterAnswerCorrect}</p>
    <p>Respuestas incorrectas: ${
      originalFlags.length - counterAnswerCorrect
    }</p>
    <button id="playAgain">Volver a jugar</button>`
    document.getElementById('playAgain').addEventListener('click', () => {
      flags = [...originalFlags]
      counterAnswerCorrect = 0
      renderFlag()
    })
    return
  }

  const firstIndex = 0
  const lastIndex = flags.length - 1
  const indexFlag = getNumberRandom(firstIndex, lastIndex)

  elementMain.innerHTML = paintFlagInformation(flags[indexFlag])

  const [flagDeleted] = flags.splice(indexFlag, 1)

  document.querySelectorAll('.buttonAnswer').forEach(button => {
    button.addEventListener('click', event => {
      if (event.target.textContent === flagDeleted.correct_answer) {
        counterAnswerCorrect++
      }
      renderFlag()
    })
  })
}

document.getElementById('startButton').addEventListener('click', () => {
  document.getElementById('startScreen').remove()
  renderFlag()
})
