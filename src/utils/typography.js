import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
