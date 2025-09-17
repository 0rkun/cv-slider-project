"use client";
import { forwardRef } from "react";
import { CVForm } from "@/types/cv";

type Props = {
  data: CVForm | null;
  bgClass: string;
  photo?: string | null;
};

const CvPreview = forwardRef<HTMLDivElement, Props>(
  ({ data, bgClass, photo }, ref) => {
    return (
      <div
        ref={ref}
        className={`${bgClass} p-8 rounded-2xl shadow-md font-sans text-gray-800 w-full max-w-md`}
        style={{ lineHeight: 1.5 }}
      >
        {photo ? (
          <div className="mb-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt="Profil Foto"
              className="w-24 h-24 rounded-full object-cover border"
            />
          </div>
        ) : (
          <div className="mb-4 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
              Fotoğraf Yok
            </div>
          </div>
        )}

        {data ? (
          <div className="h-70 w-100  ">
            <div className="border-b pb-4 mb-4 ">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <p className="text-gray-600">
                {data.email} | {data.phone}
              </p>
            </div>

            <div className="mb-2">
              <h2 className="font-semibold">Eğitim</h2>
              <p>{data.education}</p>
            </div>

            <div className="mb-2">
              <h2 className="font-semibold">İş Deneyimi</h2>
              <p>{data.experience}</p>
            </div>

            <div className="mb-2">
              <h2 className="font-semibold">Yetenekler</h2>
              <p>{data.skills}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-400 italic">
            Formu doldurunca CV burada görünecek...
          </p>
        )}
      </div>
    );
  }
);

CvPreview.displayName = "CvPreview";

export default CvPreview;
