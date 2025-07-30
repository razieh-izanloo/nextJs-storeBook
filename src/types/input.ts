export interface INputpProps {
  type?: string;
  title: string;
  onChange: (value: string) => void;
  name: string;
  loading?: boolean;
  className?: string;
}