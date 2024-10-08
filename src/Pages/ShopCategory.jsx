import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Component/Item/Item";
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className="shop_category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return<Item key={i} id={item.id} name={item.name} category={item.category} detail={item.detail} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
          })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
