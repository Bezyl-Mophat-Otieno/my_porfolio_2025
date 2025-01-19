import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import { MenuBar } from './MenuBar';

const lowlight = createLowlight(common);

export function BlogEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert max-w-none focus:outline-none',
            },
        },
    });

    return (
        <div className="border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800">
            <MenuBar editor={editor} />
            <EditorContent
                editor={editor}
                className="min-h-[500px] p-4"
            />
        </div>
    );
}
