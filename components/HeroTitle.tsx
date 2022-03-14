import React from 'react';
import { createStyles, Container, Text, Button, Group, useMantineTheme, ActionIcon, ButtonProps } from '@mantine/core';
import TypeIt from 'typeit-react';
import { BrandDiscord } from 'tabler-icons-react';
import CardCustom from './CardCustom';
import { css } from '@emotion/css';



const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingTop: 150,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Poppins, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 600,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  githubControl: {
    borderWidth: 2,
    borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.dark[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'transparent',

    '&:hover': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
      } !important`,
    },
  },
}));

export function DiscordButton(props: ButtonProps<'button'>) {
  return (
    <Button
      leftIcon={<BrandDiscord />}
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#7289da',
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.lighten('#5865F2', 0.05)
              : theme.fn.darken('#7289da', 0.05),
        },
      })}
      {...props}
    />
  );
}

export function HeroTitle() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          <TypeIt>The decentralized,<span className={css`
      background-color: black;
      }
    `}> private </span> + modern{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'cyabn', to: 'teal' }} inherit>
            Metamask Alternative. 
          </Text>{' '}</TypeIt>
        </h1>

        <CardCustom>hi</CardCustom>

        <Text className={classes.description} style={{ fontWeight: 300 }}>
          Thanks is decentralized privacy centered Multi-Chain
          <span style={{ fontWeight: 700, fontSize: 20 }}> WALLET</span>,
          <span style={{ fontWeight: 700, fontSize: 20 }}> TOKEN </span>
          and <span style={{ fontWeight: 700, fontSize: 20 }}>DAO</span>.
          </Text>
          <Text className={classes.description} style={{ fontWeight: 300 }} >  
          Earn hundreds of dollars per day.
         
          Send and receive, gas free.
         
          Zero tracking.  
        </Text>

       

        <Group className={classes.controls}>
          <Button
            size="xl"
            radius="xl"
            className={classes.control}
            variant="light"
            gradient={{ from: 'cyan', to: 'teal' }}
          >
           <ActionIcon size="lg" color={theme.colors.teal[0]}><BrandDiscord /></ActionIcon>  Join our Discord
          </Button>
          <DiscordButton>Join Discord community</DiscordButton>

     
         
        </Group>
   
      </Container>
    </div>
  );
}