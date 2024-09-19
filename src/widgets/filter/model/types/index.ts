export interface TypeT {
  name: string;
  checked: boolean;
}

export const PassTypes: TypeT[] = [
  { name: "Single", checked: true },
  { name: "Duo", checked: false },
  { name: "Squad", checked: false },
  { name: "Team", checked: false },
  { name: "Full", checked: false },
];
