interface IconProps {
  size: number;
}

export interface InputProps {
  label: string;
  name: string;
  type: string;
  id: string;
  icon: React.ComponentType<IconProps>;
  iconSize: number;
}
