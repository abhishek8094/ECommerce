import React from "react";
import Layout from "../../components/layout/Layout";
import Crousel from "../../components/crousel/Crousel";
import Filter from "../../components/filter/Filter";
import A from "../../assets/images/A.webp";
import B from "../../assets/images/B.webp";
import C from "../../assets/images/C.webp";
import img4 from "../../assets/images/img4.jpg";
import Testimonial from "../../components/testimonial/Testimonial";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";

function Home() {
  const images = [
    A,
    B,
    C,
    img4,
  ];

  return (
    <Layout>
      <Crousel movingimg={images} />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 mt-20 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Testimonial />
    </Layout>
  );
}

export default Home;
