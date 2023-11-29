
export interface Theme {
    name: string;
    backgroundColor: string;
    textColor: string;
    visitorTextColor: string;
    authorTextColor: string;
    commandTextColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
  }
  
  export const themes: { [key: string]: Theme } = {
    default: {
      name: 'Default',
      backgroundColor: '#000000',
      textColor: '#ffffff',
      visitorTextColor: '#60fdff',
      authorTextColor: '#00ff9c', 
      commandTextColor: '#ffffff',
      primaryTextColor: '#FF8C00',
      secondaryTextColor: '#9932CC',
    },
    dark: {
      name: 'Dark',
      backgroundColor: '#000000',
      textColor: '#ffffff',
      visitorTextColor: '#60fdff',
      authorTextColor: '#00ff9c',
      commandTextColor: '#ffffff',
      primaryTextColor: '#FF8C00',
      secondaryTextColor: '#9932CC',
    },
    light: {
      name: 'Light',
      backgroundColor: '#D3D7CF',
      textColor: '#000000',
      visitorTextColor: '#3465A4',
      authorTextColor: '#4E9A06',
      commandTextColor: '#000000',
      primaryTextColor: "#945201",
      secondaryTextColor: "#8B008B"
    },
    coffee: {
      name: 'Coffee',
      backgroundColor: '#3E2723',
      textColor: '#D7CCC8',
      visitorTextColor: '#FF8A80',
      authorTextColor: '#D32F2F',
      commandTextColor: '#D7CCC8',
      primaryTextColor: "#e6886c",
      secondaryTextColor: "#f2af96"
    },
    mint: {
      name: 'Mint',
      backgroundColor: '#263238',
      textColor: '#B0BEC5',
      visitorTextColor: '#66BB6A',
      authorTextColor: '#26A69A',
      commandTextColor: '#B0BEC5',
      primaryTextColor: "#7ab3cf",
      secondaryTextColor: "#b1dcf2"
    },
    forest: {
      name: 'Forest',
      backgroundColor: '#1B3C2D',
      textColor: '#D9E5D6',
      visitorTextColor: '#9BC53D',
      authorTextColor: '#57A773',
      commandTextColor: '#D9E5D6',
      primaryTextColor: "#55f28c",
      secondaryTextColor: "#afed24"
    },
    rainbow: {
      name: 'Rainbow',
      backgroundColor: '#1A1B34',
      textColor: '#ADD8E6',
      visitorTextColor: '#FF00FF',
      authorTextColor: '#4CAF50',
      commandTextColor: '#6699FF',
      primaryTextColor: "#FF5722",
      secondaryTextColor: "#FFC107"
    },
    ocean: {
      name: 'Ocean',
      backgroundColor: '#002A32',
      textColor: '#B0C4DE',
      visitorTextColor: '#0077ff',
      authorTextColor: '#20B2AA',
      commandTextColor: '#87CEEB',
      primaryTextColor: "#00BFFF",
      secondaryTextColor: "#47fff5"
  
    },
    sunset: {
      name: 'Sunset',
      backgroundColor: '#1A1C1E',
      textColor: '#faf0b9',
      visitorTextColor: '#FF0000',
      authorTextColor: '#FFA500',
      commandTextColor: '#FFFF00',
      primaryTextColor: "#fa5757",
      secondaryTextColor: "#fabb48"
    },
    charcoal: {
      name: 'Charcoal',
      backgroundColor: '#2F2F2F',
      textColor: '#D3D3D3',
      visitorTextColor: '#6495ED',
      authorTextColor: '#F08080',
      commandTextColor: '#98FB98',
      primaryTextColor: "#FFEB3B",
      secondaryTextColor: "#FF9800"
    },
    nebula: {
      name: 'Nebula',
      backgroundColor: '#0B0C10',
      textColor: '#C5C6C7',
      visitorTextColor: '#00BFFF',
      authorTextColor: '#FFD700',
      commandTextColor: '#FF6347',
      primaryTextColor: "#78fa7d",
      secondaryTextColor: "#FFA500"
    },
    moonlit: {
      name: 'Moonlit',
      backgroundColor: '#0C0E16', 
      textColor: '#A5B1C2',
      visitorTextColor: '#678FE1', 
      authorTextColor: '#FFA500', 
      commandTextColor: '#F76D57',
      primaryTextColor: "#F9D71C",
      secondaryTextColor: "#4CAF50"
    }
  
  };