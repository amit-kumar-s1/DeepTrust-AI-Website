export async function detectImage(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    "http://localhost:8000/api/v1/detect/image",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Image detection failed");
  }

  return await response.json();
}