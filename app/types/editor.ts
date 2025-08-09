type SectionKey = "undo" | "redo" | "print" | "spell_check" | "bold" | "italic" | "underline" | "comment";

export type SectionItem = {
  key: SectionKey;
  label: string;
  icon: Component;
  active?: boolean;
  onClick: () => void;
};
