import React, { useRef, useEffect } from 'react'

import { Grid2 } from '@mui/material'
import Chart from 'chart.js/auto'
import { CHART_COLORS, CHART_BG_COLORS, transparentize } from '../utils'

export const RentabilityASAPScreen: React.FC = () => {
  const rentability = useRef<HTMLCanvasElement>(null)

  const data = [
    {
      cliente: 'Direct TV',
      rentabilidad: 3913559.88,
      gastos: -9131641.12,
      ingresos: 13045201,
    },
    {
      cliente: 'IRSA',
      rentabilidad: 5007319.8,
      gastos: -20029279.2,
      ingresos: 25036599,
    },
    {
      cliente: 'YPF',
      rentabilidad: 2810340.8,
      gastos: -4215511.2,
      ingresos: 7025852,
    },
  ]

  const dataSorted = [...data].sort((a, b) => b.rentabilidad - a.rentabilidad)

  const viewRentabilityGraph = () => {
    if (!rentability.current) return

    return new Chart(rentability.current, {
      type: 'bar',
      data: {
        labels: dataSorted.map(row => row.cliente),
        datasets: [
          {
            label: 'Rentabilidad',
            data: dataSorted.map(row => row.rentabilidad),
            backgroundColor: transparentize(CHART_BG_COLORS.pink, 0.8),
            borderColor: CHART_COLORS.grey,
            borderWidth: 1,
          },
          {
            label: 'Gastos',
            data: dataSorted.map(row => row.gastos),
            backgroundColor: transparentize(CHART_BG_COLORS.lightBlue, 0.8),
            borderColor: CHART_COLORS.grey,
            borderWidth: 1,
          },
          {
            label: 'Ingresos',
            data: dataSorted.map(row => row.ingresos),
            backgroundColor: transparentize(CHART_BG_COLORS.yellow, 0.8),
            borderColor: CHART_COLORS.green,
            borderWidth: 1,
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
    const view = viewRentabilityGraph()

    return () => {
      view?.destroy()
    }
  })

  return (
    <section>
      <h2>Rentabilidad por cliente</h2>
      <h3>Campos ordenados por rentabilidad</h3>
      <p>Inlcuyen los campos gastos e ingresos</p>
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
      >
        <Grid2
          sx={{
            width: '50dvw',
            height: 'auto',
            padding: '1rem',
          }}
        >
          <canvas
            ref={rentability}
            aria-label="Grafica de rentabilidad por cliente"
          ></canvas>
        </Grid2>
      </Grid2>
    </section>
  )
}
