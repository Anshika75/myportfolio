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
    visitorTextColor: '#8aff80',
    authorTextColor: '#00ff9c',
    commandTextColor: '#ffffff',
  },
  light: {
    name: 'Light',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    visitorTextColor: '#008000',
    authorTextColor: '#00ff9c',
    commandTextColor: '#000000',
  },
  // Add more themes as needed
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
        // Find the entered command in the commands data
        const matchedCommand = commands.find((cmd) => cmd.command === enteredCommand);

        // Add the entered command and its description to the history
        setCommandHistory((prevHistory) => [
          ...prevHistory,
          {
            command: enteredCommand,
            description: matchedCommand ? matchedCommand.description : 'Command not found',
          },
        ]);

        // Process the entered command (you can add more logic here)
        console.log(`Command entered: ${enteredCommand}`);
        setSelectedCommand(enteredCommand);
      }

      setInputValue('');
    }
  };

  const handleThemeCommand = (command: string) => {
    const themeName = command.split(' ')[1];
    const selectedTheme = themes[themeName];

    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
    } else {
      setCommandHistory((prevHistory) => [
        ...prevHistory,
        {
          command,
          description: `Theme "${themeName}" not found`,
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
          <p>
            <span className="font-medium" style={{ color: currentTheme.visitorTextColor }}>
              visitor
            </span>
            <span className="font-medium" style={{ color: currentTheme.authorTextColor }}>
              @terminalanshika
            </span>
            <span className="font-medium" style={{ color: currentTheme.commandTextColor }}>
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

          </p>
          {/* Display command history */}
          {commandHistory.map((command, index) => (
            <p key={index}>
              <span>
                <span className="font-medium" style={{ color: currentTheme.visitorTextColor }}>
                  visitor
                </span>
                <span className="font-medium" style={{ color: currentTheme.authorTextColor }}>
                  @terminalanshika
                </span>
                <span className="font-medium" style={{ color: currentTheme.commandTextColor }}>
                  :~$&nbsp;
                </span>
                {`${command.command}`}
              </span> <br />
              <span
                style={{ whiteSpace: 'pre-line', color: currentTheme.textColor }}
                dangerouslySetInnerHTML={{ __html: ` ${command.description}` }}
              />
            </p>
          ))}
        </div>
        <div className="mt-4">
          <span>
            <span className="font-medium" style={{ color: currentTheme.visitorTextColor }}>
              visitor
            </span>
            <span className="font-medium" style={{ color: currentTheme.authorTextColor }}>
              @terminalanshika
            </span>
            <span className="font-medium" style={{ color: currentTheme.commandTextColor }}>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;

