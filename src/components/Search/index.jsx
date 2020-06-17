import React from 'react';
import { searchService } from './../../services/search';
import { FaCarSide, FaMotorcycle, FaMapMarkerAlt, FaCheck, FaAngleRight} from 'react-icons/fa';
import Logo from './../../assets/images/webmotors_logo.svg';
import { 
  Container, 
  HeaderSearch, 
  CheckboxContainer, 
  HiddenCheckbox,
  StyledCheckbox,
  TypeOption, 
  Textbutton, 
  SearchBox, 
  BoxField,
  SearchAction, 
  AdvancedSearch, 
  CleanFields, 
  ButtonSubmit 
} from './styles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      makes: [],
      models: [],
      versions: [],
      offers: [],
      radius: 100,
      selectedMake: 'Todas',
      selectedModel: 'Todas',
      selectedVersion: 'Todas'
    };
  }

  handleCheckboxChange = e =>
    this.setState({ checked: event.target.checked })

  handleMakesChange = e => {
    const id = e.target.value;
    const {options, selectedIndex} = e.target;
    const selectedMake = options[selectedIndex].innerHTML;

    searchService.getModels(id)
    .then(data => {
      this.setState({models : data, selectedMake, selectedModel: 'Todas', selectedVersion: 'Todas'})
    });
  }

  handleModelsChange = e => {
    const id = e.target.value;
    const {options, selectedIndex} = e.target;
    const selectedModel = options[selectedIndex].innerHTML;

    searchService.getVersions(id)
    .then(data => {this.setState({versions : data, selectedModel, selectedVersion: 'Todas'})});
  }

  handleSelectedVersion = e => {
    const {options, selectedIndex} = e.target;
    const version = options[selectedIndex].innerHTML;
    this.setState({selectedVersion : version})
  }

  handlerFormSubmit = () => {
    searchService.getOffers(1)
    .then(data => {this.setState({offers : data})})
  }

  componentDidMount(){
    searchService.getMakes()
    .then(res => {return this.setState({makes : res})}
    );
  }

  render() {
    return (
      <Container>
        <img src={Logo} />
        <HeaderSearch>
          <div className="box-vehicleTypes" alt="Webmotors">
            <TypeOption className="active">
              <FaCarSide size={28} style={{color: '#ca242e'}}/>
              <Textbutton>
                comprar
                <span>Carros</span>
              </Textbutton>
            </TypeOption>
            <TypeOption>
              <FaMotorcycle size={28} />
              <Textbutton>
                comprar
                <span>Motos</span>
              </Textbutton>
            </TypeOption>
          </div>
          <button>Vender meu carro</button>
        </HeaderSearch>
        <SearchBox>
          <form>
            <CheckboxContainer  className="box-check">              
              <HiddenCheckbox name="new" id="new"
                checked={this.state.checked} 
                onChange={this.handleCheckboxChange}  />
              <StyledCheckbox htmlFor="new">Novos</StyledCheckbox>
              
              <HiddenCheckbox name="used" id="used" />
              <StyledCheckbox htmlFor="used">Usados</StyledCheckbox>
            </CheckboxContainer >

            <BoxField className="col-5 box-location">
              <span>
                <FaMapMarkerAlt style={{color: '#ca242e', marginRight: 10}}/>
                Onde: 
              </span>
              <input list="browsers" name="browser" id="browser" />
            </BoxField>

            <BoxField className="col-1 box-radius">
              <span>Raio: <strong>{this.state.radius}km</strong></span>
              <select onChange={(e)=> this.setState({radius : e.target.value})}>
                <option value="50">50km</option>
                <option value="100">100km</option>
                <option value="150">150km</option>
                <option value="200">200km</option>
              </select>
            </BoxField>

            <BoxField className="col-3">
              <span>Marcas: <strong>{this.state.selectedMake}</strong></span>
              <select onChange={this.handleMakesChange}>
              <option value="0">Todos</option>
                {this.state.makes.map(item => {
                  return <option key={item.ID} value={item.ID}>{item.Name}</option>
                })}
              </select>
            </BoxField>

            <BoxField className="col-3">
              <span>Modelos: <strong>{this.state.selectedModel}</strong></span>
              <select onChange={this.handleModelsChange}>
                <option value="0">Todos</option>
                {this.state.models.map(item => {
                    return <option key={item.ID} value={item.ID}>{item.Name}</option>
                  })
                }
              </select>
            </BoxField>    

            <BoxField className="col-3">
              <span>Ano Desejado: </span>
              <select onChange={this.handleModelsChange}>

              </select>
            </BoxField>   

            <BoxField className="col-3">
              <span>Faixa de preço: </span>
              <select onChange={this.handleModelsChange}>
                <option value="0">Todos</option>
                <option value="1">R$ 0 a R$ 5.000</option>
                <option value="2">R$ 5.0001 a R$ 10.000</option>
                <option value="3">R$ 10.0001 a R$ 15.000</option>
                <option value="4">R$ 15.0001 a R$ 20.000</option>
                <option value="5">R$ 20.0001 a R$ 25.000</option>
                <option value="6">R$ 25.0001 a R$ 30.000</option> 
              </select>
            </BoxField>  

            <BoxField className="col-6">
              <span>Versões: <strong>{this.state.selectedVersion}</strong></span>
              <select onChange={this.handleSelectedVersion}>
                <option value="0">Versão: Todas</option>
                {this.state.versions.map(item => {
                    return <option key={item.ID} value={item.ID}>{item.Name}</option>
                  })
                }
              </select>
            </BoxField>                            
          </form>
          <SearchAction>
            <AdvancedSearch><FaAngleRight />Busca Avançada</AdvancedSearch>
            <CleanFields>Limpar filtros</CleanFields>
            <ButtonSubmit type="button" onClick={this.handlerFormSubmit}>Ver ofertas</ButtonSubmit>
          </SearchAction>
        </SearchBox>
      </Container>
    );
  }
}

export default Search;