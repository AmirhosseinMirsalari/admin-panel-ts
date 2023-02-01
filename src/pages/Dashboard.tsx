import React from "react";
import { useTranslation } from "react-i18next";
import SaleChart from "../components/chart/Chart";
import Summary from "../components/summary/Summary";


function Dashboard() {
  const { t } = useTranslation();
  return (
    <section>
      <h2 className="title">{t("dashboard")}</h2>
      <Summary />
      <SaleChart />
    </section>
  );
}

export default Dashboard;
