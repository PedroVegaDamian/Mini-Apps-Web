const budget = document.getElementById('budget')
const expensive = document.getElementById('expensive')
const expensiveAmount = document.getElementById('expensive_amount')

const btnAddBudget = document.getElementById('addBudget')
const btnAddExpensive = document.getElementById('addExpensive')

let gastos = []

let presupuesto = 0
let idExpensive = 0

// import { addBudget } from './functions.js'

btnAddBudget.addEventListener('click', () => {
  if (budget.value === '') return alert('Please, ingresar tu presupuesto')
  presupuesto = +budget.value
  budget.value = ''
  // presupuesto = addBudget(budget.value, presupuesto)
  updateTotal()
})

btnAddExpensive.addEventListener('click', () => {
  if (presupuesto === 0) {
    alert('Please, primero ingresa tu presupuesto')
  } else {
    if (expensive.value.trim() === '')
      return alert('Please, ingresar el nombre de tu gasto')
    if (expensiveAmount.value === '')
      return alert('Please, ingresar el monto de tu gasto')

    if (idUpdateExpensive === 0) {
      idExpensive = idExpensive + 1
      const listExpensives = {
        idExpensive,
        nameExpensive: expensive.value,
        amountExpensive: expensiveAmount.value,
      }

      gastos.push(listExpensives)
    } else {
      const listExpensives = {
        idExpensive: idUpdateExpensive,
        nameExpensive: expensive.value,
        amountExpensive: expensiveAmount.value,
      }
      gastos = gastos.filter((gasto) => gasto.idExpensive !== idUpdateExpensive)
      gastos.splice(idUpdateExpensive - 1, 0, listExpensives)
      idUpdateExpensive = 0
    }

    expensive.value = ''
    expensiveAmount.value = ''
    updateTotal()
    listOfTheExpensives()
  }
})

const totalBudget = document.getElementById('totalBudget')
const totalExpensives = document.getElementById('totalExpensives')
const totalBalance = document.getElementById('totalBalance')

function updateTotal() {
  totalBudget.textContent = '' + presupuesto
  let gastoTotal = 0
  gastos.forEach((gasto) => {
    gastoTotal += +gasto.amountExpensive
  })
  totalExpensives.textContent = '' + gastoTotal
  totalBalance.textContent = '' + (presupuesto - gastoTotal)
}

const listOfExpensives = document.getElementById('listOfExpensives')

function listOfTheExpensives() {
  listOfExpensives.innerHTML = ''
  gastos.forEach((gasto) => {
    listOfExpensives.innerHTML += `
    <tr>
      <td>${gasto.nameExpensive}</td>
      <td>S/. ${gasto.amountExpensive}</td>
      <td>
        <button class="btnUpdate" onclick="updateExpensive(${gasto.idExpensive})">M</button>
        <button class="btnDelete" onclick="deleteExpensive(${gasto.idExpensive})">E</button>
      </td>
    </tr>
  `
  })
}

let idUpdateExpensive = 0

function updateExpensive(id) {
  const { idExpensive, nameExpensive, amountExpensive } = gastos.find(
    (gasto) => gasto.idExpensive === id
  )
  expensive.value = nameExpensive
  expensiveAmount.value = amountExpensive
  idUpdateExpensive = idExpensive
}

function deleteExpensive(id) {
  gastos = gastos.filter((gasto) => gasto.idExpensive !== id)
  updateTotal()
  listOfTheExpensives()
}
