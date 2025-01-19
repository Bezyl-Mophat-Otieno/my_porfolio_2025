import { type Editor } from '@tiptap/react';
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Code,
    Quote,
    Undo,
    Redo,
    Heading1,
    Heading2,
    Heading3,
} from 'lucide-react';

interface MenuBarProps {
    editor: Editor | null;
}

export function MenuBar({ editor }: MenuBarProps) {
    if (!editor) return null;

    const MenuButton = ({ onClick, isActive, icon: Icon, label }: any) => (
        <button
            onClick={onClick}
            className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                isActive ? 'text-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'
            }`}
            title={label}
        >
            <Icon className="w-5 h-5" />
        </button>
    );

    return (
        <div className="border-b border-gray-200 dark:border-gray-700 p-2 flex flex-wrap gap-1">
            <MenuButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                icon={Bold}
                label="Bold"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                icon={Italic}
                label="Italic"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                icon={List}
                label="Bullet List"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                isActive={editor.isActive('orderedList')}
                icon={ListOrdered}
                label="Ordered List"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                isActive={editor.isActive('codeBlock')}
                icon={Code}
                label="Code Block"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                icon={Quote}
                label="Quote"
            />
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1 self-center" />
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                isActive={editor.isActive('heading', { level: 1 })}
                icon={Heading1}
                label="Heading 1"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
                icon={Heading2}
                label="Heading 2"
            />
            <MenuButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
                icon={Heading3}
                label="Heading 3"
            />
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-1 self-center" />
            <MenuButton
                onClick={() => editor.chain().focus().undo().run()}
                icon={Undo}
                label="Undo"
            />
            <MenuButton
                onClick={() => editor.chain().focus().redo().run()}
                icon={Redo}
                label="Redo"
            />
        </div>
    );
}
