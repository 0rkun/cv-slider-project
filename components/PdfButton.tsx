"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { CVForm } from "@/types/cv";
import CvPreview from "./CvPreview";

type Props = {
  data: CVForm | null;
  bgClass: string;
  photo?: string | null;
};

const PdfButton = ({ data, bgClass, photo }: Props) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  return (
    <div>
      <div style={{ display: "none" }}>
        <CvPreview
          ref={componentRef}
          data={data}
          bgClass={bgClass}
          photo={photo}
        />
      </div>

      <button
        onClick={handlePrint}
        className="mt-13 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        PDF İndir
      </button>
    </div>
  );
};

export default PdfButton;
