"use client";

import { useState, useCallback } from "react";
import CvForm from "@/components/CvForm";
import CvPreview from "@/components/CvPreview";
import PdfButton from "@/components/PdfButton";
import { CVForm } from "@/types/cv";

const CreateCv = () => {
  const [formData, setFormData] = useState<CVForm | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [bgClass, setBgClass] = useState<string>("bg-white");

  const handleFormChange = useCallback(
    (data: CVForm & { photo?: string | null }) => {
      setFormData(data);
      setPhoto(data.photo || null);
    },
    []
  );

  return (
    <main className="w-full flex justify-center mt-20">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <CvForm onChange={handleFormChange} />
        </div>

        <div className="md:w-1/2 flex flex-col items-center">
          <div className="flex gap-2 mb-4">
            <button
              className="w-8 h-8 bg-white border rounded-full"
              onClick={() => setBgClass("bg-white")}
            />
            <button
              className="w-8 h-8 bg-blue-100 border rounded-full"
              onClick={() => setBgClass("bg-blue-100")}
            />
            <button
              className="w-8 h-8 bg-green-100 border rounded-full"
              onClick={() => setBgClass("bg-green-100")}
            />
            <button
              className="w-8 h-8 bg-red-100 border rounded-full"
              onClick={() => setBgClass("bg-red-100")}
            />
          </div>

          <div>
            <CvPreview data={formData} bgClass={bgClass} photo={photo} />
            <PdfButton data={formData} bgClass={bgClass} photo={photo} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateCv;
