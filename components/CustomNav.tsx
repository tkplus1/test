import React from 'react';
import {
  createStyles,
  Menu,
  Center,
  Header,
  Container,
  Group,
  Button,
  Burger,
  ActionIcon,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { BrandDiscord, ChevronDown, Star } from 'tabler-icons-react';
import Logo from './Logo';
import LightSwitch from './LightSwitch';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
 
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: { link: string; label: string; links?: { link: string; label: string }[] }[];
}


// const variants = {
//   hidden: { 
//     opacity: 1, 
//     y: -100
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       delay: 0,
//       when: 'beforeChildren'
//     }
//   },
// }

// const variantsChild = {
//   hidden: { 
//     opacity: 0, 
//     y: -100
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: 'spring',
//       delay: 8,
//       staggerChildren: 2,
//     }
//   },
// }

export function HeaderAction({ links }: HeaderActionProps) {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger='hover'
          delay={0}
          transitionDuration={0}
          placement='end'
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={0} style={{ position: 'fixed' }}>
      <Container className={classes.inner} fluid>
        <Group>
        <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size='sm'
          />
         <Logo />
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group spacing={0}  position='right' noWrap>
          <ActionIcon size='lg'>
          <BrandDiscord size={18} />
          </ActionIcon>
       
          <ActionIcon size='lg'>
          <LightSwitch />
          </ActionIcon>
        
        <Button radius='xl' sx={{ height: 30 }} style={{ marginLeft: 8 }} >
        <ActionIcon size='xs' color='white' > <Star color='white' style={{ paddingRight: 2 }} /> </ActionIcon>  Mint Your +Name
        </Button>
        </Group>
      </Container>
    </Header>
  );
}

const data = {
  links: [
    {
      link: '#1',
      label: 'Token',
      links: [
        {
          link: '/token/staking',
          label: 'Hourly Payouts',
        },
        {
          link: '/token/resell',
          label: 'Resell Thanks',
        },
      ],
    },
    {
      link: '#2',
      label: 'Wallet',
      links: [
        {
          link: '/token/gas',
          label: 'Zero Gas',
        },
        {
          link: '/token/resell',
          label: 'Auto Add Tokens',
        },
        {
          link: '/token/decentralzied',
          label: 'Decentralized',
        },
      ],
    },
    {
    link: '#3',
    label: 'DAO',
    links: [
      {
        link: '/dao/treasury',
        label: 'Treasury',
      },
      {
        link: '/token/stablebacked',
        label: 'Stablecoin Backed',
      },
    ],
  },
    {
      link: '/manifesto',
      label: 'Manifesto',
    },
    {
      link: '/press',
      label: 'Press Kit',
    },
    {
      link: '/docs',
      label: 'Docs',
    },
  ],
};

export default function CustomNav() {
  return (

      <HeaderAction {...data} />

  );
}
