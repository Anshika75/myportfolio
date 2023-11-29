
export interface Theme {
    name: string;
    backgroundColor: string;
    textColor: string;
    visitorTextColor: string;
    authorTextColor: string;
    commandTextColor: string;
  }
  
  export const themes: { [key: string]: Theme } = {
    default: {
      name: 'Default',
      backgroundColor: '#000000',
      textColor: '#ffffff',
      visitorTextColor: '#60fdff',
      authorTextColor: '#00ff9c',
      commandTextColor: '#ffffff',
    },
    dark: {
      name: 'Dark',
      backgroundColor: '#000000',
      textColor: '#ffffff',
      visitorTextColor: '#60fdff',
      authorTextColor: '#00ff9c',
      commandTextColor: '#ffffff',
    },
    light: {
      name: 'Light',
      backgroundColor: '#D3D7CF',
      textColor: '#000000',
      visitorTextColor: '#3465A4',
      authorTextColor: '#4E9A06',
      commandTextColor: '#000000',
    },
    coffee: {
      name: 'Coffee',
      backgroundColor: '#3E2723',
      textColor: '#D7CCC8',
      visitorTextColor: '#FF8A80',
      authorTextColor: '#D32F2F',
      commandTextColor: '#D7CCC8',
    },
    mint: {
      name: 'Mint',
      backgroundColor: '#263238',
      textColor: '#B0BEC5',
      visitorTextColor: '#66BB6A',
      authorTextColor: '#26A69A',
      commandTextColor: '#B0BEC5',
    },
    forest: {
      name: 'Forest',
      backgroundColor: '#1B3C2D',
      textColor: '#D9E5D6',
      visitorTextColor: '#9BC53D',
      authorTextColor: '#57A773',
      commandTextColor: '#D9E5D6',
    },
    rainbow: {
      name: 'Rainbow',
      backgroundColor: '#1A1B34',
      textColor: '#ADD8E6',
      visitorTextColor: '#FF00FF',
      authorTextColor: '#800080',
      commandTextColor: '#008000',
    },
    ocean: {
      name: 'Ocean',
      backgroundColor: '#002A32',
      textColor: '#B0C4DE',
      visitorTextColor: '#00BFFF',
      authorTextColor: '#20B2AA',
      commandTextColor: '#87CEEB',
  
    },
    sunset: {
      name: 'Sunset',
      backgroundColor: '#1A1C1E',
      textColor: '#faf0b9',
      visitorTextColor: '#FF0000',
      authorTextColor: '#FFA500',
      commandTextColor: '#FFFF00',
    },
    charcoal: {
      name: 'Charcoal',
      backgroundColor: '#2F2F2F',
      textColor: '#D3D3D3',
      visitorTextColor: '#6495ED',
      authorTextColor: '#F08080',
      commandTextColor: '#98FB98',
    },
    nebula: {
      name: 'Nebula',
      backgroundColor: '#0B0C10',
      textColor: '#C5C6C7',
      visitorTextColor: '#00BFFF',
      authorTextColor: '#FFD700',
      commandTextColor: '#FF6347',
    },
    moonlit: {
      name: 'Moonlit',
      backgroundColor: '#0C0E16', 
      textColor: '#A5B1C2',
      visitorTextColor: '#678FE1', 
      authorTextColor: '#F9D71C', 
      commandTextColor: '#F76D57',
    }
  
  };