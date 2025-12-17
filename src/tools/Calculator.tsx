import { useState, useEffect, useCallback } from "react";
import { Delete, Equal } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [lastWasResult, setLastWasResult] = useState(false);

  const handleNumber = useCallback(
    (num: string) => {
      if (lastWasResult) {
        setDisplay(num);
        setExpression("");
        setLastWasResult(false);
      } else {
        setDisplay(display === "0" ? num : display + num);
      }
    },
    [display, lastWasResult]
  );

  const handleOperator = useCallback(
    (op: string) => {
      setLastWasResult(false);
      setExpression(display + " " + op + " ");
      setDisplay("0");
    },
    [display]
  );

  const calculate = useCallback(() => {
    try {
      // Basic safe evaluation
      // eslint-disable-next-line no-new-func
      const result = new Function("return " + expression + display)();
      setDisplay(String(result));
      setExpression("");
      setLastWasResult(true);
    } catch (error) {
      setDisplay("Error");
      setExpression("");
      setLastWasResult(true);
    }
  }, [display, expression]);

  const clear = useCallback(() => {
    setDisplay("0");
    setExpression("");
    setLastWasResult(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;
      if (/[0-9]/.test(key)) {
        handleNumber(key);
      } else if (["+", "-", "*", "/"].includes(key)) {
        handleOperator(key);
      } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      } else if (key === "Escape") {
        clear();
      } else if (key === ".") {
        if (!display.includes(".")) {
          setDisplay(display + ".");
        }
      }
    },
    [display, handleNumber, handleOperator, calculate, clear]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const buttons = [
    {
      label: "C",
      onClick: clear,
      variant: "danger" as const,
      className: "col-span-2",
    },
    {
      label: "⌫",
      onClick: () =>
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0")),
      variant: "secondary" as const,
    },
    {
      label: "/",
      onClick: () => handleOperator("/"),
      variant: "secondary" as const,
    },
    { label: "7", onClick: () => handleNumber("7") },
    { label: "8", onClick: () => handleNumber("8") },
    { label: "9", onClick: () => handleNumber("9") },
    {
      label: "*",
      onClick: () => handleOperator("*"),
      variant: "secondary" as const,
    },
    { label: "4", onClick: () => handleNumber("4") },
    { label: "5", onClick: () => handleNumber("5") },
    { label: "6", onClick: () => handleNumber("6") },
    {
      label: "-",
      onClick: () => handleOperator("-"),
      variant: "secondary" as const,
    },
    { label: "1", onClick: () => handleNumber("1") },
    { label: "2", onClick: () => handleNumber("2") },
    { label: "3", onClick: () => handleNumber("3") },
    {
      label: "+",
      onClick: () => handleOperator("+"),
      variant: "secondary" as const,
    },
    { label: "0", onClick: () => handleNumber("0"), className: "col-span-2" },
    {
      label: ".",
      onClick: () => !display.includes(".") && setDisplay(display + "."),
    },
    { label: "=", onClick: calculate, variant: "primary" as const },
  ];

  return (
    <div className="max-w-xs mx-auto">
      <div className="bg-bg border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="bg-surface rounded-lg p-4 mb-4 text-right h-24 flex flex-col justify-end">
          <div className="text-sm text-gray-500 h-6">{expression}</div>
          <div className="text-3xl font-bold truncate">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, i) => (
            <Button
              key={i}
              variant={btn.variant || "outline"}
              className={cn("h-14 text-lg font-semibold", btn.className)}
              onClick={btn.onClick}
            >
              {btn.label === "⌫" ? (
                <Delete className="h-5 w-5" />
              ) : btn.label === "=" ? (
                <Equal className="h-5 w-5" />
              ) : (
                btn.label
              )}
            </Button>
          ))}
        </div>
      </div>
      <p className="text-xs text-center text-gray-400 mt-4">
        Keyboard shortcuts enabled
      </p>
    </div>
  );
}
