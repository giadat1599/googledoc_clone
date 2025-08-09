type SectionKey = "undo" | "redo" | "print" | "spell_check" | "bold" | "italic" | "underline" | "comment" | "list_todo" | "remove_formatting";

export type SectionItem = {
  key: SectionKey;
  label: string;
  icon: Component;
  active?: boolean;
  onClick: () => void;
};
