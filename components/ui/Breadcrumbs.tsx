import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav className="text-sm text-forest-600 dark:text-forest-200" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">›</span>}
              {last || !item.href ? (
                <span className="font-medium text-forest-900 dark:text-cream">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="transition duration-300 ease-in-out hover:text-gold-600"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
