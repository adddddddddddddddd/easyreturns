"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ImageIcon, XCircleIcon } from "lucide-react";
import Dropzone from "react-dropzone";
import { cn } from "@/lib/utils";
import Link from "next/link";
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 Mo
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

const photoSchema = z.object({
  photos: z
    .array(
      z
        .custom<File>((file) => file instanceof File, "Fichier invalide.")
        .refine(
          (file) => file.size <= MAX_FILE_SIZE,
          "Chaque photo doit faire moins de 2 Mo."
        )
        .refine(
          (file) => ALLOWED_IMAGE_TYPES.includes(file.type),
          "Formats acceptés : JPEG, PNG, WEBP."
        )
    )
    .max(3, "Vous ne pouvez ajouter que 3 photos."),
});

type PhotoFormValues = z.infer<typeof photoSchema>;

export function PhotoInputForm() {
  const {
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<PhotoFormValues>({
    resolver: zodResolver(photoSchema),
    defaultValues: { photos: [] },
  });

  const photos = watch("photos") || [];
  const [previewImages, setPreviewImages] = useState<
    { file: File; url: string }[]
  >([]);

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length + photos.length > 3) {
      setError("photos", { message: "Vous ne pouvez ajouter que 3 photos." });
      return;
    }

    const newFiles = acceptedFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setPreviewImages((prev) => [...prev, ...newFiles]);
    setValue("photos", [...photos, ...acceptedFiles]);
    clearErrors("photos");
  };

  const removeImage = (index: number) => {
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);

    setPreviewImages(newPreviews);
    setValue(
      "photos",
      newPreviews.map((item) => item.file)
    );
  };

  const onSubmit = (data: PhotoFormValues) => {
    console.log("Images uploadées :", data.photos);
    // TODO: Ajouter l’envoi des images au backend
  };

  return (
    <div className="flex w-full">
      <Card className="m-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-bold">
            Insérez des images pour expliquer votre situation
          </CardTitle>
          <CardDescription>Insérez les images des défauts.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Dropzone
              onDrop={handleDrop}
              accept={{ "image/jpeg": [], "image/png": [], "image/webp": [] }}
              maxFiles={3 - photos.length}
            >
              {({ getRootProps, getInputProps, isDragActive }) => (
                <div
                  {...getRootProps()}
                  className={cn(
                    "border border-dashed flex items-center justify-center aspect-square rounded-md cursor-pointer focus:outline-none p-4",
                    {
                      "border-primary bg-secondary": isDragActive,
                    }
                  )}
                >
                  <input {...getInputProps()} />
                  <ImageIcon
                    className="h-16 w-16 text-gray-500"
                    strokeWidth={1.25}
                  />
                </div>
              )}
            </Dropzone>

            {errors.photos && (
              <p className="text-red-500 text-sm">{errors.photos.message}</p>
            )}

            <div className="flex gap-4 justify-center">
              {previewImages.map(({ url }, index) => (
                <Card
                  key={index}
                  className="relative w-24 h-24 overflow-hidden p-0"
                >
                  <CardContent className="p-0">
                    <Image
                      src={url}
                      alt={`Aperçu ${index + 1}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      className="absolute top-1 right-1 p-1"
                      onClick={() => removeImage(index)}
                      type="button"
                    >
                      <XCircleIcon className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <CardFooter className="flex justify-between">
              <Link href={"/portal"}>
                <Button variant="secondary" type="button">
                  {" "}
                  Retour
                </Button>
              </Link>

              <Link href="/portal/photos/label-generator">
                <Button type="submit">Suivant</Button>
              </Link>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
