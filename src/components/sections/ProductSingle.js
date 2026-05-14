
export default function ProductSingle({ data }) {
  return (
    <>
      {data.map((tab) => (
        <div
          key={tab.id}
          id={tab.id}
          className="product-list pb-16 mb-16"
        >
          <div className="lg:w-1/3 lg:sticky lg:top-24">
            <h4 className="text-black font-semibold mb-3">{tab.label}</h4>
            <p>{tab.description}</p>
          </div>

          <div className="lg:w-2/3">
            <div
              className={`grid gap-8 ${tab.products.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"
                }`}
            >
              {tab.products.map((product) => (
                <div className="prod-card" key={product.title}>
                  <div className="prod-card-content">
                    <h4 className="mb-4">{product.title}</h4>

                    <p>{product.description}</p>

                    {product.items?.length > 0 && (
                      <>
                        <div className="sub-heading text-black font-bold my-6">
                          {product.subHeading || "Core Generics"}
                        </div>

                        <ul className="pills">
                          {product.items.map((item) => (
                            <li className="pill" key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
