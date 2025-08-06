import type { Editor } from "@tiptap/core";

import { TaskItem, TaskList } from "@tiptap/extension-list";
import { TableKit } from "@tiptap/extension-table";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/vue-3";
import ImageResize from "tiptap-extension-resize-image";

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
      ImageResize,
      TableKit,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
  });

  return { editor };
});
