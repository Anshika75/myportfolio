const commands = {
  'commands': [
    {
      'id': 1,
      'command': 'help',
      'description': `\nGet assistance on navigating through my digital space.\n
    - <b style='color:var(--primary-text-color);'> theme</b>: Customize your coding space with a variety of visually stunning themes. Choose from a range of options to personalize your environment and enhance your coding experience.
    
    &nbsp;&nbsp; <b style='color:var(--primary-text-color);'>Usage</b>:
    &nbsp;&nbsp; theme &lt;theme-name&gt;
    
      &nbsp;&nbsp; <b style='color:var(--primary-text-color);'>Available Themes</b>:
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>default</b>: Set the default theme to match your system appearance.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>dark</b>: Immerse yourself in the elegance of a dark-themed interface.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>light</b>: Bask in the soothing glow of a light-themed ambiance.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>coffee</b>: Awaken your senses with a warm and rich coffee-inspired theme.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>mint</b>: Experience a refreshing and cool mint-themed visual environment.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>forest</b>: Surround yourself with the lush greens of a forest-inspired theme.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>rainbow</b>: Indulge in the vibrant and colorful hues of a rainbow-themed display.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>ocean</b>: Dive into the deep blues of an ocean-inspired theme.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>sunset</b>: Witness the warm and calming tones of a sunset-themed interface.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>charcoal</b>: Embrace the sophisticated darkness with a charcoal-themed backdrop.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>nebula</b>: Explore the cosmic wonders with a nebula-themed visual experience.
         &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>moonlit</b>: Illuminate your screen with the gentle glow of a moonlit-themed ambiance.
    
         &nbsp;&nbsp;<b style='color:var(--primary-text-color);'>Example</b>:
         &nbsp;&nbsp; theme dark
    
    - <b style='color:var(--primary-text-color);'>about:</b> Delve into the coding chronicles of my digital DNA
    - <b style='color:var(--primary-text-color);'>skills:</b> Witness the prowess encoded in my skillset
    - <b style='color:var(--primary-text-color);'>projects:</b> Navigate through the command lines of my digital masterpieces
        &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>projects-css</b>: Discover the captivating CSS illustrations crafted with a blend of art and technology.
        &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>projects-basics</b>: Explore fundamental projects showcasing simplicity and functionality.
        &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>projects-intermediate</b>: Immerse yourself in projects that strike a balance between complexity and creativity.
        &nbsp;&nbsp;&nbsp;&nbsp; - <b style='color:var(--secondary-text-color);'>projects-advance</b>: Dive into advanced projects pushing the boundaries of technology and innovation.    
    - <b style='color:var(--primary-text-color);'>experience</b>: Discover my experiences and contributions to various organizations.
    - <b style='color:var(--primary-text-color);'>volunteer</b>: Explore my volunteer experiences and contributions to various organizations.
    - <b style='color:var(--primary-text-color);'>badges</b>: Explore the digital badges I've earned on my professional journey.
    - <b style='color:var(--primary-text-color);'>feats</b>: Discover the highlights of my professional journey and accomplishments! 
    - <b style='color:var(--primary-text-color);'>testimonials</b>: Read testimonials from professionals I've collaborated with, sharing their experiences and recommendations.
    - <b style='color:var(--primary-text-color);'>leisures</b>: Step into the realm of my leisure pursuits.
    - <b style='color:var(--primary-text-color);'>languages</b>: Explore the linguistic landscape of my language proficiences.
    - <b style='color:var(--primary-text-color);'>education</b>: Embark on a journey through my educational milestones, witnessing the growth and insights gained at each phase.
    - <b style='color:var(--primary-text-color);'>social</b>: Establish a data connection and dive into the network of possibilities`
    },

    {
      'id': 2,
      'command': 'about',
      'description': `\n<b style='color:var(--primary-text-color);'>User_Profile</b> = {
          <b style='color:var(--secondary-text-color);'>'name':</b> 'Anshika',
          <b style='color:var(--secondary-text-color);'>'role':</b> 'Front-End Developer',
          <b style='color:var(--secondary-text-color);'>'experience':</b> '4+ years',
          <b style='color:var(--secondary-text-color);'>'expertise':</b> ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js'],
          <b style='color:var(--secondary-text-color);'>'passion':</b> 'Crafting seamless, interactive experiences in the digital realm.',
          <b style='color:var(--secondary-text-color);'>'focus':</b> 'Transforming design blueprints into pixel-perfect realities.',
          <b style='color:var(--secondary-text-color);'>'team_player':</b> true,
          <b style='color:var(--secondary-text-color);'>'superpower':</b> 'Turning code into captivating user journeys.',
          <b style='color:var(--secondary-text-color);'>'mission':</b> 'Elevate user experiences by blending technology and creativity.',
          <b style='color:var(--secondary-text-color);'>'motto':</b> 'In the terminal of possibilities, every line of code tells a story.'
      }\n\nWelcome to my coding haven! I'm Anshika, a passionate Front-End Developer with a mission to weave magic into the digital fabric. With over 4 years of hands-on experience, I specialize in transforming design concepts into pixel-perfect, interactive interfaces.\n\nMy expertise spans HTML, CSS, JavaScript, and modern frameworks like React.js and Next.js. I thrive in collaborative environments, working seamlessly with cross-functional teams to deliver high-quality solutions. As a true team player, I believe in the power of code to turn ideas into captivating user journeys.\n\nJoin me in the terminal of possibilities, where every line of code tells a story, and each project is a chapter in the epic tale of user-centric design. Let's craft the future, one pixel at a time. 🚀\n`
    },
    {
      'id': 3,
      'command': 'skills',
      'description': `\nExplore the realm where creativity meets command lines! I am the Code Artisan, and this is the canvas of my skills. Each percentage is a brushstroke, meticulously crafting the tapestry of digital innovation.\n
      Welcome to the mastery levels of my skills:\n
      - <b style='color:var(--secondary-text-color);'>HTML</b>: █████████████████████ 95%
      - <b style='color:var(--secondary-text-color);'>CSS</b>: █████████████████████ 93%
      - <b style='color:var(--secondary-text-color);'>JavaScript</b>: █████████████████ 85%
      - <b style='color:var(--secondary-text-color);'>React.js</b>: ████████████████ 80%
      - <b style='color:var(--secondary-text-color);'>Next.js</b>: █████████████ 65%
      - <b style='color:var(--secondary-text-color);'>Bootstrap</b>: █████████████████ 90%
      - <b style='color:var(--secondary-text-color);'>SCSS</b>: ████████████████████ 97%
      - <b style='color:var(--secondary-text-color);'>jQuery</b>: ████████████████ 87%
      - <b style='color:var(--secondary-text-color);'>Tailwind</b>: ████████████████████ 97%
      - <b style='color:var(--secondary-text-color);'>Flask</b>: ███████ 55%
      - <b style='color:var(--secondary-text-color);'>Vite</b>: ███████████████ 83%
      - <b style='color:var(--secondary-text-color);'>Canva</b>: ████ 45%
      - <b style='color:var(--secondary-text-color);'>Linux</b>: ████ 43%
      - <b style='color:var(--secondary-text-color);'>Github</b>: ████████ 57%
      - <b style='color:var(--secondary-text-color);'>Firebase</b>: ██████ 52%
      - <b style='color:var(--secondary-text-color);'>MySQL</b>: ██████ 47%
      - <b style='color:var(--secondary-text-color);'>Vagrant</b>: ██ 34%
      - <b style='color:var(--secondary-text-color);'>Content Writing</b>: ███████ 60%
      - <b style='color:var(--secondary-text-color);'>Typescript</b>: ████ 37%
      
      In the realm of 1s and 0s, these skills are the building blocks of my digital prowess. From HTML to NextJS, each percentage is a testament to the mastery woven into my digital craft. Explore this realm where innovation meets precision, and every line of code is a brushstroke on the canvas of creativity. Let's turn code into poetry and pixels into experiences! 💻✨\n`,

    },
    {
      'id': 4,
      'command': 'projects-css',
      'description': `\nDive into the coding gallery! Explore the following CSS illustrations crafted with a blend of art and technology:\n
<b style='color:var(--primary-text-color);'>Kakashi</b> <a href='https://github.com/Anshika75/Kakashi' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Crafted a mesmerizing CSS pixel art portrait of Kakashi.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS

<b style='color:var(--primary-text-color);'>Let’s Illuminate</b> <a href='https://github.com/Anshika75/Let-s-Illuminate' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Illuminated the digital canvas with a captivating CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Restaurant</b> <a href='https://github.com/Anshika75/Restaurant' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Whetted the appetite with a delectable CSS illustration of a restaurant.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Eye</b> <a href='https://github.com/Anshika75/Eye' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Captured the expressiveness of an eye through a stunning CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Gorilla</b> <a href='https://github.com/Anshika75/Gorilla' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Brought the soul of a Gorilla to life in an expressive CSS masterpiece.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>SportyBoy</b> <a href='https://github.com/Anshika75/Sportyboy' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Settled all doubts about sports with an energetic CSS illustration of a sporty boy.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>SadMan</b> <a href='https://github.com/Anshika75/Sadman' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Unveiled the stories hidden behind the sadness in a contemplative CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Old Woman</b> <a href='https://github.com/Anshika75/Oldwoman' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Serenaded the essence of old age through a tranquil CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Old Man2</b> <a href='https://github.com/Anshika75/Oldman2' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Proved age is just a number with an enthusiastic CSS illustration of an old man.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Old Man</b> <a href='https://github.com/Anshika75/Oldman' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Unleashed the boundless enthusiasm of an old man through a vibrant CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Emotionless Man</b> <a href='https://github.com/Anshika75/Emotionless-Man' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Explored the complexities of human emotions through a thought-provoking CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Cow</b> <a href='https://github.com/Anshika75/Cheerful-Boy' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Brought a cheerful cow to life in a delightful CSS illustration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Cheerful-Boy</b> <a href='https://github.com/Anshika75/Cheerful-Boy' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Radiated positivity with an exuberant CSS illustration of a cheerful boy.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Queen</b> <a href='https://github.com/Anshika75/Queen' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Embodied strength and authenticity in a regal CSS illustration of a queen.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

Dive into the artistry and code behind each creation! 💻🎨`,

    },
    {
      'id': 5,
      'command': 'projects-basics',
      'description': `\nWelcome to my coding showcase! Immerse yourself in the world of creativity and technology as you explore the diverse projects I've crafted:\n
<b style='color:var(--primary-text-color);'>Roll-The-Dice</b> <a href='https://github.com/Anshika75/Roll-The-Dice' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Crafted Python code for rolling a dice with a touch of Tkinter.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> Python, Tkinter

<b style='color:var(--primary-text-color);'>Vagrant Environments Open Source</b> <a href='https://github.com/Anshika75/Vagrant-Environments-Open-Source' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Contributed to open-source Vagrant projects, simplifying virtual development environments.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> Vagrant

<b style='color:var(--primary-text-color);'>Number Charades</b> <a href='https://github.com/Anshika75/Number-Charades' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Gamified number guessing with joys of winning and challenges of time limits.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> Python

<b style='color:var(--primary-text-color);'>Text Formatter</b> <a href='https://github.com/Anshika75/Text-Formatter' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Developed a text formatter to enhance text content by managing whitespaces and word limits.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, CSS

<b style='color:var(--primary-text-color);'>AutoComplete-Search-Box</b> <a href='https://github.com/Anshika75/AutoComplete-Search-Box' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Implemented an auto-complete search box for seamless web navigation.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>LaDebug Light Theme</b> <a href='https://github.com/Anshika75/LaDebugClub-LighTheme2' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Designed a light theme website for LaDebug Club using HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Leap Year Checker</b> <a href='https://github.com/Anshika75/Leap-Year-Checkeror' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Created a leap year checker tool to solve confusion about leap years.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>Numeric Table Generator</b> <a href='https://github.com/Anshika75/Numeric-Table-Generator' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Developed a numerical table generator to simplify mathematical tasks.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>Article Blog</b> <a href='https://github.com/Anshika75/Article-Blog' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Authored a blog on the topic 'Everyone can’t be in your first row.'
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS

<b style='color:var(--primary-text-color);'>Email Template</b> <a href='https://github.com/Anshika75/Email-Template' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Crafted an email template for Hackoverflow Society using HTML and CSS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS

<b style='color:var(--primary-text-color);'>Umbrella</b> <a href='https://github.com/Anshika75/Umbrella' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Created a CSS umbrella that reacts to changing weather, adding a touch of customization.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Age-Calculator</b> <a href='https://github.com/Anshika75/Age-Calculator' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Developed an age calculator to easily determine one's age.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>Tally Counter</b> <a href='https://github.com/Anshika75/Tally-Counter' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Designed a perfect tally counter for a perfect life.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>Maggi Shelf</b> <a href='https://github.com/Anshika75/Maggi-Shelf' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Mobile-friendly one-page website revealing untold stories, thrilling adventures, and more.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Maggi Services</b> <a href='https://github.com/Anshika75/Maggi-Services' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Mobile-friendly food webpage offering a roller coaster ride of global cuisines.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Shopping Time</b> <a href='https://github.com/Anshika75/Shopping-Time' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Created a vibrant webpage for shopping enthusiasts to enjoy luxurious items.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>TimePiece</b> <a href='https://github.com/Anshika75/TimePiece' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Crafted an analog and digital clock to keep track of valuable time.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Melody Box</b> <a href='https://github.com/Anshika75/Melody-Box' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Mobile view music player presenting top hits to stir emotions and set the right mood.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Miscellany</b> <a href='https://github.com/Anshika75/Miscellany-' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Mobile view grid gallery of images with deep hidden meanings, changing perspectives on life.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Love the way you are</b> <a href='https://github.com/Anshika75/Love-the-way-you-are' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Mobile version video edit made with pure CSS and HTML, telling a story synced with music.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS

Explore the ingenuity and code behind each project! 💻🎨`,
    },
    {
      'id': 6,
      'command': 'projects-intermediate',
      'description': `\nEmbrace the boundless possibilities of code and witness the transformative power of creativity.

      <b style='color:var(--primary-text-color);'>DevLove</b> <a href='https://github.com/Anshika75/DevLove' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
      - <b style='color:var(--secondary-text-color);'>Description:</b>  Code your romance this Valentine's Week with personalized coding love stories, whether single or coupled.
      - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind

<b style='color:var(--primary-text-color);'>Blood Donation</b> <a href='https://github.com/Anshika75/Blood-Donation' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Extend a helping hand with a visually striking blood donation website, seamlessly blending HTML, SASS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, SASS, JS

<b style='color:var(--primary-text-color);'>Utkarsh Marathon</b> <a href='https://github.com/Anshika75/Uttakarsh-Marathon' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Lace up your shoes for the Utkarsh Marathon, a dynamic website powered by HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Rock-Paper-Scissors</b> <a href='https://github.com/Anshika75/Rock-Paper-Scissors' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Challenge your wits with the classic Rock Paper Scissors game, elevated by the magic of HTML, SASS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, SASS, JS

<b style='color:var(--primary-text-color);'>Campus Ambassador</b> <a href='https://github.com/Anshika75/Campus-Ambassador' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Dive into the world of campus influence with the Campus Ambassador website, styled with HTML, SASS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, SASS, JS

<b style='color:var(--primary-text-color);'>Next Shop</b> <a href='https://github.com/Anshika75/Next-Shop' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Elevate your shopping experience with Next Shop, a feature-rich website with admin control, driven by React, Tailwind, and Firebase.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind, Firebase

<b style='color:var(--primary-text-color);'>Maggi News</b> <a href='https://github.com/Anshika75/MaggiNews' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Stay informed with Maggi News, a sleek news website crafted using React, Tailwind, and API integration.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind, API

<b style='color:var(--primary-text-color);'>Tic-Tac-Toe</b> <a href='https://github.com/Anshika75/Tic-Tac-Toe' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Engage in the timeless game of Tic-Tac-Toe, a simple yet entertaining experience built with HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Maggi Chronicles</b> <a href='https://github.com/Anshika75/Maggi-chronicles' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Embark on a coding journey with Maggi Chronicles, a timeline reflecting the creativity and challenges faced along the way.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Maggi Phone</b> <a href='https://github.com/Anshika75/MaggiPhones' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Find the perfect headphones with Maggi Phone, a one-page website guiding you through the world of audio excellence.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Quote Generator</b> <a href='https://github.com/Anshika75/Quote-Generator' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Express yourself with the power of words using the Quote Generator, filtering quotes by tags and built with HTML, CSS, and jQuery.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>My Todo</b> <a href='https://github.com/Anshika75/My-Todo' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Bring order to chaos with My Todo, a productivity tool designed to organize your work, featuring HTML, CSS, and jQuery.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>Password Strength Checker</b> <a href='https://github.com/Anshika75/Password-Strength-Checker' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Safeguard your passwords with the Password Strength Checker, a robust tool crafted with HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Multi Step Form</b> <a href='https://github.com/Anshika75/Multi-Step-Form' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Simplify your form experience with the Multi-Step Form, offering a seamless UI journey through HTML, CSS, and jQuery.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, jQuery

<b style='color:var(--primary-text-color);'>About Me V2</b> <a href='https://github.com/Anshika75/About-Me-V2' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Get to know the creator with About Me V2, a single-page website sharing a brief insight, built using HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>LaDebug Club</b> <a href='https://github.com/Anshika75/LaDebug-Club' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Immerse yourself in the LaDebug Club experience with a single-page website featuring a touch of claymorphism, crafted with HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Maggi Tours</b> <a href='https://github.com/Anshika75/Maggi-Tours' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Embark on a virtual tour with Maggi Tours, a single-page travel website blending HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Clocksy</b> <a href='https://github.com/Anshika75/Clocksy' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Stay punctual in style with Clocksy, an e-commerce one-page wristwatch website styled with HTML, CSS, and JS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

<b style='color:var(--primary-text-color);'>Meteor Shower</b> <a href='https://github.com/Anshika75/Meteor-Shower' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Experience the magic of a meteor shower from the comfort of your home with HTML, CSS, and canvaJS.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, canvaJS

<b style='color:var(--primary-text-color);'>Customizable Particles</b> <a href='https://github.com/Anshika75/Customizable-Particles' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 10px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Take control of your digital universe with Customizable Particles, offering HTML, CSS, and canvaJS magic.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, canvaJS

<b style='color:var(--primary-text-color);'>Maggu Robo</b> <a href='https://github.com/Anshika75/Maggu-Robo' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 10px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Enter the Maggi world with Maggu Robo, a multi-functional robot, combining HTML, CSS, and JS wizardry.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> HTML, CSS, JS

Welcome to a showcase of creative wonders! ✨🎨
  `,
    },
    {
      'id': 7,
      'command': 'projects-advance',
      'description': `\nWelcome to the advanced corner of my coding world! 🚀 Uncover the sophistication and innovation behind these projects:\n

      <b style='color:var(--primary-text-color);'>DetoxDash</b> <a href='https://github.com/Anshika75/DetoxDash' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
        - <b style='color:var(--secondary-text-color);'>Description:</b> DetoxDash empowers teens to resist drugs with an Anti-Drug RPG, Peer-to-Peer Storytelling, Challenges, and a holistic approach through a Community Hub and Drug Level Indicator.
        - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> NExtjs, Tailwind, Firebase Auth, API

      <b style='color:var(--primary-text-color);'>Web Mindz</b> <a href='https://github.com/Anshika75/WebMindz' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
        - <b style='color:var(--secondary-text-color);'>Description:</b> Empowering the visually impaired, our AI chatbot offers conversion, gaming, and translation, envisioning a user-friendly world without sight.
        - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> NExtjs, Tailwind, Firebase Auth, API
        
<b style='color:var(--primary-text-color);'>Maggi Album</b> <a href='https://github.com/Anshika75/Maggi-Album' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> An open platform to cherish and save your precious moments. Try it out!
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind, Firebase

<b style='color:var(--primary-text-color);'>Maggi Weather</b> <a href='https://github.com/Anshika75/Maggi-Weather' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Dive into the realm of UI design innovation with 'Maggi Weather,' a web app offering hourly and weekly weather updates for different cities. Enjoy distinct UI experiences throughout the day!
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind, API

<b style='color:var(--primary-text-color);'>Maggi Hub</b> <a href='https://github.com/Anshika75/Maggi-Hub' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
  - <b style='color:var(--secondary-text-color);'>Description:</b> Indulge in a culinary journey with 'Maggi Hub,' a food website serving a diverse range of delicacies to elevate your new year celebrations.
  - <b style='color:var(--secondary-text-color);'>Tech Stack:</b> React, Tailwind

Embark on a voyage through cutting-edge projects that combine technology and creativity seamlessly! 💻✨`,
    },
    {
      'id': 8,
      'command': 'experience',
      'description': `\nProfessional Chronicles Unveiled ⚡️
       ------------------------------\n
       
      <b style='color:var(--primary-text-color);'>Development Executive</b>
      <i style='color:var(--secondary-text-color);'>CU Academic Competitions | Dec 2023 - Present</i>
      🎨 Designed the app on Figma and developed website. Along with that I've contributed to event and team management

      <b style='color:var(--primary-text-color);'>Frontend Developer</b>
      <i style='color:var(--secondary-text-color);'>Medantrik Medtech Pvt Ltd | Oct 2023 - Present</i>
      🎨 Designed the app on Figma and developed its working prototype.

      <b style='color:var(--primary-text-color);'>Web Development Intern</b>
      <i style='color:var(--secondary-text-color);'>Report Prime | Jun 2023 - Oct 2023</i>
      🌐 Developed the site using Bootstrap and Bootstrap Sass.

      <b style='color:var(--primary-text-color);'>Technical Lead</b>
      <i style='color:var(--secondary-text-color);'>Hackoverflow Society | Jan 2022 - Aug 2023</i>
      👨‍💻 Led the tech team, developed the team website, and actively contributed to event organization.
      ✨ Organized HS Day, Hack The Fest, and judged the CSS Quest competition.

      <b style='color:var(--primary-text-color);'>Subject Matter Expert</b>
      <i style='color:var(--secondary-text-color);'>House of Couton Private Limited | Jun 2023 - Jul 2023</i>
      📝 Completed content writing tasks, worked with UML software, and did wireframe designs.

      <b style='color:var(--primary-text-color);'>Web Developer</b>
      <i style='color:var(--secondary-text-color);'>INFINITY SMART INDIA | Jun 2022 - Dec 2022</i>
      🏫 Developed a school management system on React and Tailwind from Figma UI.

      <b style='color:var(--primary-text-color);'>Senior Frontend Developer</b>
      <i style='color:var(--secondary-text-color);'>Repaybly | Aug 2022 - Nov 2022</i>
      ⚛️ Developed the website using React and Tailwind; managed the team.

      <b style='color:var(--primary-text-color);'>Web Development Intern</b>
      <i style='color:var(--secondary-text-color);'>TreeAndHumanKnot | Jun 2022 - Sep 2022</i>
      💻 Designed and developed the website using child and parent themes.

      <b style='color:var(--primary-text-color);'>Technical Team Co-ordinator</b>
      <i style='color:var(--secondary-text-color);'>The LaDebug Club | Jan 2022 - Aug 2022</i>
      🌐 Developed the team website and handled mailer management.

      <b style='color:var(--primary-text-color);'>Internet Technology Development Intern</b>
      <i style='color:var(--secondary-text-color);'>BasketHunt Pvt Ltd | Feb 2022 - Apr 2022</i>
      🚀 Managed VPNs and user profiles on the Moodle platform.

      Exit Code: Journey Completed. 
      ------------------------------
      Let's connect the dots and script the next adventure.`,
    },
    {
      'id': 9,
      'command': 'social',
      'description': `\nWelcome to the Nexus of Connectivity! 🚀🌐
      ------------------------------

      <b style='color:var(--primary-text-color);'>📞 Phone:</b> Tap into the digits of dialogue 📱 <a href='tel:7988831799' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      <b style='color:var(--primary-text-color);'>📧 Mail:</b> A pathway to the electronic mailbox 💌 <a href='mailto:anshikathakur147@gmail.com' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      <b style='color:var(--primary-text-color);'>💻 GitHub:</b> Unleash the codes of creativity 🐙 <a href='https://github.com/Anshika75' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      <b style='color:var(--primary-text-color);'>🔗 LinkedIn:</b> Navigate the professional network 🌐 <a href='https://www.linkedin.com/in/anshika75/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>

------------------------------
Terminal Connection Established. Let's Stay Linked! 🚀🌟`,
    },
    {
      'id': 10,
      'command': 'volunteer',
      'description': `\nWelcome to the impactful corner of my volunteer journey! 🌟 Dive into the meaningful experiences and contributions made during my time as a volunteer:
    
    <b style='color:var(--primary-text-color);'>Google Cloud Community India</b>:
      - <b style='color:var(--secondary-text-color);'>Role:</b> Google Cloud Arcade Facilitator
      - <b style='color:var(--secondary-text-color);'>Duration:</b> Jun 2023 - Aug 2023 (3 months)
      - <b style='color:var(--secondary-text-color);'>Description:</b> Engaged as a facilitator in the Google Cloud Arcade, contributing to the growth and knowledge-sharing within the Google Cloud Community in India.
    
    <b style='color:var(--primary-text-color);'>Jeevan Pradata Foundation - NGO</b>:
      - <b style='color:var(--secondary-text-color);'>Role:</b> Frontend Developer
      - <b style='color:var(--secondary-text-color);'>Duration:</b> Jun 2023 - Oct 2023 (5 months)
      - <b style='color:var(--secondary-text-color);'>Description:</b> Played a pivotal role as a frontend developer at the Jeevan Pradata Foundation, contributing technical skills to support the NGO's mission and enhance its online presence.
      Embark on a journey of making a positive impact through volunteer work! 🌍🤝`

    },
    {
      'id': 11,
      'command': 'feats',
      'description': `\nDiscover the highlights of my professional journey and accomplishments! 🏆 Uncover the statistics that showcase my skills and experiences:
    
    <b style='color:var(--primary-text-color);'>Projects</b>:
      - <b style='color:var(--secondary-text-color);'>Number:</b> 20+
      - <b style='color:var(--secondary-text-color);'>Description:</b> Successfully completed and contributed to over 20 diverse projects, showcasing a range of technical expertise and creativity.
    
    <b style='color:var(--primary-text-color);'>Connections</b>:
      - <b style='color:var(--secondary-text-color);'>Number:</b> 500
      - <b style='color:var(--secondary-text-color);'>Description:</b> Cultivated a network of 500+ professional connections, fostering collaborations and expanding the reach of my professional community.
    
    <b style='color:var(--primary-text-color);'>Experience</b>:
      - <b style='color:var(--secondary-text-color);'>Duration:</b> 4+ years
      - <b style='color:var(--secondary-text-color);'>Description:</b> Garnered valuable experience over a span of more than 4 years, honing skills and adapting to evolving industry trends.
    
    <b style='color:var(--primary-text-color);'>Endorsed Skills</b>:
      - <b style='color:var(--secondary-text-color);'>Number:</b> 25
      - <b style='color:var(--secondary-text-color);'>Description:</b> Recognized for proficiency in a diverse skill set, with 25+ endorsed skills by peers and professionals.
    
    Embark on a journey through my professional feats, showcasing expertise, connections, and continuous growth! 🚀🌐`
    },
    {
      'id': 12,
      'command': 'testimonials',
      'description': `\nExplore what others have to say about my work and collaboration! 🌟 Delve into these heartfelt testimonials from professionals I've had the privilege to work with:
    
    <b style='color:var(--primary-text-color);'>Kunwar Atharav</b> <a href='https://www.linkedin.com/in/kunwar-atharav-singh-kotwal-3b4930220/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Recruiter - Repaybly
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Anshika was the linchpin of my startup, excelling as the senior front-end developer. Her unmatched technical skills, reliability, and effective communication significantly elevated our projects. I wholeheartedly recommend Anshika for her invaluable contributions in our venture."
    
    <b style='color:var(--primary-text-color);'>Himanshu Goyal</b> <a href='https://www.linkedin.com/in/himanshu-goyal-b2376232/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Design Lead - Hackoverflow Society
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Working with Anshika has been the best decision. Their attention to detail, creative approach to design, and proficiency in front-end technologies have significantly contributed to the success of our projects. Their dedication to delivering high-quality and visually stunning user interfaces sets them apart. I highly recommend Anshika for anyone seeking a skilled and reliable front-end developer."
        
    <b style='color:var(--primary-text-color);'>Ishika Dixit</b> <a href='https://linkedin.com/in/girlwithalaptop/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Design Lead - LaDebug Club
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "I worked with Anshika at LaDebug Club & HackOverflow Society, where her skills as a Frontend Developer were invaluable. Her ability to transform complex designs into intuitive interfaces was impressive. Anshika's teamwork, problem-solving skills, and commitment to deadlines greatly contributed to our projects. Her talents and positive attitude make her an asset to any team."
    
    <b style='color:var(--primary-text-color);'>Shashank</b> <a href='https://www.linkedin.com/in/sha-shanks/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Internal Secretary - Hackoverflow Society
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Anshika is one of the best front end developers that I've ever worked with. No matter what I've designed, I'm always confident that she can bring my designs to iife it the same manner from pixel to pixel through her coding skills."
    
    <b style='color:var(--primary-text-color);'>Krishma Kaur</b> <a href='https://www.linkedin.com/in/krishma7/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Chief Executive Member - LaDebug Club
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "She has made a significant contribution to the organization with her genuine efforts. She is well trained in developing, maintaining and designing websites. Her work has exceeded our expectations. Her talent in creating stunning and memorable website designs is simply remarkable. She demonstrated professionalism, patience, and attention to detail during her time with us. We are pleased with her work and highly recommend her services as a web developer."
    
    <b style='color:var(--primary-text-color);'>Sudhir Verma</b> <a href='https://www.linkedin.com/in/sudhir-kumar-verma-46a661108/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Recruiter - JPF NGO
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Thanks for your talent and hard work, JPF NGO now has a compelling online presence that effectively communicates our cause to the world. I wholeheartedly recommend anshika for any web design or development project; she's a true professional and a pleasure to collaborate with."
    
    <b style='color:var(--primary-text-color);'>Tanay Bhatt</b> <a href='https://www.instagram.com/bhatt_tanay/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Freelancer
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "I am thrilled to provide a strong endorsement for Anshika, a standout freelance frontend developer. Anshika's expertise in React, and Tailwind, coupled with a keen design sense, consistently elevates the quality of our projects. Her commitment to timely delivery, collaborative approach, and innovative thinking make her an invaluable freelancer. Anshika's professionalism and dedication to excellence truly set her apart in the world of frontend development"
    
    <b style='color:var(--primary-text-color);'>Ashwini Gupta</b> <a href='https://www.linkedin.com/in/ashwani-gupta-5658b61bb' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> SE - TCS
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Anshika is an outstanding frontend developer, seamlessly blending design and UX expertise. Proficient in Reactjs and Tailwind, she delivers top-quality work on time. Her commitment to staying current with industry trends sets her apart. Highly recommend for any frontend development needs."
    
    <b style='color:var(--primary-text-color);'>Yashi Goyal</b> <a href='https://www.linkedin.com/in/yashigoyal/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> TAHK Web Dev
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Anshika has a good grasp of skills in frontend development. I worked with her on a project using HTML, CSS, JS and BootStrap. She is a team player and prefers working together in order to take the project to greater heights."
    
    <b style='color:var(--primary-text-color);'>Mridul Verma</b> <a href='https://linkedin.com/in/mridul-verma-719792230/' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Project Partner
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "We had the pleasure of working with Anshika as our Front-End Developer on a recent project. Her unique blend of creativity, technical expertise, and attention to detail significantly elevated the user experience. Anshika seamlessly integrated feedback, collaborated effectively, and fostered a positive working environment. I wholeheartedly recommend Anshika for her dedication and valuable contributions as a Front-End Developer. Look forward to working together again in the future."
    
    <b style='color:var(--primary-text-color);'>Prasant Kumar</b> <a href='https://www.linkedin.com/in/decodeprasant' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>:
    - <b style='color:var(--secondary-text-color);'>Role:</b> Frontend Dev
    - <b style='color:var(--secondary-text-color);'>Testimonial:</b> "Anshika is great at building websites, turning ideas into beautiful, functional sites. Her coding and design skills are top-notch. I've seen her coding skills improve a lot. She's leveling up, and it's awesome to witness! Her passion for what she does makes her work stand out."
    
    Embark on a journey through the praises and recommendations from professionals who have witnessed my dedication and expertise! 🌐🙌`
    },
    {
      'id': 13,
      'command': 'leisures',
      'description': `\nStep into the realm of my leisure pursuits! 🎶📝 Explore the facets of my creative side beyond coding:
    
    <b style='color:var(--primary-text-color);'>Lyricism</b>
    - <b style='color:var(--secondary-text-color);'>Description:</b> Immerse yourself in the world of words and emotions through my lyrical expressions. Crafting meaningful and poetic verses is one of my cherished leisure activities.
    
    <b style='color:var(--primary-text-color);'>Text Crafting</b>
    - <b style='color:var(--secondary-text-color);'>Description:</b> Dive into the art of text crafting, where words are carefully woven to convey ideas, stories, and messages. Explore the creative process behind shaping written content.
    
    <b style='color:var(--primary-text-color);'>Oratory</b>
    - <b style='color:var(--secondary-text-color);'>Description:</b> Experience the power of spoken words and effective communication. Oratory is not just a skill but a leisure pursuit, where I engage in expressing thoughts and ideas with eloquence.
    
    <b style='color:var(--primary-text-color);'>Artistry</b>
    - <b style='color:var(--secondary-text-color);'>Description:</b> Uncover the visual dimensions of my creativity. Artistry is a form of expression where I explore and bring ideas to life through various visual mediums.
    
    Embark on a journey through my leisure activities, where creativity takes center stage! 🎨✨`
    },
    {
      'id': 14,
      'command': 'languages',
      'description': `\nExplore the linguistic landscape of my proficiency! 🌐🗣️ Delve into the languages that I am well-versed in:
    
    <b style='color:var(--primary-text-color);'>Hindi</b>
    - <b style='color:var(--secondary-text-color);'>Proficiency:</b> Fluent
    - <b style='color:var(--secondary-text-color);'>Description:</b> Navigate through the richness of Hindi, my native language, with seamless fluency and a deep understanding of its cultural nuances.
    
    <b style='color:var(--primary-text-color);'>English</b>
    - <b style='color:var(--secondary-text-color);'>Proficiency:</b> Fluent
    - <b style='color:var(--secondary-text-color);'>Description:</b> Engage in effective communication and expression in English, showcasing proficiency in both written and spoken forms.
    
    <b style='color:var(--primary-text-color);'>French</b>
    - <b style='color:var(--secondary-text-color);'>Proficiency:</b> Intermediate
    - <b style='color:var(--secondary-text-color);'>Description:</b> Embark on a linguistic journey with intermediate proficiency in French, exploring the beauty of this romantic language.
    
    <b style='color:var(--primary-text-color);'>Punjabi</b>
    - <b style='color:var(--secondary-text-color);'>Proficiency:</b> Conversational
    - <b style='color:var(--secondary-text-color);'>Description:</b> Engage in casual conversations and connect culturally with my conversational proficiency in Punjabi.
    
    Embark on a linguistic adventure, exploring the diverse world of languages that I am proficient in! 🗺️🔤`
    },
    {
      'id': 15,
      'command': 'education',
      'description': `\nEmbark on a journey through my educational milestones! 📚🎓 Explore the key phases of my academic life and the valuable insights gained along the way:
    
      <b style='color:var(--primary-text-color);'>Graduation: Present</b>
      - <b style='color:var(--secondary-text-color);'>CGPA:</b> 8.7
      - <b style='color:var(--secondary-text-color);'>Description:</b> After a lot of analysis among different colleges in North India, I chose CU, and looking at continuous improvement in my skills and personality, I can proudly say it's one of the best decisions I made.
    
      <b style='color:var(--primary-text-color);'>Senior Secondary School: 2021</b>
      - <b style='color:var(--secondary-text-color);'>Percentage:</b> 93.4%
      - <b style='color:var(--secondary-text-color);'>Description:</b> During this time, I got exposure to event management and the world of coding. It was the time when I truly realized my potential and was able to get a clear road map of my future choices.
    
      <b style='color:var(--primary-text-color);'>Secondary School: 2019</b>
      - <b style='color:var(--secondary-text-color);'>Percentage:</b> 96%
      - <b style='color:var(--secondary-text-color);'>Description:</b> One of the turning phases in my life that gave me an insight into my real skills. Since it was the first time I appeared for boards, I truly recognized the level of competitiveness around the world.
    
    Embark on a journey through my academic milestones, witnessing the growth and insights gained at each educational phase! 🏫🌱`
    },
    {
      'id': 16,
      'command': 'badges',
      'description': `\nUnlock the badges of my journey! 🛡️🔓 Explore the badges earned through dedication and hard work:\n
      - <b style='color:var(--primary-text-color);'>AWS Academy Graduate - AWS Academy Cloud Architecting</b> <a href='https://www.credly.com/badges/a432492a-8918-4c55-a390-bd32d242d73b/public_url' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Cybersecurity Essentials</b> <a href='https://www.credly.com/badges/9e042fea-48fb-4826-8dad-c1be81c1986e/public_url' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Data Science Foundations</b> <a href='https://www.credly.com/badges/c2f4847f-0ff4-45df-acbe-f5e2fefc8abe/public_url' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Databases and SQL for Data Science</b> <a href='https://www.credly.com/badges/77d7f6cf-77c4-40d9-bc9d-8a295a27d6e1/public_url' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Software Engineering Essentials</b> <a href='https://www.credly.com/badges/12e76a1c-cf2e-4d86-b085-9668682310c3/public_url' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Android Studio User Badge</b> <a href='https://developers.google.com/profile/badges/activity/android/install-android-studio' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Surfer Moby Dock</b> <a href='https://www.holopin.io/userbadge/cla2g6tq01036609jnkubeooik' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Hacktoberfest 2022: Level 4</b> <a href='https://www.holopin.io/userbadge/clsw7mz4r93570fiek0wrafhs' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Hacktoberfest 2022: Level 3</b> <a href='https://www.holopin.io/userbadge/cl9c7jexb450509k0fcclxk9z' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Hacktoberfest 2022: Level 2</b> <a href='https://www.holopin.io/userbadge/clsw81hgv129210fiexg3kg87v' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Hacktoberfest 2022: Level 1</b> <a href='https://www.holopin.io/userbadge/cl9c7jwio457409k0valv7a0h' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Hacktoberfest 2022: Registered</b> <a href='https://www.holopin.io/userbadge/cl91cmu512066309jqegnx2lzg' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Appwrite Hacktoberfest 2022</b> <a href='https://www.holopin.io/userbadge/clampo1s1153408mkdrjxg13w' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>New Year, New Skills: Red Challenge (A)</b> <a href='https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3142086' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>New Year, New Skills: Green Challenge (A)</b> <a href='https://www.cloudskillsboost.google/public_profiles/b42300dc-0e54-4781-8cfc-4ee5dd8442f0/badges/3105263' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Quickdraw</b> <a href='https://github.com/users/Anshika75/achievements/quickdraw' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>
      - <b style='color:var(--primary-text-color);'>Pull Shark</b> <a href='https://github.com/users/Anshika75/achievements/pull-shark' target='_blank' style='text-decoration: none; color:var(--secondary-text-color);'><i class='fa-solid fa-up-right-from-square' style='font-size: 12px; color:var(--secondary-text-color);'></i></a>

      Embark on a journey through my badges collection, witnessing the skills and values demonstrated with each earned badge! 💼🔑"`
    },
    {
      'id': 17,
      'command': 'events',
      'description': `\nExplore the events I've organized or coordinated! 🎉📅 Delve into the exciting experiences and impactful moments created through my event management efforts:\n
      - <b style='color:var(--primary-text-color);'>HashCode 2022</b>
      - <b style='color:var(--primary-text-color);'>Hack-The-Fest 2022</b>
      - <b style='color:var(--primary-text-color);'>HS Day</b>

     Embark on a journey through the events I've organized or coordinated, witnessing the impact created and the memories forged with each successful endeavor! 🌟🎈"`
    }

  ]
};

module.exports = commands;
