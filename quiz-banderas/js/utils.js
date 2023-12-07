export const paintFlagInformation = flag => {
  const buttons = flag.answers.map(answer => {
    return `<button class="buttonAnswer">${answer}</button>`
  })

  return `
  <img class="flagImage" width="300" src="${
    flag.flag_image
  }" alt="Bandera aleatoria" />
  ${buttons.join('')}`
}

export const getNumberRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)
