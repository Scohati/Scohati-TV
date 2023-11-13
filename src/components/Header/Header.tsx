import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconBrandLinkedin
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';
  import { Link } from 'react-router-dom'
  
  const mockdata = [
    {
      icon: IconCode,
      title: 'Em alta!',
      description: 'Veja os filmes mais assistidos nos ultimos dias',
    },
    {
      icon: IconCoin,
      title: 'Recomendados',
      description: 'Esses estão sendo bem avaliados',
    },
    {
      icon: IconBook,
      title: 'Lançamentos',
      description: 'Filmes em cartaz!',
    },
    {
      icon: IconFingerprint,
      title: 'Aventura',
      description: 'Filmes de aventura para os que gostam de aventura',
    },
    {
      icon: IconChartPie3,
      title: 'Ficção',
      description: 'Filmes de ficção científica',
    },
    {
      icon: IconNotification,
      title: 'Terror',
      description: 'Para aqueles que gostamde sentir medo',
    },
  ];
  
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title} p={6}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.orange[8]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} c={theme.colors.orange[8]}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <h2 className='font-bold text-white'>Scohati TV</h2>
  
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link to={'/'} className={classes.link}>
                Home
              </Link>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Categorias
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.orange[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Categorias</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Precisa de ajuda?
                        </Text>
                        <Text size="xs" c="dimmed">
                          Entre em contato conosco:
                        </Text>
                      </div>
                      <Button variant="default">Contato</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <Link to={'/contato'} className={classes.link}>
                Contato
              </Link>
            </Group>
  
            <Group visibleFrom="sm">
              <a href="https://www.linkedin.com/in/scohati/" target='_blank'>
                <Button>
                  <ThemeIcon size={34} variant="default" radius="md">
                    <IconBrandLinkedin style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
                  </ThemeIcon>
                </Button>
              </a>
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" ml={15}>
                  Categorias
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="#" className={classes.link}>
              Learn
            </a>
            <a href="#" className={classes.link}>
              Academy
            </a>
  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }