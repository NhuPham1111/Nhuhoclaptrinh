type TemperatureInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function TemperatureInput({ value, onChange }: TemperatureInputProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Nhap vao nhiet do"
    />
  );
}
