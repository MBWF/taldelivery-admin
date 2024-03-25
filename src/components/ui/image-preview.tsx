"use client";

import { Control, Controller } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ChangeEvent, useState } from "react";
import { Input } from "./input";

type ImagePreviewProps = {
  control: Control<any>;
  name: string;
};

function getImageData(event: ChangeEvent<HTMLInputElement>) {
  const dataTransfer = new DataTransfer();

  Array.from(event.target.files!).forEach((image) =>
    dataTransfer.items.add(image)
  );

  const files = dataTransfer.files;
  const displayUrl = URL.createObjectURL(event.target.files![0]);

  return { files, displayUrl };
}

export function ImagePreview({ control, name }: ImagePreviewProps) {
  const [preview, setPreview] = useState<string>("");
  return (
    <div className="flex gap-8">
      <Avatar className="w-24 h-24">
        <AvatarImage src={preview} />
        <AvatarFallback>Vazio</AvatarFallback>
      </Avatar>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ...rest } }) => (
          <>
            <Input
              type="file"
              {...rest}
              onChange={(event) => {
                const { files, displayUrl } = getImageData(event);
                setPreview(displayUrl);
                onChange(files);
              }}
            />
          </>
        )}
      />
    </div>
  );
}
