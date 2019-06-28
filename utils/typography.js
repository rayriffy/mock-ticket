import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  bodyFontFamily: ['Roboto Mono', 'monospace'],
  headerFontFamily: ['Roboto Mono', 'monospace'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
