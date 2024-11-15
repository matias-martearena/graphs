import React, { useRef, useEffect } from 'react'

import { Grid2 } from '@mui/material'
import Chart from 'chart.js/auto'
import { CHART_COLORS, CHART_BG_COLORS, transparentize } from '../utils'

export const ExpensesIncomeScreen: React.FC = () => {
  const expensesIncome = useRef<HTMLCanvasElement>(null)
  const incomeExpenses = useRef<HTMLCanvasElement>(null)

  const data = [
    {
      tipoDeGasto: 'Personal',
      tipoDeIngreso: 'Proyecto',
      gastos: 4565820.56,
      ingresos: 13045201,
    },
    {
      tipoDeGasto: 'RRHH',
      tipoDeIngreso: 'Rifa',
      gastos: 2282910.28,
      ingresos: 25036599,
    },
    {
      tipoDeGasto: 'Base de datos',
      tipoDeIngreso: 'Deposito',
      gastos: 2282910.28,
      ingresos: 7025852,
    },
  ]

  const dataSorted = [...data].sort((a, b) => b.gastos - a.gastos)
  const dataSortedIncome = [...data].sort((a, b) => b.ingresos - a.ingresos)

  const expensesIncomeView = () => {
    if (!expensesIncome.current) return

    return new Chart(expensesIncome.current, {
      type: 'polarArea',
      data: {
        labels: dataSorted.map(row => row.tipoDeGasto),
        datasets: [
          {
            label: 'Gastos',
            data: dataSorted.map(row => row.gastos),
            backgroundColor: [
              transparentize(CHART_BG_COLORS.lightBlue, 0.8),
              transparentize(CHART_BG_COLORS.green, 0.8),
              transparentize(CHART_BG_COLORS.pink, 0.8),
            ],
            borderColor: [
              CHART_COLORS.grey,
              CHART_COLORS.green,
              CHART_COLORS.grey,
            ],
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 10000,
            easing: 'linear',
            from: 1,
            to: 0,
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }

  const incomeExpensesView = () => {
    if (!incomeExpenses.current) return

    return new Chart(incomeExpenses.current, {
      type: 'polarArea',
      data: {
        labels: dataSortedIncome.map(row => row.tipoDeIngreso),
        datasets: [
          {
            label: 'Ingresos',
            data: dataSortedIncome.map(row => row.ingresos),
            backgroundColor: [
              transparentize(CHART_BG_COLORS.green, 0.8),
              transparentize(CHART_BG_COLORS.pink, 0.8),
              transparentize(CHART_BG_COLORS.lightBlue, 0.8),
            ],
            borderColor: [
              CHART_COLORS.green,
              CHART_COLORS.grey,
              CHART_COLORS.grey,
            ],
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 10000,
            easing: 'linear',
            from: 1,
            to: 0,
          },
        },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
  }

  useEffect(() => {
    const viewOne = expensesIncomeView()
    const viewTwo = incomeExpensesView()

    return () => {
      viewOne?.destroy()
      viewTwo?.destroy()
    }
  })

  return (
    <section>
      <h2>Gastos e ingresos</h2>
      <p>Inlcuyen los campos gastos e ingresos de un cliente</p>
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid2
          sx={{
            width: '35dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={expensesIncome}
            aria-label="Grafica de gastos por cliente"
          ></canvas>
        </Grid2>
        <Grid2
          sx={{
            width: '35dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={incomeExpenses}
            aria-label="Grafica de ingresos por cliente"
          ></canvas>
        </Grid2>
      </Grid2>
    </section>
  )
}
