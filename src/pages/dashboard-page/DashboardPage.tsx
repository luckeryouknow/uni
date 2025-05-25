import {Header} from "../../modules/header/Header.tsx";
import DashboardTop from "../../modules/dashboard-top/DashboardTop.tsx";
import DashboardContent from "../../modules/dashoard-content/DashboardContent.tsx";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <DashboardTop />
      <DashboardContent />
    </>
  )
}