import React from 'react';
import {connect} from 'react-redux';
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
    {console.log(this.props.offers)}
    return (
      <Container>
        <TitleSearch>Honda Fit em São Paulo/SP - Novos e Usados</TitleSearch>
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
    offers: state.cars.offers
  }
}

export default connect(
  mapStateToProps
)(Results);
