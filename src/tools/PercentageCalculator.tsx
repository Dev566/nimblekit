import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function PercentageCalculator() {
  const [val1, setVal1] = useState("10");
  const [val2, setVal2] = useState("500");
  const [result, setResult] = useState<string | null>(null);
  const [mode, setMode] = useState<"percentOf" | "percentChange" | "discount">(
    "percentOf"
  );

  const calculate = () => {
    const v1 = parseFloat(val1);
    const v2 = parseFloat(val2);

    if (isNaN(v1) || isNaN(v2)) {
      setResult("Invalid Input");
      return;
    }

    let res = 0;
    if (mode === "percentOf") {
      // What is X% of Y?
      res = (v1 / 100) * v2;
    } else if (mode === "percentChange") {
      // Percent change from X to Y
      if (v1 === 0) {
        setResult("Infinity");
        return;
      }
      res = ((v2 - v1) / v1) * 100;
    } else if (mode === "discount") {
      // X minus Y% discount
      res = v1 - v1 * (v2 / 100);
    }

    setResult(parseFloat(res.toFixed(2)).toString());
  };

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={mode === "percentOf" ? "primary" : "outline"}
          onClick={() => {
            setMode("percentOf");
            setVal1("10");
            setVal2("500");
            setResult(null);
          }}
        >
          % of Value
        </Button>
        <Button
          variant={mode === "percentChange" ? "primary" : "outline"}
          onClick={() => {
            setMode("percentChange");
            setVal1("100");
            setVal2("150");
            setResult(null);
          }}
        >
          % Change
        </Button>
        <Button
          variant={mode === "discount" ? "primary" : "outline"}
          onClick={() => {
            setMode("discount");
            setVal1("100");
            setVal2("20");
            setResult(null);
          }}
        >
          Discount
        </Button>
      </div>

      <div className="bg-bg p-6 rounded-lg border border-gray-200 space-y-4">
        {mode === "percentOf" && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-medium">What is</span>
            <Input
              type="number"
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
              placeholder="10"
              className="w-24 text-center"
            />
            <span className="font-medium">% of</span>
            <Input
              type="number"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="500"
              className="w-32 text-center"
            />
          </div>
        )}

        {mode === "percentChange" && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-medium">Change from</span>
            <Input
              type="number"
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
              placeholder="100"
              className="w-32 text-center"
            />
            <span className="font-medium">to</span>
            <Input
              type="number"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="150"
              className="w-32 text-center"
            />
          </div>
        )}

        {mode === "discount" && (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-medium">Price</span>
            <Input
              type="number"
              value={val1}
              onChange={(e) => setVal1(e.target.value)}
              placeholder="100"
              className="w-32 text-center"
            />
            <span className="font-medium">Discount %</span>
            <Input
              type="number"
              value={val2}
              onChange={(e) => setVal2(e.target.value)}
              placeholder="20"
              className="w-24 text-center"
            />
          </div>
        )}

        <Button
          onClick={calculate}
          className="w-full md:w-auto mx-auto block mt-4"
        >
          Calculate
        </Button>

        {result !== null && (
          <div className="mt-6 text-center animate-in zoom-in duration-300">
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
              Result
            </p>
            <p className="text-4xl font-bold text-primary">
              {result}
              {mode === "percentChange" ? "%" : ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
