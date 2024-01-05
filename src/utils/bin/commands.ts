// List of commands that do not require API calls
import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hey! Here are all the available commands to use:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}, orchestrating innovation with code. MERN stack virtuoso.
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};
export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://instagram.com/${config.social.instagram}/`);
  return 'Opening instagram...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const spotify = async (args: string[]): Promise<string> => {
  window.open(`https://open.spotify.com/user/${config.social.spotify}`);

  return 'Opening spotify...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const projects = async (args: string[]): Promise<string> => {
  return `These are my projects:
<a class="decoration-dotted" href="${config.projects[0].url}" target="_blank">-${config.projects[0].name}</a></u></li>
<a class="decoration-dotted" href="${config.projects[1].url}" target="_blank">-${config.projects[1].name}</a></u></li>
<a class="decoration-dotted" href="${config.projects[2].url}" target="_blank">-${config.projects[2].name}</a></u></li>`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `haha! you thought you could list my directories?`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const game = async (args?: string[]): Promise<string> => {
  return `This is a guessing game. Type 'guess <your number>' to play. `;
};

export const guess = async (args: string[]): Promise<string> => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  const userGuess = parseInt(args[0], 10);
  if (!isNaN(userGuess)) {
    if (userGuess === randomNumber) {
      return 'Congratulations! You guessed the correct number!';
    } else {
      return `Oops! Wrong guess. The correct number was ${randomNumber}.`;
    }
  } else {
    return 'Please provide a valid number as your guess.';
  }
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗  ██╗██╗███╗   ███╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗   ██╗     ██████╗██╗  ██╗ █████╗ ██╗   ██╗██╗  ██╗ █████╗ ███╗   ██╗
██║  ██║██║████╗ ████║██╔══██╗████╗  ██║██╔════╝██║  ██║██║   ██║    ██╔════╝██║  ██║██╔══██╗██║   ██║██║  ██║██╔══██╗████╗  ██║
███████║██║██╔████╔██║███████║██╔██╗ ██║███████╗███████║██║   ██║    ██║     ███████║███████║██║   ██║███████║███████║██╔██╗ ██║
██╔══██║██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚════██║██╔══██║██║   ██║    ██║     ██╔══██║██╔══██║██║   ██║██╔══██║██╔══██║██║╚██╗██║
██║  ██║██║██║ ╚═╝ ██║██║  ██║██║ ╚████║███████║██║  ██║╚██████╔╝    ╚██████╗██║  ██║██║  ██║╚██████╔╝██║  ██║██║  ██║██║ ╚████║
╚═╝  ╚═╝╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝      ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                                                                                

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
