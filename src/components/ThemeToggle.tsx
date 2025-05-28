import { FC } from 'react';
// You can use lucide-react or your own icons. Here are inline SVGs for Sun/Moon:
const Sun = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx={12} cy={12} r={5}/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
);
const Moon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
);

type Props = {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
};

const ThemeToggle: FC<Props> = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    aria-label="Toggle theme"
    className="p-2 rounded focus:outline-none"
  >
    {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
  </button>
);

export default ThemeToggle;
