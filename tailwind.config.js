/** @type {import('tailwindcss').Config} */

const customColors = {
  white: '#FFFFFF',
  placeholder: '#A9ACBC',
  separator: '#ECECEE',
  'normal-text-color': '#161528',
  'slightly-normal-text-color': '#2C304E',
  'sub-text-color': '#414562',
  'faded-text-color': '#5A5D72',
  'box-color': '#DFDFE2',
  'hyperlink-color': '#0062FF',
  'mandatory-field-color': '#FF3366',
  'disabled-bg-color': '#F5F5F5',
  'configuration-bg': '#FAFCFF',
  'dropdown-hover': '#e9ecef',
  'check-box': '#ced4da',
  'info-section': '#EFF5FC',
  'info': '#5C98E5',
  'success-toast': '#24A148',
  'alert-toast': '#DA1E28',
  'cta-disabled': '#FFC2D6'
};

module.exports = {
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    textColor: {
      ...customColors
    },
    backgroundColor: {
      ...customColors
    },
    fontSize: {
      '12-px': '12px',
      '14-px': '14px',
      '16-px': '16px',
      '18-px': '18px',
      '20-px': '20px',
      '24-px': '24px',
      '36-px': '36px',
      '40-px': '40px'
    },
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700'
    },
    letterSpacing: {
      '.4-px': '.4px',
      '1.5-px': '1.5px',
      '1.6-px': '1.6px',
    },
    lineHeight: {
      'normal': 'normal',
      '1.14': '1.14',
      '1.2': '1.2',
      '1.4': '1.4',
      '1.5': '1.5',
      '1.6': '1.6',
      '1.7': '1.7',
      '1.8': '1.8'
    },
    extend: {
      animation: {
        'progress-spinner': 'p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite',
        'progress-spinner-cta': 'p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-cta-color 6s ease-in-out infinite'
      },
      keyframes: {
        'p-progress-spinner-color': {
          '0%': { 'stroke': '#ff3863'},
          '100%': { 'stroke': '#ff3863'}
        },
        'p-progress-spinner-cta-color': {
          '0%': { 'stroke': '#ffffff'},
          '100%': { 'stroke': '#ffffff'}
        }
      },
      zIndex: {
        '1': '1',
      },
      padding: {
        '2-px': '2px',
        '3-px': '3px',
        '4-px': '4px',
        '5-px': '5px',
        '6-px': '6px',
        '8-px': '8px',
        '9-px': '9px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '22-px': '22px',
        '24-px': '24px',
        '26-px': '26px',
        '28-px': '28px',
        '30-px': '30px',
        '32-px': '32px',
        '34-px': '34px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '42-px': '42px',
        '44-px': '44px',
        '48-px': '48px',
        '56-px': '56px',
        '70-px': '70px',
        '80-px': '80px',
        '100-px': '100px'
      },
      margin: {
        '0-px': '0px',
        '1-px': '1px',
        '2-px': '2px',
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '22-px': '22px',
        '24-px': '24px',
        '26-px': '26px',
        '28-px': '28px',
        '30-px': '30px',
        '32-px': '32px',
        '34-px': '34px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '48-px': '48px',
        '50-px': '50px',
        '56-px': '56px',
        '70-px': '70px',
        '80-px': '80px',
        '126-px': '126px',
        '282-px': '282px'
      },
      height: {
        '1-px': '1px',
        '2-px': '2px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '22-px': '22px',
        '24-px': '24px',
        '30-px': '30px',
        '32-px': '32px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '42-px': '42px',
        '44-px': '44px',
        '46-px': '46px',
        '48-px': '48px',
        '50-px': '50px',
        '54-px': '54px',
        '56-px': '56px',
        '60-px': '60px',
        '64-px': '64px',
        '68-px': '68px',
        '70-px': '70px',
        '74-px': '74px',
        '78-px': '78px',
        '84-px': '84px',
        '92-px': '92px',
        '100-px': '100px',
        '110-px': '110px',
        '168-px': '168px',
        '192-px': '192px',
        '282-px': '282px',
        '465-px': '465px',
        '756-px': '756px',
        '62-vh': '62vh',
        '68-vh': '68vh'
      },
      minHeight: {
        '70-px': '70px'
      },
      width: {
        '1-px': '1px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '16-px': '16px',
        '18-px': '18px',
        '20-px': '20px',
        '24-px': '24px',
        '30-px': '30px',
        '32-px': '32px',
        '36-px': '36px',
        '38-px': '38px',
        '40-px': '40px',
        '42-px': '42px',
        '46-px': '46px',
        '48-px': '48px',
        '50-px': '50px',
        '56-px': '56px',
        '60-px': '60px',
        '64-px': '64px',
        '68-px': '68px',
        '70-px': '70px',
        '80-px': '80px',
        '92-px': '92px',
        '100-px': '100px',
        '118-px': '118px',
        '120-px': '120px',
        '138-px': '138px',
        '150-px': '150px',
        '160-px': '160px',
        '176-px': '176px',
        '200-px': '200px',
        '246-px': '246px',
        '260-px': '260px',
        '300-px': '300px',
        '302-px': '302px',
        '320-px': '320px',
        '354-px': '354px',
        '360-px': '360px',
        '388-px': '388px',
        '420-px': '420px',
        '452-px': '452px',
        '466-px': '466px',
        '14-vw': '14vw',
        '20-vw': '20vw',
        '27-vw': '27vw',
        '45-vw': '45vw',
        '50-vw': '50vw',
        '52-vw': '52vw',
        '75-vw': '75vw',
        '100-vh': '100vh'
      },
      minWidth: {
        '160-px': '160px',
        '250-px': '250px',
        '300-px': '300px'
      },
      borderRadius: {
        '0-px': '0px',
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '10-px': '10px',
        '12-px': '12px',
        '16-px': '16px',
        '20-px': '20px',
        '48-px': '48px'
      },
      borderWidth: {
        '0.5-px': '0.5px',
        '1-px': '1px',
        '2-px': '2px',
        '4-px': '4px',
        '6-px': '6px',
        '8-px': '8px',
        '12-px': '12px',
      },
      borderColor: {
        'box-color': customColors['box-color'],
        'faded-text-color': customColors['faded-text-color'],
        'slightly-normal-text-color': customColors['slightly-normal-text-color'],
        'check-box': customColors['check-box'],
        'disabled-bg-color': customColors['disabled-bg-color']
      },
      backgroundImage: {
        'btn-cta': 'linear-gradient(162.38deg, #FF3366 3.01%, #FE5196 111.5%)',
        'header-1': 'linear-gradient(141.67deg, rgba(225, 238, 255, 0.59) 21.38%, rgba(255, 228, 251, 0.75) 122.46%)',
        'header-2': 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)'
      },
      fontFamily: {
        'aktiv-grotesk': '"aktiv-grotesk", sans-serif'
      },
      boxShadow: {
        'app-card': '0px 2px 10px rgba(44, 48, 78, 0.1)',
        'btn-cta-shadow': '0px 4px 4px rgba(44, 48, 78, 0.1)'
      },
      dropShadow: {
      },
      screens: {
        'max-xl': {'max': '1440px'},
        'max-lg': {'max': '1024px'}
      },
      spacing: {
        '2-px': '2px',
        '10-px': '10px',
        '12-px': '12px',
        '14-px': '14px',
        '30-px': '30px'
      }
    },
  },
  plugins: [],
}
