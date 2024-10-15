import React, { useRef } from 'react';

import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

const BlogEditor = (props: any) => {
    const emailEditorRef = useRef<EditorRef>(null);

    const exportHtml = () => {
        const unlayer = emailEditorRef.current?.editor;

        unlayer?.exportHtml((data: any) => {
            const { design, html } = data;
            props.onExport(html);
        });
    };

    const onReady: EmailEditorProps['onReady'] = () => {
        props?.onReady();
    };

    return (
        <div>
            <EmailEditor ref={emailEditorRef} onReady={onReady} minHeight={'calc(100vh - 104px)'} />
            <div>
                <button
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={exportHtml}>Export HTML</button>
            </div>
        </div>
    );
};

export default BlogEditor;