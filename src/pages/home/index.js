import React, { Component } from 'react';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/user';
import { getBrands, getModels, getYears, getValue } from '../../services/api';

// Styles
import {
  Container,
  Wrapper,
  Content,
  Logo,
  Label,
  SelectLabel,
  Button
} from '../../assets/styles';

// Images
import Logo_Mobiauto from '../../assets/images/logo.png';

const emptyInput = { value: 'Selecione', label: 'Selecione' };

class Home extends Component {
  componentWillMount = async () => {
    const { vehicle } = this.props.user;

    if (!vehicle) {
      this.setState({ brand: emptyInput, model: emptyInput, year: emptyInput });
      getBrands(this.props.saveBrands);
    } else {
      const { brand, model, year } = this.props.user.filter;
      this.setState({ brand, model, year });
    }
  }
 
  handleSubmit = async () => {
    const { filter } = this.props.user;

    if (filter && filter.brand && filter.model && filter.year) {
      const { brand, model, year } = filter;
      
      await getValue(brand.value, model.value, year.value, this.props.saveVehicle);
      this.props.history.push('/result');
    }
  }

  handleBrandSelect = (value) => {
    this.setState({ brand: value, model: emptyInput, year: emptyInput });
    this.props.saveFilter({ brand: value });
    getModels(value.value, this.props.saveModels);
  }

  handleModelSelect = (value) => {
    const { brand } = this.props.user.filter;

    this.setState({ model: value, year: emptyInput });
    this.props.saveFilter({ brand, model: value });
    getYears(brand.value, value.value, this.props.saveYears);
  }

  handleYearSelect = (value) => {
    const { brand, model } = this.props.user.filter;

    this.setState({ year: value });
    this.props.saveFilter({ brand, model, year: value });
  }

  render() {
    const { brand, model, year } = this.state;

    return (
      <Container>
        <Logo src={Logo_Mobiauto} alt="Mobiauto" />
        <Wrapper>
          <Content>
            <p>Informe os dados do veículo para saber o valor na tabela FIPE</p>
            <Label>
              <span className="field-name">Marca</span>
              <SelectLabel>
                <Select
                  className="input"
                  classNamePrefix="input"
                  placeholder="Selecione"
                  value={brand}
                  options={this.props.user.brands}
                  onChange={value => this.handleBrandSelect(value)}
                  isDisabled={!this.props.user.brands}
                  isClearable={false}
                />
              </SelectLabel>
            </Label>
            <Label>
              <span className="field-name">Modelo</span>
              <SelectLabel>
                <Select
                  className="input"
                  classNamePrefix="input"
                  placeholder="Selecione"
                  value={model}
                  options={this.props.user.models}
                  onChange={value => this.handleModelSelect(value)}
                  isDisabled={!this.props.user.models}
                  isClearable={false}
                />
              </SelectLabel>
            </Label>
            <Label>
              <span className="field-name">Ano</span>
              <SelectLabel>
                <Select
                  className="input"
                  classNamePrefix="input"
                  placeholder="Selecione"
                  value={year}
                  options={this.props.user.years}
                  onChange={value => this.handleYearSelect(value)}
                  isDisabled={!this.props.user.years}
                  isClearable={false}
                />
              </SelectLabel>
            </Label>
            <Button type="submit" onClick={this.handleSubmit}>
              <span>Continuar</span>
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
