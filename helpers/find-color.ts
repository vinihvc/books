import theme from '@/styles/theme'

type colorsProps = {
  [key: string]: string
}

/**
 * Function to return HEX if value dont find in DS
 * @param color string
 * @returns string
 */
const findColor = (color?: string) => {
  const colors: colorsProps = theme.colors

  const find = Object.keys(colors).find((field) => field === color)

  return find ? colors[find] : color
}

export default findColor
