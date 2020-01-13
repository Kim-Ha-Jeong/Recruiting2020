import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Notice from './component/Notice';
import Submit from './component/Submit';
import FAQ from './component/FAQ';
import Result from './component/Result';
import Nav from './component/Nav';

class App extends Component{
  render(){
    return(
      <div>
        <Nav></Nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li>소개</li>
          <About></About>
          <li><Link to="/notice">공지사항</Link></li>
          <li><Link to="/submit">지원서 제출</Link></li>
          <li><Link to="/FAQ">FAQ</Link></li>
          <li><Link to="/result">결과확인</Link></li>
        </ul>
        <div>
          <Route path="/" component={Home} exact={true} />
          <Route path="/notice" component={Notice} />
          <Route path="/submit" component={Submit} />
          <Route path="/FAQ" component={FAQ} />
          <Route path="/result" component={Result} />
        </div>
      </div>
    )
  }
}


/* mysql 연결 예시
class App extends Component {
  
  state = {
    products: [],
    product: {
      No:'5'
    }
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _=> {
    fetch(`http://localhost:4000/products`)
    .then(response => response.json())
    .then(response => this.setState({ products : response.data}))
    .catch(err => console.log(err))
  }

  addProduct = _=> {
    const {product} = this.state;
    fetch(`http://localhost:4000/products/add?No=${product.No}`)
    .then(this.getProducts)
    .catch(err => console.error(err))
  }

  renderProduct = ({No}) => <div key={No}>{No}</div>

  render(){
    const {products, product} = this.state;
    return(
      <div className="App">
        {products.map(this.renderProduct)}
        <div>
          <input value={product.No} 
          onChange={e => this.setState({product: {...product, No: e.target.value}})}
          />
          <button onClick={this.addProduct}>AddProduct</button>
        </div>
      </div>
    );
  }
}
*/

export default App;