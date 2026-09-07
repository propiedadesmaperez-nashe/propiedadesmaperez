import Image from "next/image";

const sizes = {
  sm: "h-12 w-12",
  md: "h-28 w-28",
  lg: "h-32 w-32",
  header: "h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]",
};

export function BrandLogo({
  size = "md",
  priority = false,
}: {
  size?: keyof typeof sizes;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-maperez-light.png"
      alt="Propiedades MAPEREZ"
      width={900}
      height={900}
      className={`${sizes[size]} max-h-none shrink-0 object-contain object-center`}
      unoptimized
      priority={priority}
    />
  );
}
