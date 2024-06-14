import { useEffect, useState } from "react";

interface UseImageResult {
  loading: boolean;
  error: Error | null;
  image: string | null;
}

export const useImage = (fileName: string): UseImageResult => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../../assets/img/${fileName}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};
