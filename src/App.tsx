import AppRoutes from './router'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { DraculaTheme } from 'dracula-mantine'
import Layout from './layout/Layout';

function App() {
  return (
    <MantineProvider theme={DraculaTheme} defaultColorScheme="dark">
      <Layout />
    </MantineProvider>
  )
}

export default App
