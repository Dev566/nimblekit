import { lazy } from "react";

export const toolComponents: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<any>>
> = {
  calculator: lazy(() => import("./Calculator")),
  "unit-converter": lazy(() => import("./UnitConverter")),
  "percentage-calculator": lazy(() => import("./PercentageCalculator")),
  "age-calculator": lazy(() => import("./AgeCalculator")),
  "text-tools": lazy(() => import("./TextTools")),
  "text-cleaner": lazy(() => import("./TextCleaner")),
  "url-shortener": lazy(() => import("./UrlShortener")),
  "qr-generator": lazy(() => import("./QrGenerator")),
  "bmi-calculator": lazy(() => import("./BmiCalculator")),
  "loan-calculator": lazy(() => import("./LoanCalculator")),
  "json-formatter": lazy(() => import("./JsonFormatter")),
};
