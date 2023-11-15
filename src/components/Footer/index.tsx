import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './FooterSocial.module.css';
import React from 'react';
import { Link } from 'react-router-dom'

const FooterSocial: React.FC = () => {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <h2 className='font-bold text-white'>Scohati TV</h2>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link to={'https://www.linkedin.com/in/scohati/'}>
                <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Link>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <Link to={'https://github.com/Scohati/Scohati-TV'}>
                <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </Link>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default FooterSocial