export interface TypeT {
  name: string;
  checked: boolean;
}

export const PassTypes: TypeT[] = [
  { name: "Single"as const, checked: true },
  { name: "Duo"as const, checked: false },
  { name: "Squad"as const, checked: false },
  { name: "Team"as const, checked: false },
  { name: "Full"as const, checked: false },
] ;
