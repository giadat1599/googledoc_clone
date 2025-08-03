<script setup>
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, useEditor } from "@tiptap/vue-3";

const editor = useEditor({
  editorProps: {
    attributes: {
      style: "padding-left: 56px; padding-right: 56px",
      class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 cursor-text",
    },
  },
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});
</script>

<template>
  <div class="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-o print:bg-white print:overflow-visible">
    <div class="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
      <EditorContent :editor="editor" />
    </div>
  </div>
</template>
