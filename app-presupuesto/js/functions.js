export function addBudget(budget, presupuesto) {
  if (budget === '') return alert('Please, ingresar tu presupuesto')
  presupuesto = +budget
  budget = ''
  return presupuesto
}
