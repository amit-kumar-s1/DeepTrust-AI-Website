"use client";

interface Props {
  onFileChange: (
    file: File
  ) => void;
}

export default function UploadZone({
  onFileChange,
}: Props) {
  return (
    <label
      className="
      flex
      items-center
      justify-center
      h-64
      border-2
      border-dashed
      border-cyan-500/30
      rounded-3xl
      cursor-pointer
      "
    >
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file =
            e.target.files?.[0];

          if (file) {
            onFileChange(file);
          }
        }}
      />

      <span>
        Drag & Drop or Click to Upload
      </span>
    </label>
  );
}