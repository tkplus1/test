import React from 'react';
import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';


export function LightSwitch() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();


  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.teal[4] : theme.colors.teal[6],
        })}
      >
        {colorScheme === 'dark' ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}

export default LightSwitch;