import { Button } from "./Button";
type NotifyProps = {
  onNotify: (message: string) => void;
};

export function Notify({ onNotify }: NotifyProps) {
  return (
    <Button
      variant="secondary"
      onClick={() => onNotify("Nhiet do duoc cap nhat ")}
    >
      Click
    </Button>
  );
}
