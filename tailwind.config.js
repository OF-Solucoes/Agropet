/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_fundo':"url('../assets/fundo1.jpeg')",
      'img_bg_fundo2':"url('../assets/fundoBranco2.png')",
      'img_bg_fundotec': "url('../assets/fundoTec.png')",
      'img_bg_brservice' : "url('../assets/bgcamilhao.jpeg')"
    },
    extend: {
      colors:{
        'primary-blue':'#004773',
        'azul-claro':'#0a83ca',
        'azul-escuro':'#030f40',
        'azul-bemescuro':'#030514',
        'primary-orange':'#f47f15',
        'primary-focus':'#ec4000',
        'primary-gray':'#ffae7e',
      },  
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        slideDown:{
        "0%": {transform: "translateY(-200px)",opacity:"0"},
        "100%": {transform: "translateY(0px)",opacity:"1"},
       },
       slideLeft:{
        "0%": {transform: "translateX(-700px)",opacity:"0"},
        "100%": {transform: "translateX(300px)",opacity:"1"},
       },
       slideRigth:{
        "0%": {transform: "translateX(700px)",opacity:"0"},
        "100%": {transform: "translateX(-300px)",opacity:"1"},
       },
       slideGira: {
        from: {
          transform: " rotate(-180deg) translateX(-100%)",
          opacity: "0",
        },
        to: {
          transform: " rotate(0) translateX(0)",
          opacity: "1",
        }
      }
       },
      animation: {
        'wiggle_1s_ease-in-out_infinite': 'wiggle 1s ease-in-out infinite',
        'slide-down-05': 'slideDown 0.6s linear',
        'slide-down-08': 'slideDown 0.8s linear',
        'slide-Left-05': 'slideLeft 0.8s linear',
        'slide-Rigth-08': 'slideRigth 0.8s linear',
        'slide-Gira': 'slideGira 0.8s ease-in-out infinite',
      },
      
   // },
    // animation: {
    //   'slide-down': "slideDown 1s lease-in-out infinite"
    // }
    },
  },
  plugins: [],
}

