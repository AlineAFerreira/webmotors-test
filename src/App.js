import React from 'react';
import GlobalStyle, {Container} from './styles';

class App extends React.Component {
  render() {
    return(
      <>
        <GlobalStyle />
        <Container>
          <form>
            <label>
              <input type="checkbox" name="novos" id="novos" />Novos
            </label>
            <label>
              <input type="checkbox" name="usados" id="usados" />Usados
            </label>

            <input type="text" />
            <select>
              <option>50km</option>
              <option>100km</option>
              <option>150km</option>
              <option>200km</option>
            </select>

            <select>
              <option>50km</option>
              <option>100km</option>
              <option>150km</option>
              <option>200km</option>
            </select>
          </form>
        </Container>
      </>
    );
  }
}
export default App