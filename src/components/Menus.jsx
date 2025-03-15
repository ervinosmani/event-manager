import React from "react";

const Menus = () => {
  const menus = [
    { id: 1, emri: "Menu 1", details: "Mish & Perime, Sallatë, Pije", image: "/images/menu1.jpg" },
    { id: 2, emri: "Menu 2", details: "Peshk & Sallatë, Supë, Lëng Natyral", image: "/images/menu2.jpg" },
    { id: 3, emri: "Menu 3", details: "Vegjetariane, Sallatë, Fruta", image: "/images/menu3.jpg" },
  ];

  return (
    <div className="container-fluid py-4">
      <h3 className="text-center fw-bold mb-5">🍽️ Lista e Menyve</h3>
      <div className="row justify-content-center">
        {menus.map((menu) => (
          <div key={menu.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow border-0 rounded h-100">
              <img
                src={menu.image}
                className="card-img-top img-fluid"
                alt={menu.emri}
                style={{ objectFit: "cover", height: "350px" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title fw-bold">{menu.emri}</h4>
                <p className="card-text text-muted">{menu.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menus;
