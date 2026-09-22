const PALETTE = ["#1f3d32", "#163028", "#b8862f", "#7c5a20", "#2f5142"];

function initialsFor(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function colorFor(name: string) {
  const index = name.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0) % PALETTE.length;
  return PALETTE[index];
}

export function AgentAvatar({
  name,
  size = 56,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-display font-semibold text-gold-200 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: colorFor(name),
        fontSize: size * 0.34,
      }}
      aria-hidden="true"
    >
      {initialsFor(name)}
    </div>
  );
}
