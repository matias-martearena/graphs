import React, { useRef, useEffect } from 'react'

import { Grid2, Typography } from '@mui/material'
import Chart from 'chart.js/auto'
import { CHART_COLORS, CHART_BG_COLORS, transparentize } from '../utils'

export const ExpensesDetailsScreen: React.FC = () => {
  const expensesDetails = useRef<HTMLCanvasElement>(null)

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

  const expensesDetailsView = () => {
    if (!expensesDetails.current) return

    return new Chart(expensesDetails.current, {
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

  useEffect(() => {
    const view = expensesDetailsView()

    return () => {
      view?.destroy()
    }
  })

  return (
    <section>
      <h2>Gastos</h2>
      <p>Inlcuyen los campos gastos y sus detalles</p>
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Grid2>
          <Typography
            variant="h6"
            component="p"
            color="primary"
          >
            Gastos del cliente Direct TV
          </Typography>
        </Grid2>
        <Grid2
          sx={{
            width: '30dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={expensesDetails}
            aria-label="Grafica de gastos por cliente"
          ></canvas>
        </Grid2>
      </Grid2>
    </section>
  )
}
