import React from 'react';
import Router from './Router';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import { ReactQueryDevtools } from 'react-query/devtools';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family:'Roboto', sans-serif;
    font-weight: 300;
    color: ${(props) => props.theme.textColor};

    
    
  }
  a {
    text-decoration:none;
    color: inherit;
    display: block;
  }
  `;

function App() {
    return (
        <>
            <Helmet>
                <title>CONE</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,400&family=Roboto:wght@100;300;400&display=swap"
                    rel="stylesheet"
                />
                <script defer src="https://unpkg.com/scrollreveal"></script>
            </Helmet>
            <GlobalStyle />
            <Router />
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </>
    );
}

export default App;
