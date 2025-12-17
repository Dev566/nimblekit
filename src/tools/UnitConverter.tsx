import { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type UnitCategory = "length" | "weight" | "temperature" | "volume";

const units: Record<UnitCategory, string[]> = {
  length: [
    "Meters",
    "Kilometers",
    "Centimeters",
    "Millimeters",
    "Inches",
    "Feet",
    "Yards",
    "Miles",
  ],
  weight: ["Kilograms", "Grams", "Milligrams", "Pounds", "Ounces"],
  temperature: ["Celsius", "Fahrenheit", "Kelvin"],
  volume: [
    "Liters",
    "Milliliters",
    "Gallons (US)",
    "Quarts (US)",
    "Pints (US)",
    "Cups (US)",
  ],
};

// Conversion rates to base unit (Meters, Kilograms, Celsius, Liters)
const rates: Record<string, number> = {
  // Length (base: Meters)
  Meters: 1,
  Kilometers: 1000,
  Centimeters: 0.01,
  Millimeters: 0.001,
  Inches: 0.0254,
  Feet: 0.3048,
  Yards: 0.9144,
  Miles: 1609.34,
  // Weight (base: Kilograms)
  Kilograms: 1,
  Grams: 0.001,
  Milligrams: 0.000001,
  Pounds: 0.453592,
  Ounces: 0.0283495,
  // Volume (base: Liters)
  Liters: 1,
  Milliliters: 0.001,
  "Gallons (US)": 3.78541,
  "Quarts (US)": 0.946353,
  "Pints (US)": 0.473176,
  "Cups (US)": 0.236588,
};

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState(units.length[0]);
  const [toUnit, setToUnit] = useState(units.length[1]);
  const [inputValue, setInputValue] = useState<string>("1");
  const [outputValue, setOutputValue] = useState<string>("");

  // Update units when category changes
  useEffect(() => {
    setFromUnit(units[category][0]);
    setToUnit(units[category][1]);
  }, [category]);

  useEffect(() => {
    convert();
  }, [inputValue, fromUnit, toUnit, category]);

  const convert = () => {
    const val = parseFloat(inputValue);
    if (isNaN(val)) {
      setOutputValue("");
      return;
    }

    let result = 0;

    if (category === "temperature") {
      if (fromUnit === toUnit) {
        result = val;
      } else if (fromUnit === "Celsius") {
        result = toUnit === "Fahrenheit" ? (val * 9) / 5 + 32 : val + 273.15;
      } else if (fromUnit === "Fahrenheit") {
        result =
          toUnit === "Celsius"
            ? ((val - 32) * 5) / 9
            : ((val - 32) * 5) / 9 + 273.15;
      } else if (fromUnit === "Kelvin") {
        result =
          toUnit === "Celsius" ? val - 273.15 : ((val - 273.15) * 9) / 5 + 32;
      }
    } else {
      // Standard conversion via base unit
      const fromRate = rates[fromUnit];
      const toRate = rates[toUnit];
      const baseValue = val * fromRate;
      result = baseValue / toRate;
    }

    // Format output to avoid long decimals
    setOutputValue(parseFloat(result.toFixed(6)).toString());
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Category Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {(Object.keys(units) as UnitCategory[]).map((cat) => (
          <Button
            key={cat}
            variant={category === cat ? "primary" : "outline"}
            onClick={() => setCategory(cat)}
            className="capitalize"
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">From</label>
          <select
            className="w-full h-10 rounded-md border border-gray-300 bg-bg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {units[category].map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <Input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter value"
          />
        </div>

        <div className="flex justify-center pb-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={swapUnits}
            aria-label="Swap units"
          >
            <ArrowRightLeft className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">To</label>
          <select
            className="w-full h-10 rounded-md border border-gray-300 bg-bg px-3 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {units[category].map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
          <div className="h-10 w-full rounded-md border border-gray-200 bg-surface px-3 py-2 text-sm font-medium flex items-center">
            {outputValue}
          </div>
        </div>
      </div>
    </div>
  );
}
