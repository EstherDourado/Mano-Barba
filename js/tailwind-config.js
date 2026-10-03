tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#E63946',
                    cyan: '#00B4D8',
                    mustard: '#FFB703', // Updated to yellow
                    dark: '#1D1D1D',
                    light: '#FAFAFA'
                }
            },
            fontFamily: {
                heading: ['Nunito', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'float-slow': 'float 6s ease-in-out infinite',
                'float-medium': 'float 4s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-slow': 'spin 15s linear infinite',
                'wiggle': 'wiggle 3s ease-in-out infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' }
                }
            }
        }
    }
}
