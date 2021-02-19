import './App.css';
import Product from './component/Product'
import React, { useRef } from "react";

function App() {
  function showInfoProduct(product) {
    if (product.status) {
      return <h3>
        Id: {product.id} <br />
          Name: {product.name} <br />
          Price: {product.price} <br />
      </h3>
    }
  };
  var a = 5;
  var product = {
    id: 1,
    name: 'Iphone',
    price: 1100000,
    status: true
  };
  var users = [
    {
      id: 1,
      name: 'Nguyen Van A',
      age: 21
    },
    {
      id: 2,
      name: 'Nguyen Van B',
      age: 22
    },
    {
      id: 3,
      name: 'Nguyen Van C',
      age: 23
    },
  ];
  var elements = users.map((user, index) => {
    return <div key={user.id}>
      <h2>Tên: {user.name}</h2>
      <h3>Tuổi: {user.age}</h3>
    </div>
  });
  var products = [
    {
      id: 1,
      name: 'iphone',
      price: '150000000',
      image: 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-trang-new-600x600-200x200.jpg',
      status: true
    },
    {
      id: 2,
      name: 'samsung',
      price: '180000000',
      image: 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-trang-new-600x600-200x200.jpg',
      status: true
    },
    {
      id: 3,
      name: 'samsung',
      price: '180000000',
      image: 'https://cdn.tgdd.vn/Products/Images/42/214909/samsung-galaxy-note-10-lite-trang-new-600x600-200x200.jpg',
      status: true
    },
  ]
  var result = products.map((product, index) => {
    if (product.status) {
      return <Product
        key={product.id}
        price={product.price}
        image={product.image}
      >{product.name}
      </Product>
    }
  })
  const name = useRef();
  const onAddProduct = () => {
    console.log(name.current.value);
  }
  return (
    // <div>
    //   <h1>AppComponent</h1>
    //   <Header />
    //   <div>{a}</div>
    //   { showInfoProduct(product)}
    //   { elements}
    // </div>

    <div>
      <div className="container">
        <div className="row pd-20">
          <div className="card">
            <div className="card-header bg-success">Thêm sản phẩm</div>
            <div className="card-body">
              <div className="form-group">
                <label>Tên sản phẩm</label>
                <input type="text" className="form-control" ref={name} />
              </div>
              <button type="submit" className="btn btn-primary" onClick={onAddProduct}>Lưu</button>
            </div>
          </div>
        </div>
        <div className="row">
          {result}
        </div>
        <div className="row pd-20">
          <table className="table">
            <thead>
              <tr>
                <th className>First</th>
                <th className>Last</th>
                <th className>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
