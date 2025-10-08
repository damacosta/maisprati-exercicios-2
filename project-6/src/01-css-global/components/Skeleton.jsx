export default function Skeleton({ width = "100%", height = "1em", circle = false, style = {} }) {
  return (
    <span
      className={`skeleton${circle ? " skeleton--circle" : ""}`}
      style={{ width, height, display: "inline-block", ...style }}
      aria-hidden="true"
    />
  );
}
