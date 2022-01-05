export const THEME = {
    color: {
        primary: '#33C176',
        accent: '#9B31F7',
        PurpleMagenta: '#2E2532',
        cyanBlue: '#C2D3EB',
    },
    font: {
        default: 'FuturaPT',
        size: {
            base: '1.8rem',
            h1: '6.4rem',
            h2: '5.2rem',
            h3: '4.8rem',
        }
    },
    SCREENS: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1900px',
    }
}

export const lightTheme = {
    body:'#fff',
    text:'#000',
    term: THEME.color.cyanBlue,
    input: '#F0F4F9',
    isLight: true
}

export const darkTheme = {
    body:'#201A23',
    text:'#fff',
    term: '#2E2532',
    input: THEME.color.PurpleMagenta,
    isLight:false,
}
