import React from 'react';
import {connect} from 'react-redux';
import { fetchOffersList } from './../../store/actions';
import { searchService } from './../../services/search';
import { Container, BoxResults, TitleSearch, Item, BoxImg, ItemBody, Title, Version, BoxPrice, BoxYear, ItemFooter, Location } from './styles';
import { FaMapMarkerAlt, FaRegHeart} from 'react-icons/fa';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.fetchOffers = this.fetchOffers.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementsByClassName('offer-results');
    if (this.isBottom(wrappedElement)) {
      alert('header bottom reached');
      document.removeEventListener('scroll', this.trackScrolling);
    }
  };

  fetchOffers() {
    this.props.fetchOffersList(this.props.currentPage + 1);
  }

  render() {
    return (
      <Container>
        {this.props.offers.length > 0 && 
          <TitleSearch>
            {this.props.selectedMake == 'Todas' ? 'Carros ' : this.props.selectedMake + ' '}
            {this.props.selectedModel == 'Todas' ? ' ' : this.props.selectedModel} em São Paulo/SP - Novos e Usados
          </TitleSearch>
        }
        <BoxResults className="offer-results">
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
        { (this.props.currentPage < this.props.totalPages && this.props.offers.length > 0) && <div 
          onClick={this.fetchOffers}
          style={{
            width: '100%',
            backgroundColor: 'black',
            padding: 10,
            textAlign: 'center',
            color: 'white',
            cursor: 'pointer'
          }}>
          Carregar mais items
      </div> }
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    offers: state.cars.offers,
    selectedMake: state.cars.selectedMake,
    selectedModel: state.cars.selectedModel,
    currentPage: state.cars.currentPage,
    totalPages: state.cars.totalPages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOffersList: page => {
      dispatch(fetchOffersList(page))
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
