import type { Editor } from "@tiptap/core";

import Highlight from "@tiptap/extension-highlight";
import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import { Color, FontFamily, TextStyle } from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/vue-3";
import { BoldIcon, ItalicIcon, ListTodoIcon, MessageSquarePlusIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-vue-next";
import ImageResize from "tiptap-extension-resize-image";

import type { SectionItem } from "~/types/editor";

export const useEditorStore = defineStore("editorStore", () => {
  const editor = ref<Editor | null>(null);

  useEditor({
    onCreate({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onDestroy() {
      editor.value = null;
    },
    onUpdate({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onSelectionUpdate({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onTransaction({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onFocus({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onBlur({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    onContentError({ editor: editorInstance }) {
      editor.value = editorInstance;
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px",
        class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 cursor-text",
      },
    },
    content: ``,
    extensions: [
      StarterKit,
      Color,
      Highlight.configure({ multicolor: true }),
      TextStyle,
      FontFamily,
      Underline,
      ImageResize,
      TableKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
  });

  const sections = computed<SectionItem[][]>((): SectionItem[][] => {
    return [
      [
        {
          key: "undo",
          label: "Undo",
          icon: Undo2Icon,
          onClick: () => editor.value?.chain().focus().undo().run(),
        },
        {
          key: "redo",
          label: "Redo",
          icon: Redo2Icon,
          onClick: () => editor.value?.chain().focus().redo().run(),
        },
        {
          key: "print",
          label: "Print",
          icon: PrinterIcon,
          onClick: () => window.print(),
        },
        {
          key: "spell_check",
          label: "Spell Check",
          icon: SpellCheckIcon,
          onClick: () => {
            const current = editor.value?.view.dom.getAttribute("spellcheck");
            editor.value?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
          },
        },
      ],
      [
        {
          key: "bold",
          label: "Bold",
          active: editor.value?.isActive("bold"),
          icon: BoldIcon,
          onClick: () => editor.value?.chain().focus().toggleBold().run(),
        },
        {
          key: "italic",
          label: "Italic",
          active: editor.value?.isActive("italic"),
          icon: ItalicIcon,
          onClick: () => editor.value?.chain().focus().toggleItalic().run(),
        },
        {
          key: "underline",
          label: "Underline",
          active: editor.value?.isActive("underline"),
          icon: UnderlineIcon,
          onClick: () => editor.value?.chain().focus().toggleUnderline().run(),
        },
      ],
      [
        {
          key: "comment",
          label: "Comment",
          icon: MessageSquarePlusIcon,
          active: false,
          onClick: () => {},
        },
        {
          key: "list_todo",
          label: "List Todo",
          icon: ListTodoIcon,
          active: editor.value?.isActive("taskList"),
          onClick: () => editor.value?.chain().focus().toggleTaskList().run(),
        },
        {
          key: "remove_formatting",
          label: "Remove Formatting",
          icon: RemoveFormattingIcon,
          onClick: () => editor.value?.chain().focus().unsetAllMarks().run(),
        },
      ],
    ];
  });

  return { editor, sections };
});
