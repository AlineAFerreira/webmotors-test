import React from 'react';
import GlobalStyle, {Container} from './styles';
import Search from './components/Search';
import Results from './components/Results';

class App extends React.Component {

  render() {
    return(
      <>
        <GlobalStyle />
        <Container>
          <Search />
          <Results />
        </Container>
      </>
    );
  }
}
export default App