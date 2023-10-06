import { CustomButtons } from "./CustomButtons";

export function DisplayButtons() {
  return (
    <div className="flex justify-center space-x-5">
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <CustomButtons key={i} btnID={i + 1} />
        ))}
    </div>
  );
}
