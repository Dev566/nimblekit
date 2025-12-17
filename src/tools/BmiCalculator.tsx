import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) return;

    let bmiValue = 0;
    if (unit === "metric") {
      // kg / m^2
      bmiValue = w / ((h / 100) * (h / 100));
    } else {
      // (lbs / in^2) * 703
      bmiValue = (w / (h * h)) * 703;
    }

    setBmi(parseFloat(bmiValue.toFixed(1)));
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-blue-500" };
    if (bmi < 25) return { label: "Normal weight", color: "text-green-500" };
    if (bmi < 30) return { label: "Overweight", color: "text-orange-500" };
    return { label: "Obese", color: "text-red-500" };
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="flex justify-center gap-4">
        <Button
          variant={unit === "metric" ? "primary" : "outline"}
          onClick={() => {
            setUnit("metric");
            setBmi(null);
            setHeight("");
            setWeight("");
          }}
        >
          Metric (cm/kg)
        </Button>
        <Button
          variant={unit === "imperial" ? "primary" : "outline"}
          onClick={() => {
            setUnit("imperial");
            setBmi(null);
            setHeight("");
            setWeight("");
          }}
        >
          Imperial (ft+in/lbs)
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Height ({unit === "metric" ? "cm" : "inches"})
          </label>
          <Input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={unit === "metric" ? "175" : "70"}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </label>
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "150"}
          />
        </div>
      </div>

      <Button onClick={calculate} className="w-full">
        Calculate BMI
      </Button>

      {bmi !== null && (
        <div className="bg-bg border border-gray-200 rounded-xl p-8 text-center animate-in zoom-in duration-300">
          <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">
            Your BMI
          </div>
          <div className="text-5xl font-bold text-primary mb-4">{bmi}</div>
          <div className={`text-xl font-semibold ${getCategory(bmi).color}`}>
            {getCategory(bmi).label}
          </div>
        </div>
      )}
    </div>
  );
}
