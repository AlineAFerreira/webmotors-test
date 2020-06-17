import React from 'react';
import { Container, BoxResults, TitleSearch, Item, BoxImg, ItemBody, Title, Version, BoxPrice, BoxYear, ItemFooter, Location } from './styles';
import { FaMapMarkerAlt, FaRegHeart} from 'react-icons/fa';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
        <TitleSearch>Honda Fit em São Paulo/SP - Novos e Usados</TitleSearch>
        <BoxResults>
          <Item>
            <BoxImg>
              <img src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2020/202006/20200604/honda-fit-1.5-lx-16v-flex-4p-automatico-wmimagem14222769324.jpg?s=fill&w=249&h=186&q=70"/>
            </BoxImg>
            <ItemBody>
              <Title>Honda Fit</Title>
              <Version>1.5 LX 16V 4P Automatico</Version>
              <BoxPrice>R$ 49.900</BoxPrice>
              <BoxYear>
                <span>2015/2016</span>
                <span>42000km</span>
              </BoxYear>
            </ItemBody>
            <ItemFooter>
              <FaMapMarkerAlt />
              <Location>São paulo</Location>
              <FaRegHeart />
            </ItemFooter>
          </Item>

          <Item>
            <BoxImg>
              <img src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2020/202006/20200604/honda-fit-1.5-lx-16v-flex-4p-automatico-wmimagem14222769324.jpg?s=fill&w=249&h=186&q=70"/>
            </BoxImg>
            <ItemBody>
              <Title>Honda Fit</Title>
              <Version>1.5 LX 16V 4P Automatico</Version>
              <BoxPrice>R$ 49.900</BoxPrice>
              <BoxYear>
                <span>2015/2016</span>
                <span>42000km</span>
              </BoxYear>
            </ItemBody>
            <ItemFooter>
              <FaMapMarkerAlt />
              <Location>São paulo</Location>
              <FaRegHeart />
            </ItemFooter>
          </Item>

          <Item>
            <BoxImg>
              <img src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2020/202006/20200604/honda-fit-1.5-lx-16v-flex-4p-automatico-wmimagem14222769324.jpg?s=fill&w=249&h=186&q=70"/>
            </BoxImg>
            <ItemBody>
              <Title>Honda Fit</Title>
              <Version>1.5 LX 16V 4P Automatico</Version>
              <BoxPrice>R$ 49.900</BoxPrice>
              <BoxYear>
                <span>2015/2016</span>
                <span>42000km</span>
              </BoxYear>
            </ItemBody>
            <ItemFooter>
              <FaMapMarkerAlt />
              <Location>São paulo</Location>
              <FaRegHeart />
            </ItemFooter>
          </Item>

          <Item>
            <BoxImg>
              <img src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2020/202006/20200604/honda-fit-1.5-lx-16v-flex-4p-automatico-wmimagem14222769324.jpg?s=fill&w=249&h=186&q=70"/>
            </BoxImg>
            <ItemBody>
              <Title>Honda Fit</Title>
              <Version>1.5 LX 16V 4P Automatico</Version>
              <BoxPrice>R$ 49.900</BoxPrice>
              <BoxYear>
                <span>2015/2016</span>
                <span>42000km</span>
              </BoxYear>
            </ItemBody>
            <ItemFooter>
              <FaMapMarkerAlt />
              <Location>São paulo</Location>
              <FaRegHeart />
            </ItemFooter>
          </Item>
        </BoxResults>
      </Container>
    );
  }
}
