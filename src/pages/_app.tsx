import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from '../store/store';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
