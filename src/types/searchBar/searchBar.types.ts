
export interface SearchBarProps {
  onSubmit?: () => void;
  onChange?: (value: string) => void;
  value: string;
  placeholder:string;
}
