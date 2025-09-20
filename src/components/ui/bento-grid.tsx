import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 transition duration-200",
        // Only add padding, border, and background if there's content below the header
        (title || description || icon) ? "p-4 border border-neutral-200 bg-white shadow-input hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none" : "p-0",
        className,
      )}
    >
      {header}
      {(title || description || icon) && (
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          {title && (
            <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
          )}
          {description && (
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
