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
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
  IconSearch,
  IconCategory2
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { Link } from "react-router-dom";
import getCategorias from "../../services/Categorias/getCategorias";
import { useEffect, useState } from "react";


const mockdata = [
  {
    icon: IconCode,
    title: "Em alta!",
    description: "Veja os filmes mais assistidos nos ultimos dias",
  },
  {
    icon: IconCoin,
    title: "Recomendados",
    description: "Esses estão sendo bem avaliados",
  },
  {
    icon: IconBook,
    title: "Lançamentos",
    description: "Filmes em cartaz!",
  },
  {
    icon: IconFingerprint,
    title: "Aventura",
    description: "Filmes de aventura para os que gostam de aventura",
  },
  {
    icon: IconChartPie3,
    title: "Ficção",
    description: "Filmes de ficção científica",
  },
  {
    icon: IconNotification,
    title: "Terror",
    description: "Para aqueles que gostamde sentir medo",
  },
  {
    icon: IconCode,
    title: "Em alta!",
    description: "Veja os filmes mais assistidos nos ultimos dias",
  },
  {
    icon: IconCoin,
    title: "Recomendados",
    description: "Esses estão sendo bem avaliados",
  },
  {
    icon: IconBook,
    title: "Lançamentos",
    description: "Filmes em cartaz!",
  },
  {
    icon: IconFingerprint,
    title: "Aventura",
    description: "Filmes de aventura para os que gostam de aventura",
  },
  {
    icon: IconChartPie3,
    title: "Ficção",
    description: "Filmes de ficção científica",
  },
  {
    icon: IconNotification,
    title: "Terror",
    description: "Para aqueles que gostamde sentir medo",
  },
  {
    icon: IconCode,
    title: "Em alta!",
    description: "Veja os filmes mais assistidos nos ultimos dias",
  },
  {
    icon: IconCoin,
    title: "Recomendados",
    description: "Esses estão sendo bem avaliados",
  },
  {
    icon: IconBook,
    title: "Lançamentos",
    description: "Filmes em cartaz!",
  },
  {
    icon: IconFingerprint,
    title: "Aventura",
    description: "Filmes de aventura para os que gostam de aventura",
  },
  {
    icon: IconChartPie3,
    title: "Ficção",
    description: "Filmes de ficção científica",
  },
  {
    icon: IconNotification,
    title: "Terror",
    description: "Para aqueles que gostamde sentir medo",
  },
  {
    icon: IconCode,
    title: "Em alta!",
    description: "Veja os filmes mais assistidos nos ultimos dias",
  },
  {
    icon: IconCoin,
    title: "Recomendados",
    description: "Esses estão sendo bem avaliados",
  },
  {
    icon: IconBook,
    title: "Lançamentos",
    description: "Filmes em cartaz!",
  },
  {
    icon: IconFingerprint,
    title: "Aventura",
    description: "Filmes de aventura para os que gostam de aventura",
  },
  {
    icon: IconChartPie3,
    title: "Ficção",
    description: "Filmes de ficção científica",
  },
  {
    icon: IconNotification,
    title: "Terror",
    description: "Para aqueles que gostamde sentir medo",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const icon = <IconSearch style={{ width: rem(16), height: rem(16) }} />;
  const [genres, setGenres] = useState<any>([])

  useEffect(() => {
    getCategoriasFunc()
  }, [])
  
  const getCategoriasFunc = async () => {
    const { data } = await getCategorias()
    setGenres(data.genres)
  }

  const links = genres.map((item: any) => {
    return (
    <Link to={`categoria/${item.id}`}>
      <UnstyledButton className={classes.subLink} key={item.id} p={6}>
        <Group wrap="nowrap" align="center">
          <ThemeIcon size={34} variant="default" radius="md">
            <IconCategory2
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.orange[8]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500} c={theme.colors.dark[1]}>
              {item.name}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Link>
    )
});

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" className="px-[6vw]">
          <Link to={'/'}>
            <h2 className="w-[220px] font-bold text-white cursor-pointer">Scohati TV</h2>
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to={"/"} className={classes.link}>
              Home
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
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

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Categorias</Text>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={3} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} c={theme.colors.gray[1]} fz="xl">
                        Descubra
                      </Text>
                      <Text c={theme.colors.gray[4]} fz="sm">
                        Encontre novos filmes
                      </Text>
                    </div>
                    <Link to={'filmes'}>
                      <Button variant="default">Ver todos os filmes</Button>
                    </Link>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to={"/contato"} className={classes.link}>
              Contato
            </Link>
          </Group>

          <Group visibleFrom="sm">
            <TextInput
              rightSectionPointerEvents="none"
              rightSection={icon}
              placeholder="Pesquise um Filme"
            />
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
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
