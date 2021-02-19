import './Product.css';

function Product(props) {
    const onAddToCart = () => {
        alert(props.children + ' - ' + props.price)
    };
    return (
        <div className="col-4">
            <img alt={props.children} src={props.image} height="200px" width="200px" />
            <h3>
                {props.children}
            </h3>
            <p>
                {props.price}
            </p>
            <button href="#" className="btn btn-success" onClick={onAddToCart}>Mua ngay</button>
        </div>
    );
}

export default Product;
