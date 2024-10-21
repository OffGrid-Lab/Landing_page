// pages/dashboard.tsx

import DashboardStats from "@/components/commons/protected/dashboard/DashboardStats";
import Footer from "@/components/commons/protected/dashboard/Footer";
import Header from "@/components/commons/protected/dashboard/Header";

// import DashboardStats from "@/components/DashboardStats";
// import Footer from "@/components/Footer";
// import Header from "@/components/commons/protected/dashboard/header";


export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <DashboardStats />
      </main>
      <Footer />
    </div>
  );
}
