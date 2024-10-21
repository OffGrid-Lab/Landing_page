// components/DashboardStats.tsx
import StatsCard from "./StatsCard";

export default function DashboardStats() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard title="Current Plan" value="PERSONAL" buttonLabel="10 cards max" />
        <StatsCard title="Scans" value={0} />
        <StatsCard title="Business Cards" value={111} buttonLabel="Show details" />
        <StatsCard title="Contacts" value={18} buttonLabel="Show details" />
      </div>
    </section>
  );
}
