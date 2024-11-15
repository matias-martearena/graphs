import React, { useRef, useEffect } from 'react'

import { Grid2 } from '@mui/material'
import Chart from 'chart.js/auto'
import { CHART_COLORS, CHART_BG_COLORS, transparentize } from '../utils'

export const MultiplyExpensesScreen: React.FC = () => {
  const expensesOne = useRef<HTMLCanvasElement>(null)
  const expensesTwo = useRef<HTMLCanvasElement>(null)
  const expensesThree = useRef<HTMLCanvasElement>(null)

  const data = [
    {
      tipoDeGasto: 'Personal',
      gastos: 4565820.56,
    },
    {
      tipoDeGasto: 'RRHH',
      gastos: 2282910.28,
    },
    {
      tipoDeGasto: 'Base de datos',
      gastos: 2282910.28,
    },
  ]

  const dataSorted = [...data].sort((a, b) => b.gastos - a.gastos)

  const expensesOneView = () => {
    if (!expensesOne.current) return

    return new Chart(expensesOne.current, {
      type: 'doughnut',
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
            borderWidth: 1,
            hoverOffset: 10,
            offset: 10,
          },
        ],
      },
      options: {
        cutout: '0%',
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

  const expensesTwoView = () => {
    if (!expensesTwo.current) return

    return new Chart(expensesTwo.current, {
      type: 'doughnut',
      data: {
        labels: dataSorted.map(row => row.tipoDeGasto),
        datasets: [
          {
            label: 'Gastos',
            data: dataSorted.map(row => row.gastos),
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
            borderWidth: 1,
            hoverOffset: 10,
            offset: 10,
          },
        ],
      },
      options: {
        cutout: '25%',
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

  const expensesThreeView = () => {
    if (!expensesThree.current) return

    return new Chart(expensesThree.current, {
      type: 'doughnut',
      data: {
        labels: dataSorted.map(row => row.tipoDeGasto),
        datasets: [
          {
            label: 'Gastos',
            data: dataSorted.map(row => row.gastos),
            backgroundColor: [
              transparentize(CHART_BG_COLORS.pink, 0.8),
              transparentize(CHART_BG_COLORS.green, 0.8),
              transparentize(CHART_BG_COLORS.lightBlue, 0.8),
            ],
            borderColor: [
              CHART_COLORS.grey,
              CHART_COLORS.grey,
              CHART_COLORS.green,
            ],
            borderWidth: 1,
            hoverOffset: 10,
            offset: 10,
          },
        ],
      },
      options: {
        cutout: '50%',
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
    const viewOne = expensesOneView()
    const viewTwo = expensesTwoView()
    const viewThree = expensesThreeView()

    return () => {
      viewOne?.destroy()
      viewTwo?.destroy()
      viewThree?.destroy()
    }
  })

  return (
    <section>
      <h2>Gastos multiples</h2>
      <p>Inlcuyen los campos gastos y sus detalles</p>
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid2
          sx={{
            width: '25dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={expensesOne}
            aria-label="Grafica de gastos por cliente uno"
          ></canvas>
        </Grid2>
        <Grid2
          sx={{
            width: '25dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={expensesTwo}
            aria-label="Grafica de gastos por cliente dos"
          ></canvas>
        </Grid2>
        <Grid2
          sx={{
            width: '25dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={expensesThree}
            aria-label="Grafica de gastos por cliente tres"
          ></canvas>
        </Grid2>
      </Grid2>
    </section>
  )
}
