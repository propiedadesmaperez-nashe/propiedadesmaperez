import Image from "next/image";

const sizes = {
  sm: "h-auto w-[5.5rem]",
  md: "h-auto w-[11rem] sm:w-[12.5rem]",
  lg: "h-auto w-[13rem] sm:w-[15rem]",
  header: "h-auto w-[4.75rem] sm:w-[5.5rem]",
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
      width={1200}
      height={620}
      className={`${sizes[size]} max-w-none shrink-0 object-contain object-center`}
      style={{ height: "auto" }}
      unoptimized
      priority={priority}
    />
  );
}
