import React from "react";
import { useTranslation } from "react-i18next";
import CustomTable from "../components/tables/customTable/CustomTable";
import data from "../mock/tables";



function Products() {
  const { t } = useTranslation();
  let productsTable = <CustomTable
    headData={data.productsHeader}
    bodyData={data.products}
    limit={10}
  />

  return (
    <section>
      <h2 className="title">{t("products")}</h2>
      {productsTable}
    </section>
  );
}

export default Products;