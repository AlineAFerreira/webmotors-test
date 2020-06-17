import React from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = (state)=> {
  return {
    checked: state.cars.checked,
    makes: state.cars.makes,
    models: state.cars.models,
    versions: state.cars.versions,
    offers: state.cars.offers,
    radius: state.cars.radius,
    selectedMake: state.cars.selectedMake,
    selectedModel: state.cars.selectedModel,
    selectedVersion: state.cars.selectedVersion
  }
}

export default connect(
  mapStateToProps,
)(App);