import {
  Calculator,
  Ruler,
  Percent,
  Calendar,
  Type,
  FileText,
  Link,
  QrCode,
  Activity,
  DollarSign,
  FileJson,
  Key,
} from "lucide-react";

export interface Tool {
  id: string;
  name: string;
  description: string;
  content?: string;
  path: string;
  icon: React.ElementType;
  category:
    | "math"
    | "converter"
    | "text"
    | "date"
    | "health"
    | "developer"
    | "finance"
    | "other";
  status: "live" | "coming-soon";
}

export const tools: Tool[] = [
  {
    id: "calculator",
    name: "Calculator",
    description:
      "Free online calculator with keyboard support. Perform basic arithmetic operations instantly - no download required.",
    content: `
      <h2>About This Calculator</h2>
      <p>Our free online calculator provides a simple, efficient way to perform basic arithmetic operations right in your browser. Whether you need to add up expenses, calculate a tip, or solve a quick math problem, this tool is ready to help.</p>
      
      <h3>Features</h3>
      <ul>
        <li><strong>Keyboard Support:</strong> Use your physical keyboard for faster input.</li>
        <li><strong>History:</strong> Keep track of your recent calculations.</li>
        <li><strong>Responsive Design:</strong> Works perfectly on desktop, tablet, and mobile devices.</li>
        <li><strong>Instant Results:</strong> No page reloads or waiting times.</li>
      </ul>

      <h3>How to Use</h3>
      <p>Simply click the buttons or type on your keyboard to enter numbers and operators. The calculator follows standard order of operations.</p>
    `,
    path: "/tool/calculator",
    icon: Calculator,
    category: "math",
    status: "live",
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    description:
      "Convert units online free - length, weight, temperature, and volume. Fast and accurate conversion tool.",
    content: `
      <h2>Comprehensive Unit Converter</h2>
      <p>Need to convert meters to feet, kilograms to pounds, or Celsius to Fahrenheit? Our unit converter handles all common unit conversions with ease.</p>

      <h3>Supported Conversions</h3>
      <ul>
        <li><strong>Length:</strong> Meters, Feet, Inches, Centimeters, Kilometers, Miles, Yards.</li>
        <li><strong>Weight:</strong> Kilograms, Pounds, Grams, Ounces.</li>
        <li><strong>Temperature:</strong> Celsius, Fahrenheit, Kelvin.</li>
        <li><strong>Volume:</strong> Liters, Gallons, Milliliters, Cups.</li>
      </ul>

      <h3>Why Use This Tool?</h3>
      <p>It's fast, accurate, and saves you from doing manual math. Perfect for students, professionals, and everyday use.</p>
    `,
    path: "/tool/unit-converter",
    icon: Ruler,
    category: "converter",
    status: "live",
  },
  {
    id: "percentage-calculator",
    name: "Percentage Calculator",
    description:
      "Calculate percentages, discounts, tips, and percentage changes online. Free percentage calculator tool.",
    content: `
      <h2>Easy Percentage Calculator</h2>
      <p>Percentages can be tricky. This tool makes them simple. Calculate percentage increases, decreases, parts of a whole, and more.</p>

      <h3>Common Uses</h3>
      <ul>
        <li><strong>Discounts:</strong> Calculate how much you save on a sale.</li>
        <li><strong>Tips:</strong> Figure out the tip for your restaurant bill.</li>
        <li><strong>Tax:</strong> Add sales tax to a price.</li>
        <li><strong>Growth:</strong> Calculate percentage growth or decline.</li>
      </ul>
    `,
    path: "/tool/percentage-calculator",
    icon: Percent,
    category: "math",
    status: "live",
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    description:
      "Calculate age online from date of birth. Find exact age in years, months, and days with our free age calculator.",
    content: `
      <h2>Exact Age Calculator</h2>
      <p>Ever wondered exactly how old you are in days or months? Enter your date of birth, and we'll tell you.</p>

      <h3>Features</h3>
      <ul>
        <li><strong>Precise Calculation:</strong> Accounts for leap years and varying month lengths.</li>
        <li><strong>Next Birthday:</strong> See how many days are left until your next birthday.</li>
        <li><strong>Fun Facts:</strong> Discover your age in total weeks, days, hours, and minutes.</li>
      </ul>
    `,
    path: "/tool/age-calculator",
    icon: Calendar,
    category: "date",
    status: "live",
  },
  {
    id: "text-tools",
    name: "Text Tools",
    description:
      "Free online text tools - word count, character count, and case conversion. Analyze and transform text instantly.",
    content: `
      <h2>All-in-One Text Utilities</h2>
      <p>Analyze and manipulate text with our suite of text tools. Perfect for writers, editors, and developers.</p>

      <h3>Capabilities</h3>
      <ul>
        <li><strong>Word & Character Count:</strong> Instantly see the length of your text.</li>
        <li><strong>Case Conversion:</strong> Convert to UPPERCASE, lowercase, Title Case, and more.</li>
        <li><strong>Text Analysis:</strong> Estimate reading time and speaking time.</li>
      </ul>
    `,
    path: "/tool/text-tools",
    icon: Type,
    category: "text",
    status: "live",
  },
  {
    id: "text-cleaner",
    name: "Text Cleaner",
    description:
      "Clean text online - remove extra spaces, line breaks, and duplicate lines. Free text cleaning tool.",
    content: `
      <h2>Clean Up Your Text</h2>
      <p>Messy text? Our text cleaner removes unwanted formatting, extra spaces, and duplicate lines in seconds.</p>

      <h3>Cleaning Options</h3>
      <ul>
        <li><strong>Remove Extra Spaces:</strong> Turn multiple spaces into one.</li>
        <li><strong>Remove Line Breaks:</strong> Join lines together.</li>
        <li><strong>Remove Duplicates:</strong> Eliminate duplicate lines from lists.</li>
        <li><strong>Trim Lines:</strong> Remove whitespace from the start and end of lines.</li>
      </ul>
    `,
    path: "/tool/text-cleaner",
    icon: FileText,
    category: "text",
    status: "live",
  },
  {
    id: "url-shortener",
    name: "URL Shortener",
    description:
      "Shorten URLs locally in your browser. Free URL shortener with privacy - no account required.",
    content: `
      <h2>Private URL Shortener</h2>
      <p>Create short, manageable links from long URLs. Unlike other services, we prioritize your privacy.</p>

      <h3>How It Works</h3>
      <p>This tool runs entirely in your browser. We don't track your clicks or store your data on our servers.</p>
    `,
    path: "/tool/url-shortener",
    icon: Link,
    category: "other",
    status: "live",
  },
  {
    id: "qr-generator",
    name: "QR Code Generator",
    description:
      "Generate QR codes free for text, URLs, and more. Create and download QR codes instantly online.",
    content: `
      <h2>Free QR Code Creator</h2>
      <p>Generate high-quality QR codes for websites, text, Wi-Fi networks, and more.</p>

      <h3>Features</h3>
      <ul>
        <li><strong>Customizable:</strong> Adjust size and error correction level.</li>
        <li><strong>Downloadable:</strong> Save your QR code as an image.</li>
        <li><strong>Versatile:</strong> Supports URL, Text, Email, and Phone Number formats.</li>
      </ul>
    `,
    path: "/tool/qr-generator",
    icon: QrCode,
    category: "other",
    status: "live",
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator",
    description:
      "Calculate BMI online free - Body Mass Index calculator with calorie estimation. Check your BMI now.",
    content: `
      <h2>Body Mass Index (BMI) Calculator</h2>
      <p>BMI is a screening tool that can indicate whether a person is underweight or if they have a healthy weight, excess weight, or obesity.</p>

      <h3>Understanding Your Result</h3>
      <ul>
        <li><strong>Underweight:</strong> BMI less than 18.5</li>
        <li><strong>Normal weight:</strong> BMI 18.5 to 24.9</li>
        <li><strong>Overweight:</strong> BMI 25 to 29.9</li>
        <li><strong>Obesity:</strong> BMI 30 or greater</li>
      </ul>
      <p><em>Note: BMI is not a diagnostic of the body fatness or health of an individual.</em></p>
    `,
    path: "/tool/bmi-calculator",
    icon: Activity,
    category: "health",
    status: "live",
  },
  {
    id: "loan-calculator",
    name: "Loan Calculator",
    description:
      "Calculate loan payments online - EMI calculator for monthly installments. Free loan payment calculator.",
    content: `
      <h2>Loan & EMI Calculator</h2>
      <p>Planning to take a loan? Use our calculator to estimate your monthly payments and total interest cost.</p>

      <h3>Key Inputs</h3>
      <ul>
        <li><strong>Loan Amount:</strong> The total amount you wish to borrow.</li>
        <li><strong>Interest Rate:</strong> The annual interest rate.</li>
        <li><strong>Loan Term:</strong> The duration of the loan in years or months.</li>
      </ul>
    `,
    path: "/tool/loan-calculator",
    icon: DollarSign,
    category: "finance",
    status: "live",
  },
  {
    id: "json-formatter",
    name: "JSON Formatter",
    description:
      "Format JSON online free - prettify, minify, and validate JSON. Best online JSON formatter tool.",
    content: `
      <h2>JSON Formatter & Validator</h2>
      <p>Developers love this tool. Paste your minified or messy JSON to make it readable, or minify it to save space.</p>

      <h3>Features</h3>
      <ul>
        <li><strong>Prettify:</strong> Indent and format JSON for readability.</li>
        <li><strong>Minify:</strong> Remove whitespace to reduce file size.</li>
        <li><strong>Validate:</strong> Check if your JSON syntax is correct.</li>
      </ul>
    `,
    path: "/tool/json-formatter",
    icon: FileJson,
    category: "developer",
    status: "live",
  },
  // Coming Soon
  {
    id: "currency-converter",
    name: "Currency Converter",
    description: "Real-time exchange rates.",
    path: "/tool/currency-converter",
    icon: DollarSign,
    category: "finance",
    status: "coming-soon",
  },
  {
    id: "password-generator",
    name: "Password Generator",
    description: "Create strong, secure passwords.",
    path: "/tool/password-generator",
    icon: Key,
    category: "other",
    status: "coming-soon",
  },
];
