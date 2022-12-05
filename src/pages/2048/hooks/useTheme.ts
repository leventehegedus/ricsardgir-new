import { useReducer } from 'react';
import { Theme, ThemeName } from '../themes/types';
import darkTheme from '../themes/dark';

export type ThemeEntity = {
  name: ThemeName;
  value: Theme;
};

const isThemeName = (t: string): t is ThemeName => t === 'dark';

const getTheme = (name: ThemeName): ThemeEntity =>
  name === 'dark'
    ? { name: 'default', value: darkTheme }
    : { name: 'dark', value: darkTheme };

const themeReducer = (theme: ThemeEntity, nextThemeName: string) =>
  isThemeName(nextThemeName) ? getTheme(nextThemeName) : theme;

const useTheme = (
  initialThemeName: ThemeName,
): [ThemeEntity, (nextTheme: string) => void] =>
  useReducer(themeReducer, initialThemeName, getTheme);

export default useTheme;
