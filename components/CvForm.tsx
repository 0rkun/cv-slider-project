"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CVForm } from "@/types/cv";
import { useEffect, useState } from "react";

const cvSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  education: z.string().min(5),
  experience: z.string().min(5),
  skills: z.string().min(2),
});

type Props = {
  onChange?: (data: CVForm & { photo?: string | null }) => void;
};

export default function CvForm({ onChange }: Props) {
  const { register, watch, reset, control } = useForm<CVForm>({
    resolver: zodResolver(cvSchema),
  });

  const [photo, setPhoto] = useState<string | null>(null);

  const form = useForm<CVForm>({
    resolver: zodResolver(cvSchema),
  });

  const watchAll = watch();

  const name = watch("name");
  const email = watch("email");
  const phone = watch("phone");
  const education = watch("education");
  const experience = watch("experience");
  const skills = watch("skills");

  useEffect(() => {
    if (name || email || phone || education || experience || skills) {
      onChange?.({ name, email, phone, education, experience, skills, photo });
    }
  }, [name, email, phone, education, experience, skills, photo, onChange]);

  function onSubmit(values: z.infer<typeof cvSchema>) {
    console.log("form submit", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-black dark:text-white">
          CV Bilgilerini Gir
        </h1>

        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white mt-5">
                Ad Soyad
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.name || ""}
                  {...register("name")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.email || ""}
                  {...register("email")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white">
                Telefon
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.phone || ""}
                  {...register("phone")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="education"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white">
                Eğitim
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.education || ""}
                  {...register("education")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white">
                İş Deneyimleri
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.experience || ""}
                  {...register("experience")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black dark:text-white">
                Yetenekler
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={watchAll.skills || ""}
                  {...register("skills")}
                  className="bg-white text-black dark:bg-gray-700 dark:text-white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <label className="text-black dark:text-white">
            Profil Fotoğrafı{" "}
          </label>
          <input
            className="  cursor-pointer bg-blue-300 border-radius "
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onloadend = () => setPhoto(reader.result as string);
              reader.readAsDataURL(file);
            }}
          />
        </div>

        <Button
          type="submit"
          onClick={() => {
            reset();
            setPhoto(null);
            onChange?.({
              name: "",
              email: "",
              phone: "",
              education: "",
              experience: "",
              skills: "",
              photo: null,
            });
          }}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          Sıfırla
        </Button>
      </form>
    </Form>
  );
}
