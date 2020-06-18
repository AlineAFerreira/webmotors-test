import React from 'react';
import {connect} from 'react-redux';
import { fetchOffersList } from './../../store/actions';
import { searchService } from './../../services/search';
import { Loading } from './../Loading';
import { Container, BoxResults, TitleSearch, Item, BoxImg, ItemBody, Title, Version, BoxPrice, BoxYear, ItemFooter, Location, LoadMore } from './styles';
import { FaMapMarkerAlt, FaRegHeart} from 'react-icons/fa';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.fetchOffers = this.fetchOffers.bind(this);
  }

  fetchOffers() {
    this.props.fetchOffersList(this.props.currentPage + 1);
  }

  render() {
    return (
      <Container>
        {this.props.showLoading ? (
          <TitleSearch className={this.props.showLoading ? 'loading' : ''} />
        ):(
          this.props.offers.length > 0 &&
            <TitleSearch>
              {this.props.selectedMake == 'Todas' ? 'Carros ' : this.props.selectedMake + ' '}
              {this.props.selectedModel == 'Todas' ? ' ' : this.props.selectedModel} em São Paulo/SP - Novos e Usados
            </TitleSearch>          
        )}

        <BoxResults>
          {this.props.showLoading ? (
            <>
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
              <Loading />
            </>
          ) : (
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
          )
        }
        </BoxResults>
          { (this.props.currentPage < this.props.totalPages && this.props.offers.length > 0) && 
            <LoadMore onClick={this.fetchOffers}>
              Carregar mais items
            </LoadMore> 
          }
      </Container>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    showLoading: state.cars.showLoading,
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
