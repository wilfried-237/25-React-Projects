import "./index.css"


function ItemCard(prop) {
  return (
      <div className="itemCard">
        <img src={prop.images} alt="" />
        <div className="description">
          <h2>{prop.title}</h2>
          <p>${prop.price}</p>
        </div>
        <button>Add to Card</button>
      </div>
  )
}

export default ItemCard