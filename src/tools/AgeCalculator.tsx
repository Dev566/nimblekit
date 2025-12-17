import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
  } | null>(null);

  const calculateAge = () => {
    if (!birthDate || !targetDate) return;

    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      // Get days in previous month
      const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Calculate Age At
          </label>
          <Input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
          />
        </div>
      </div>

      <Button onClick={calculateAge} className="w-full" disabled={!birthDate}>
        Calculate Age
      </Button>

      {result && (
        <div className="bg-bg border border-gray-200 rounded-xl p-8 text-center animate-in zoom-in duration-300">
          <div className="grid grid-cols-3 gap-4 divide-x divide-gray-200">
            <div>
              <div className="text-4xl font-bold text-primary">
                {result.years}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Years
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                {result.months}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Months
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">
                {result.days}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide">
                Days
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
