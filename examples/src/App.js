import React from 'react';
import ViaCep from '../../dist';
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cep: '' };

    this.handleChangeCep = this.handleChangeCep.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  handleChangeCep(evt) {
    this.setState({ cep: evt.target.value })
  }
  handleSuccess(cepData) {
    console.log(cepData);
  }
  render() {
    return (
      <div className="App">
        <header id="main-header">CEP - RBM Web</header>
        <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
            if (error) {
              return <p>error</p>
            }
            if (data) {
              return <div className="cep-list">
                <article>
                  <p>Endereço Carregado</p>
                  <p>CEP: {data.cep}</p>
                  <p>LOGRADOURO: {data.logradouro}</p>
                  <p>CIDADE: {data.localidade}</p>
                  <p>UF: {data.uf}</p>
                </article>
              </div>
            }
            return <div className="cep-list">
              <article>
                <p>Buscar CEP</p>
                <div className="actions">
                  <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
                  <button onClick={fetch}>Pesquisar</button>
                </div>
              </article>              
            </div>
          }}
        </ViaCep>
        <br/>
        <ViaCep cep="01001000" onSuccess={this.handleSuccess}>
          { ({ data, loading, error, fetch }) => {
            if (loading) {
              return <p>loading...</p>
            }
            if (error) {
              return <p>error</p>
            }
            if (data) {
              return <div className="cep-list">
                
              <article>
                <p>Exemplo Endereço</p>
                <p>CEP: {data.cep}</p>
                <p>LOGRADOURO: {data.logradouro}</p>
                <p>CIDADE: {data.localidade}</p>
                <p>UF: {data.uf}</p>
              </article>
            </div>
            }
            return <div> 
              <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
              <button onClick={fetch}>Pesquisar</button>
            </div>
          }}
        </ViaCep>
      </div>
    );
  }
}

export default App;
