const products = [
  { img: 'image1.avif', name: 'Classic Tea Pot', price: '$17.00' },
  { img: 'image2.avif', name: "I'm a Product", price: '$15.00' },
  { img: 'image3.avif', name: "I'm a Product", price: '$5.00' },
  { img: 'image4.avif', name: "I'm a Product", price: '$19.00' },
  { img: 'image5.avif', name: 'Tea Ball Infuser', price: '$2.00' },
  { img: 'image6.avif', name: 'Classic Tea Pot', price: '$20.00' },
];

export default function ProductCards() {
  return (
    <div>
      {/* باقي الصفحة */}
      <div className="container-fluid px-5 py-5">
        <div className="row">
          {/* الصورة الجانبية */}
          <div className="col-md-3 d-none d-md-block">
            <img
              src="/leftimage.avif"
              alt="Side Background"
              className="img-fluid h-100"
              style={{
                objectFit: 'cover',
                borderRadius: '8px',
                minHeight: '1150px',
              }}
            />
          </div>

          {/* المحتوى الرئيسي */}
          <div className="col-md-9">
            {/* العنوان في المنتصف */}
            <div className="row mb-4">
              <div className="col-12 text-center">
                <h3
                  className="fst-italic fw-light text-dark"
                  style={{ fontSize: '1.8rem', letterSpacing: '1px' }}
                >
                  Accessories
                </h3>
                <div
                  className="mx-auto mt-2"
                  style={{ width: '60px', height: '2px', backgroundColor: '#000' }}
                ></div>
              </div>
            </div>

            {/* كروت المنتجات */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {products.map((product, i) => (
                <div key={i} className="col">
                  <div className="card h-100 text-center border-0 shadow-sm">
                    <img
                      src={`/${product.img}`}
                      className="card-img-top"
                      alt={product.name}
                      style={{
                        backgroundColor: '#e6e7ea',
                        padding: '0px',
                        objectFit: 'contain',
                        height: '330px',
                      }}
                    />
                    <div className="card-body">
                      <p className="fst-italic mb-1">{product.name}</p>
                      <p className="text-muted">{product.price}</p>
                    </div>
                    <div className="card-footer bg-white border-0">
                      <button className="btn btn-dark w-100">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
