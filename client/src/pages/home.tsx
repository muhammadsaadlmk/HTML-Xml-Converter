import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CodeEditor } from "@/components/code-editor";
import { AdZone } from "@/components/ad-zone";
import { apiRequest } from "@/lib/queryClient";
import { htmlToXml } from "@/lib/converter";
import { CopyIcon, ArrowRightIcon } from "lucide-react";

export default function Home() {
  const [html, setHtml] = useState("");
  const [xml, setXml] = useState("");
  const { toast } = useToast();

  const convertMutation = useMutation({
    mutationFn: async () => {
      try {
        const convertedXml = htmlToXml(html);
        setXml(convertedXml);
        return convertedXml;
      } catch (error) {
        throw new Error("Failed to convert HTML to XML");
      }
    }
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(xml);
      toast({
        title: "Copied!",
        description: "XML has been copied to clipboard",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Banner Ad - 728x90 desktop / 320x50 mobile */}
      <div className="w-full flex justify-center p-4">
        <AdZone position="top" className="md:w-[728px] md:h-[90px] w-[320px] h-[50px]" />
      </div>

      <div className="flex-1 flex gap-4 p-4">
        {/* Left Skyscraper - 160x600 */}
        <div className="hidden lg:block">
          <AdZone position="left" className="w-[160px] h-[600px]" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">HTML Input</h2>
              <div className="flex-1 border rounded-md overflow-hidden">
                <CodeEditor 
                  value={html} 
                  onChange={setHtml}
                  mode="html"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">XML Output</h2>
              <div className="flex-1 border rounded-md overflow-hidden">
                <CodeEditor 
                  value={xml} 
                  readOnly 
                  mode="xml"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={() => convertMutation.mutate()}
              disabled={convertMutation.isPending}
            >
              <ArrowRightIcon className="mr-2 h-4 w-4" />
              Convert to XML
            </Button>

            <Button
              variant="secondary"
              onClick={handleCopy}
              disabled={!xml}
            >
              <CopyIcon className="mr-2 h-4 w-4" />
              Copy XML
            </Button>
          </div>
        </div>

        {/* Right Skyscraper - 160x600 */}
        <div className="hidden lg:block">
          <AdZone position="right" className="w-[160px] h-[600px]" />
        </div>
      </div>

      {/* Bottom Banner Ad - 728x90 desktop / 320x50 mobile */}
      <div className="w-full flex justify-center p-4">
        <AdZone position="bottom" className="md:w-[728px] md:h-[90px] w-[320px] h-[50px]" />
      </div>
    </div>
  );
}