import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/user';

// Styles
import {
  Container,
  Wrapper,
  Content,
  Logo,
  Button
} from '../../assets/styles';
import { List } from './styles';

// Images
import Logo_Mobiauto from '../../assets/images/logo.png';

class Home extends Component {
  componentWillMount = () => {
    const { user } = this.props;
    
    if (!user || !user.vehicle) {
      this.props.history.push('/');
    }
  }

  goBack = () => {
    this.props.history.push('/', { goBack: true });
  }

  render() {
    const { vehicle } = this.props.user;
    
    return (
      <Container>
        <Logo src={Logo_Mobiauto} alt="Mobiauto" />
        <Wrapper>
          <Content>
            <List>
              <li>
                <span>Ano:</span>
                {vehicle && vehicle.AnoModelo}
              </li>
              <li>
                <span>Código FIPE:</span>
                {vehicle && vehicle.CodigoFipe}
              </li>
              <li>
                <span>Combustível:</span>
                {vehicle && vehicle.Combustivel}
              </li>
              <li>
                <span>Marca:</span>
                {vehicle && vehicle.Marca}
              </li>
              <li>
                <span>Mês de referencia:</span>
                {vehicle && vehicle.MesReferencia}
              </li>
              <li>
                <span>Modelo:</span>
                {vehicle && vehicle.Modelo}
              </li>
              <li>
                <span>Valor:</span>
                {vehicle && vehicle.Valor}
              </li>
            </List>
            <Button type="submit" onClick={this.goBack}>
              <span>Voltar</span>
            </Button>
          </Content>
        </Wrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispathToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispathToProps)(Home);
