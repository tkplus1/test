import { ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorageValue } from '@mantine/hooks';
import CustomNav from '../components/CustomNav';
import { HeroTitle } from '../components/HeroTitle';


export default function HomePage() {

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });

  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark')); 
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (

    <div>
      <CustomNav />
      <HeroTitle />
    </div>
  );
}
