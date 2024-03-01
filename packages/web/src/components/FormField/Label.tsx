type LabelProps = {
  label: string;
  name: string;
};

export function Label({ label, name }: LabelProps) {
  return (
    <label htmlFor={name} className="capitalize">
      {label}
    </label>
  );
}
