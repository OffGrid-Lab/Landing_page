// components/StatsCard.tsx
interface StatsCardProps {
    title: string;
    value: string | number;
    buttonLabel?: string;
  }
  
  export default function StatsCard({ title, value, buttonLabel }: StatsCardProps) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <p className="text-2xl font-bold">{value}</p>
        {buttonLabel && <button className="mt-2 text-blue-600 hover:underline">{buttonLabel}</button>}
      </div>
    );
  }
  