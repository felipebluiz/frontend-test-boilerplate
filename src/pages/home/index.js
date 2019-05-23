import React, { Component } from 'react';
import Select from 'react-select';

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

class Home extends Component {
  handleSubmit = async () => {
    //
  }

  handleBrandSelect = (value) => {
    //
  }

  handleModelSelect = (value) => {
    //
  }

  handleYearSelect = (value) => {
    //
  }

  render() {
    return (
      <Container>
        <Logo src={Logo_Mobiauto} alt="Mobiauto" />
        <Wrapper>
          <Content>
            <p>Informe os dados do veiculo para saber o valor na tabela FIPE</p>
            <Label>
              <span className="field-name">Marca</span>
              <SelectLabel>
                <Select
                  className="input"
                  classNamePrefix="input"
                  placeholder="Selecione"
                  onChange={value => this.handleBrandSelect(value)}
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
                  onChange={value => this.handleModelSelect(value)}
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
                  onChange={value => this.handleYearSelect(value)}
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

export default Home;
