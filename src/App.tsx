
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <h1>Hello World.</h1>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
