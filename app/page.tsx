import { getData } from "./actions";
import { Product } from "./models/product.model";
import { Query } from "./models/query.model";
import AddToCartButton from "./ui/AddToCartButton";

export default async function Home({ searchParams }: { searchParams: Query }) {
  const query = await searchParams;
  const products = await getData(query);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 col-xl-2 d-none d-lg-block">
          <div className="filter">
            <div className="filter-title">
              <h5>Фильтр</h5>
            </div>
            <div className="filter-price">
              <div className="filter-price_title">Цена</div>
              <form>
                <div className="filter-price_range">
                  <div className="filter-price_input-wrapper">
                    <label className="filter-price_label" htmlFor="min">
                      от
                    </label>
                    <input className="filter-price_input" id="min" />
                  </div>
                  <div className="filter-price_input-wrapper">
                    <label className="filter-price_label" htmlFor="max">
                      до
                    </label>
                    <input className="filter-price_input" id="max" />
                  </div>
                </div>
              </form>
            </div>
            <div className="filter-check">
              <label className="filter-check_label">
                <input
                  className="filter-check_checkbox"
                  id="discount-checkbox"
                  type="checkbox"
                />
                <span className="filter-check_checkmark"></span>
                <span className="filter-check_label-text">Акция</span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 col-xl-10">
          <div className="container">
            <div className="row no-gutters goods">
              {products.map((product: Product) => {
                return (
                  <div
                    className="col-12 col-md-6 col-lg-4 col-xl-3"
                    key={product.title}
                  >
                    <div className="card" data-key="${goodsItem.id}">
                      {product.sale ? (
                        <div className="card-sale">🔥Hot Sale🔥</div>
                      ) : null}
                      <div className="card-img-wrapper">
                        <span
                          className="card-img-top"
                          style={{ backgroundImage: `url(${product.img})` }}
                        ></span>
                      </div>
                      <div className="card-body justify-content-between">
                        <div className="card-price">{product.price} ₽</div>
                        <h5 className="card-title">{product.title}</h5>
                        <AddToCartButton product={product} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}