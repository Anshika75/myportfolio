// components/Terminal.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import commandsData from '../../helpers/commands.js';
import styles from '../../styles/Terminal/styles.module.css';

interface Command {
  command: string;
  description: string;
}

interface Theme {
  name: string;
  backgroundColor: string;
  textColor: string;
  visitorTextColor: string;
  authorTextColor: string;
  commandTextColor: string;
}

const themes: { [key: string]: Theme } = {
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
    visitorTextColor: '##60fdff',
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
const asciiArt = `
    _           _    _ _        
   /_\\  _ _  __| |_ (_) |____ _ 
  / _ \\| ' \\(_-< ' \\| | / / _\` |
 /_/ \\_\\_||_/__/_||_|_|_\\_\\__,_|
                                
`;
const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<{ command: string; description: string }[]>([]);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.default);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Fetch commands data from commands.json
    setCommands(commandsData.commands);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const enteredCommand = inputValue.trim();

      if (enteredCommand.startsWith('theme')) {
        handleThemeCommand(enteredCommand);
      } else {
        const matchedCommand = commands.find((cmd) => cmd.command === enteredCommand);
        if (matchedCommand) {
          typeDescription(matchedCommand.description).then((typedDescription) => {
            setCommandHistory((prevHistory) => [
              ...prevHistory,
              {
                command: enteredCommand,
                description: typedDescription,
              },
            ]);
          });
        } else {
          setCommandHistory((prevHistory) => [
            ...prevHistory,
            {
              command: enteredCommand,
              description: 'Command not found',
            },
          ]);
        }

        // Process the entered command (you can add more logic here)
        console.log(`Command entered: ${enteredCommand}`);
        setSelectedCommand(enteredCommand);
      }

      setInputValue('');
    }
  };
  const typeDescription = async (description: string): Promise<string> => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  
    let typedDescription = '';
  
    for (let i = 0; i < description.length; i++) {
      typedDescription += description[i   ];
      setCommandHistory((prevHistory) => [
        ...prevHistory.slice(0, 1),
        {
          command: prevHistory[prevHistory.length - 1]?.command || '',
          description: typedDescription,
        },
      ]);
  
      await delay(5); // Adjust the delay as needed
    }
  
    return typedDescription;
  };
  
  const handleThemeCommand = (command: string) => {
    const themeName = command.split(' ')[1];
    const selectedTheme = themes[themeName];
  
    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        {
          command,
          description: `Switched to theme "${themeName}"\n`,
        },
      ]);
    } else {
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        {
          command,
          description: `Theme "${themeName}" not found\n`,
        },
      ]);
    }
  };
 
  

  useEffect(() => {
    // Focus on the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={`min-h-screen ${styles.font}`} style={{ backgroundColor: currentTheme.backgroundColor, color: currentTheme.textColor }}
    >
      <div className="py-6 p-2 min-h-screen">
        <div className="h-full">

          <div>
            <span className="font-semibold" style={{ color: currentTheme.visitorTextColor }}>
              visitor
            </span>
            <span className="font-semibold" style={{ color: currentTheme.authorTextColor }}>
              @terminalanshika
            </span>
            <span className="font-semibold" style={{ color: currentTheme.commandTextColor }}>
              :~$ welcome <br />
            </span>
            <pre>
              <code>{asciiArt}</code>
            </pre>
            Welcome, fellow coder, to the command center of creativity! 🚀 <br /> <br />

            Initializing portfolio.exe... <br /> <br />

            Loading projects... ████████████ 100% <br />
            Scanning accomplishments... 🌟 <br /> <br />

            Welcome to my digital domain. Here, each line of code tells a story, and every command unlocks a world of innovation. Navigate the directories of my projects, explore the syntax of my skills, and execute curiosity.exe to unravel the secrets behind each creation. <br /> <br />

            Current Status: <br />
            - Projects: ████████ 80% <br />
            - Creativity: ██████████ 100% <br />
            - Coffee Reserves: ██████ 60% <br /> <br />

            Type
            <span className='text-[#707070]'> 'help' for a list of available commands and to dive into the immersive realm of my digital achievements. </span>
            <br /> <br />

            Ready to code, navigate, and explore. Let the terminal adventure begin! 🖥️💡  <br /> <br />

          </div>
          {/* Display command history */}
          {commandHistory.map((command, index) => (
            <div key={index}>
              <span>
                <span className="font-semibold" style={{ color: currentTheme.visitorTextColor }}>
                  visitor
                </span>
                <span className="font-semibold" style={{ color: currentTheme.authorTextColor }}>
                  @terminalanshika
                </span>
                <span className="font-semibold" style={{ color: currentTheme.commandTextColor }}>
                  :~$&nbsp;
                </span>
                {`${command.command}`}
              </span> <br />
              <span
                style={{ whiteSpace: 'pre-line', color: currentTheme.textColor }}
                dangerouslySetInnerHTML={{ __html: ` ${command.description}` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <span>
            <span className="font-semibold" style={{ color: currentTheme.visitorTextColor }}>
              visitor
            </span>
            <span className="font-semibold" style={{ color: currentTheme.authorTextColor }}>
              @terminalanshika
            </span>
            <span className="font-semibold" style={{ color: currentTheme.commandTextColor }}>
              :~$&nbsp;
            </span>
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className={styles.inputField}
            style={{ color: currentTheme.commandTextColor }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;

