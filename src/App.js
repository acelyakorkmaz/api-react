// import React, { Component } from 'react'
// import { Container, Row, Col } from "reactstrap";
// import ProductList from './ProductList';
import React, { useState, useEffect } from 'react';
function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://mulakat.natustech.com/Product/GetTumUrunler')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
// export default class App extends Component {
  
// state={products:[]}
// componentDidMount(){
//   this.getProducts();
// }
 
//   render() {
//     return (
//       <div className='App'>
        
//          <Container>
//           <Row>
           
//           </Row>
//           {/* bir row ekranı 12 parçaya ayırıyor */}
//           <Row>
            
//             <Col xs="9">
//              <ProductList
//               products={this.state.products}/>
//             </Col>
//           </Row>
//         </Container>

//       </div>
//     )
//   }
// }
