import colorLib, { Color, RGBA } from '@kurkle/color'

export const transparentize = (
  value: string | number[] | Color | RGBA,
  opacity?: number,
) => {
  const alpha = opacity ?? 0.5
  return colorLib(value).alpha(alpha).rgbString()
}

export const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
}

export const CHART_BG_COLORS = {
  pink: 'rgb(255, 161, 181)',
  lightBlue: 'rgb(134, 199, 243)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(76, 175, 80)',
}
