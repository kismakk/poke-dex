const COLORS = {
  light: {
    primary: '#FF6565',
    secondary: '#E69191',
    accent: '#E7BF4E',
    background: '#FDFBFB',
    text: '#110C0C'
  },
  dark: {
    primary: '#990000',
    secondary: '#6C1919',
    accent: '#ECAF37',
    background: '#161515',
    text: '#F2EDED'
  }
}

const FONTWEIGHT = {
  heavy: '800',
  bold: '600',
  normal: '400',
  light: '300'
}

const SIZES = {
  small: 12,
  medium: 18,
  large: 22,
  xlarge: 28,
}

const BORDER = {
  thin: 1,
  medium: 2,
  thick: 3
}

const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.75,
    shadowRadius: 8,
    elevation: 15,
  },
}

export { COLORS, FONTWEIGHT, BORDER, SIZES, SHADOWS }
