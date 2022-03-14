import { useMantineColorScheme } from '@mantine/core';
import LogoDark from '../public/logo/LogoDark.svg';
import LogoLight from '../public/logo/LogoLight.svg';

function Logo() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
       <div>
        {dark ? (
            <LogoDark />
          ) : (
            <LogoLight />
          )}
          
          </div>
         
    );
}

export default Logo;