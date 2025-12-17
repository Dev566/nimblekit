import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Download } from "lucide-react";

export default function QrGenerator() {
  const [text, setText] = useState("https://omnitool.netlify.app");
  const canvasRef = useRef<HTMLDivElement>(null);

  const downloadQr = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 text-center">
      <div className="space-y-4">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL to generate QR code"
          className="text-center"
        />
      </div>

      <div
        className="flex justify-center p-8 bg-white rounded-xl shadow-sm border border-gray-200"
        ref={canvasRef}
      >
        {text ? (
          <QRCodeCanvas
            value={text}
            size={256}
            level={"H"}
            includeMargin={true}
          />
        ) : (
          <div className="w-64 h-64 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
            Enter text to generate
          </div>
        )}
      </div>

      <Button onClick={downloadQr} disabled={!text}>
        <Download className="h-4 w-4 mr-2" /> Download PNG
      </Button>
    </div>
  );
}
