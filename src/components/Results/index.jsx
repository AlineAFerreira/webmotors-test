import React from 'react';
import {connect} from 'react-redux';
import { updateOffersList } from './../../store/actions';
import { searchService } from './../../services/search';
import { Container, BoxResults, TitleSearch, Item, BoxImg, ItemBody, Title, Version, BoxPrice, BoxYear, ItemFooter, Location } from './styles';
import { FaMapMarkerAlt, FaRegHeart} from 'react-icons/fa';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    {console.log('lista',this.props.offers)}
    return (
      <Container>
        {this.props.offers.length > 0 && 
          <TitleSearch>
            {this.props.selectedMake == 'Todas' ? 'Carros ' : this.props.selectedMake + ' '}
            {this.props.selectedModel == 'Todas' ? ' ' : this.props.selectedModel} em São Paulo/SP - Novos e Usados
          </TitleSearch>
        }
        <BoxResults>
          { 
            this.props.offers.map(item =>{
              return (
                <Item key={item.ID}>
                  <BoxImg>
                    <img src={item.Image}/>
                  </BoxImg>
                  <ItemBody>
                    <Title>{item.Make} {item.Model} </Title>
                    <Version>{item.Version}</Version>
                    <BoxPrice>R$ {searchService.formatReal(item.Price)}</BoxPrice>
                    <BoxYear>
                      <span>{item.YearFab +'/'+item.YearModel}</span>
                      <span>{searchService.formatNumber(item.KM)} km</span>
                    </BoxYear>
                  </ItemBody>
                  <ItemFooter>
                    <FaMapMarkerAlt />
                    <Location>São paulo</Location>
                    <FaRegHeart />
                  </ItemFooter>
                </Item>
              )
            }) 
          }          
        </BoxResults>
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    offers: state.cars.offers,
    selectedMake: state.cars.selectedMake,
    selectedModel: state.cars.selectedModel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateOffersList: offers => {
      dispatch(updateOffersList(offers))
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
