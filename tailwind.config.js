function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgb(var(${variableName}))`;
    }
  };
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        patron: "'Patron'"
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          footer: withOpacity('--color-text-footer')
        }
      },
      backgroundColor: {
        skin: {
          'fill-primary': withOpacity('--color-fill-primary'),
          'fill-secondary': withOpacity('--color-fill-secondary'),
          'fill-footer': withOpacity('--color-fill-footer'),
          'button-muted': withOpacity('--color-button-muted')
        }
      }
    }
  },
  plugins: []
};
