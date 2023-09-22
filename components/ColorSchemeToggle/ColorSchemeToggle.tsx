'use client';

import { Button, Group, UnstyledButton, useMantineColorScheme, Text, Center } from '@mantine/core';

import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? IconSun : IconMoon;

  return (
    <Group justify="center" mt="xl">
      {/* <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button> */}

      <UnstyledButton
        aria-label="Toggle theme"
        onClick={() => toggleColorScheme()}
        title="Ctrl + J"
      >
        <Center>
          <Icon size="1.05rem" stroke={1.5} />
        </Center>
      </UnstyledButton>
    </Group>
  );
}
