import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<{
    monthly: string;
    total: string;
    interest: string;
  } | null>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (isNaN(p) || isNaN(r) || isNaN(n) || p <= 0 || r < 0 || n <= 0) return;

    // EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    setResult({
      monthly: emi.toFixed(2),
      total: totalPayment.toFixed(2),
      interest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Loan Amount
          </label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="10000"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <Input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="5.5"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Loan Term (Years)
          </label>
          <Input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="5"
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate EMI
      </Button>

      {result && (
        <div className="bg-bg border border-gray-200 rounded-xl p-8 animate-in zoom-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl font-bold text-primary">
                ${result.monthly}
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">
                Monthly Payment
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl font-bold text-gray-700">
                ${result.total}
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">
                Total Payment
              </div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl font-bold text-green-600">
                ${result.interest}
              </div>
              <div className="text-xs text-gray-500 uppercase mt-1">
                Total Interest
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
