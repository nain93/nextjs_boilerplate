import React from "react";

export default function Button({
  title,
  disabled = false,
  className,
  onClick,
}: {
  className?: string;
  title: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${
        disabled
          ? "opacity-40 cursor-not-allowed bg-gray-300"
          : "hover:opacity-40 transition cursor-pointer bg-black"
      } transition font-bold text-white rounded w-80 py-4 px-2 text-lg ${className}`}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
