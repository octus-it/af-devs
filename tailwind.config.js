module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px'
    },
    extend: {
      colors: {
        black: '#212b36',
        dark: {
          DEFAULT: '#111928',
          700: '#090e34b3',
          2: '#1f2a37',
          3: '#374151',
          4: '#4b5563',
          5: '#6b7280',
          6: '#9ca3af',
          7: '#d1d5db',
          8: '#e5e7eb'
        },
        primary: '#3758f9',
        'blue-dark': '#1b44c8',
        secondary: '#13c296',
        body: '#637381',
        'body-secondary': '#8899a8',
        warning: '#fbbf24',
        stroke: '#dfe4ea',
        gray: {
          1: '#f9fafb',
          2: '#f3f4f6',
          7: '#ced4da'
        }
      },
      spacing: {
        'container-padding': '16px'
      },
      boxShadow: {
        input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
        form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
        pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
        'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
        1: '0px 1px 3px 0px rgba(166, 175, 195, 0.4)',
        2: '0px 5px 12px 0px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      },
      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem'
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [],
}
