import { ImageOff } from "lucide-react";

const NoImage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-100">
      <div className="text-center">
        <ImageOff className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-500">No Image Available</p>
      </div>
    </div>
  );
};

export default NoImage; 