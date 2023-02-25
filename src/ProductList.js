// import React, { Component } from 'react'
// import { Table } from 'reactstrap'

// export default class ProductList extends Component {
//     render() {
//         return (
//             <div>
//                 <Table>
//                     <thead>
//                         <tr>

//                             <th>
//                                 Product Name
//                             </th>
//                             <th>
//                                 Description
//                             </th>
//                             <th>
//                                 Type
//                             </th>
//                             <th>
//                                 Additional information
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {this.props.products.map(product => (
//                         <tr  key={product.Id}>
//                             <th scope="row">
//                             {product.Id}
//                             </th>
                           
//                             <td >
//                             {product.UrunAdi}
//                             </td>
//                             <td >
//                             {product.Miktar}
//                             </td>
//                             <td >
//                             {product.BirimFiyati}
//                             </td>
//                         </tr>
//                          ))}
//                     </tbody>

//                 </Table>
//             </div>
//         )
//     }
// }
