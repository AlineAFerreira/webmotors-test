import React from 'react';
import {connect} from 'react-redux';
import { 
  updateMakesList,
  updateModelsList,
  updateVersionsList,
  handleCheckboxChange,
  updateSelectedRadius,
  updateSelectedMake,
  updateSelectedModel,
  updateSelectedVersion,
  updateOffersList,
  updateLoading
} from './../../store/actions';
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

  componentDidMount(){
    searchService.getMakes()
    .then(res => {
      return this.props.updateMakesList(res)
    });
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
                checked={this.props.checked} 
                onChange={(e)=> this.props.handleCheckboxChange(e.target.checked)}  />
              <StyledCheckbox htmlFor="new">
                <FaCheck />
                Novos
              </StyledCheckbox>
              
              <HiddenCheckbox name="used" id="used" />
              <StyledCheckbox htmlFor="used">
                <FaCheck />
                Usados
              </StyledCheckbox>
            </CheckboxContainer >

            <BoxField className="col-5 box-location">
              <span>
                <FaMapMarkerAlt style={{color: '#ca242e', marginRight: 10}}/>
                Onde: 
              </span>
              <input list="browsers" value="São Paulo - SP" name="browser" id="browser" readOnly />
            </BoxField>

            <BoxField className="col-1 box-radius">
              <span>Raio: <strong>{this.props.radius}km</strong></span>
              <select onChange={(e)=> this.props.updateSelectedRadius(e.target.value)}>
                <option value="100">100km</option>
                <option value="150">150km</option>
                <option value="200">200km</option>
              </select>
            </BoxField>

            <BoxField className="col-3">
              <span>Marcas: <strong>{this.props.selectedMake}</strong></span>
              <select onChange={this.props.handleMakesChange}>
              <option value="0">Todos</option>
                {this.props.makes.map(item => {
                  return <option key={item.ID} value={item.ID}>{item.Name}</option>
                })}
              </select>
            </BoxField>

            <BoxField className="col-3">
              <span>Modelos: <strong>{this.props.selectedModel}</strong></span>
              <select onChange={this.props.handleModelsChange}>
                <option value="0">Todos</option>
                {this.props.models.map(item => {
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
              <select>
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
              <span>Versões: <strong>{this.props.selectedVersion}</strong></span>
              <select onChange={this.props.handleSelectedVersion}>
                <option value="0">Versão: Todas</option>
                {this.props.versions.map(item => {
                    return <option key={item.ID} value={item.ID}>{item.Name}</option>
                  })
                }
              </select>
            </BoxField>                            
          </form>
          <SearchAction>
            <AdvancedSearch><FaAngleRight />Busca Avançada</AdvancedSearch>
            <CleanFields onClick={this.props.clearFilter}>Limpar filtros</CleanFields>
            <ButtonSubmit type="button" onClick={this.props.handlerFormSubmit}>Ver ofertas</ButtonSubmit>
          </SearchAction>
        </SearchBox> 
      </Container>
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

const mapDispatchToProps = dispatch => {
  return {
    updateMakesList: obj => {
      dispatch(updateMakesList(obj));
    },   

    updateSelectedRadius: num => {
      dispatch(updateSelectedRadius(num));
    },

    handleCheckboxChange: bool => {
      dispatch(handleCheckboxChange(bool));
    },

    handleMakesChange: e => {
      const id = e.target.value;
      const {options, selectedIndex} = e.target;
      const selectedMake = options[selectedIndex].innerHTML;
  
      searchService.getModels(id)
      .then(models => {
        dispatch(updateModelsList(models))
        dispatch(updateSelectedMake(selectedMake))
        dispatch(updateSelectedModel('Todas'))
        dispatch(updateSelectedVersion('Todas'))
      });
    },

    handleModelsChange: e => {
      const id = e.target.value;
      const {options, selectedIndex} = e.target;
      const selectedModel = options[selectedIndex].innerHTML;
  
      searchService.getVersions(id)
      .then(versions => {
          dispatch(updateVersionsList(versions))
          dispatch(updateSelectedModel(selectedModel))
          dispatch(updateSelectedVersion('Todas'))
      });
    },

    handleSelectedVersion: e => {
      const {options, selectedIndex} = e.target;
      const version = options[selectedIndex].innerHTML;
      dispatch(updateSelectedVersion(version));
    },

    handlerFormSubmit: () => {
      dispatch(updateLoading(true))      
      searchService.getOffers(1)
      .then(offers => {
        setTimeout(()=>{
          dispatch(updateOffersList(offers))
          dispatch(updateLoading(false)) 
        }, 1000)
      })
    },
  
    clearFilter: () =>{
      dispatch(updateSelectedMake('Todas'))
      dispatch(updateSelectedModel('Todas'))
      dispatch(updateSelectedVersion('Todas'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);