import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Gracias por quedarte conmigo</h1>
        <p className="pl-desc">
          Mi esperanza es que los momentos que hemos pasado juntos sean pocos comparados
          con los que pasaremos el resto de nuestra vida. A continuación te dejo fotos sin fondo, porque aquí no importan,
          sino, la presencia del Señor a nuestro alrededor.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <p>
          Te amo con todo mi corazón, Dios te bendiga grandemente y espero cumplas muchísisisisimos años
          de la mano del Señor junto a mí.
        </p>
    </div>
  );
};

export default ProductList;
