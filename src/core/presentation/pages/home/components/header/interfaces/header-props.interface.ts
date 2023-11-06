export interface HeaderProps {
  items: {
    title: string;
    active: boolean;
    onClick: () => void;
  }[];
}
