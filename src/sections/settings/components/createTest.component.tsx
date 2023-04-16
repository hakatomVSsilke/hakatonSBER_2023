import React, {useRef} from "react";
import { Editor } from '@tinymce/tinymce-react';
import {EditorOptions} from "tinymce";

const CreateTestComponent: React.FunctionComponent = () => {
    const editorRef: any = useRef(null);
    return (
        <>
            <Editor
                // onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    width: 1400,
                    skin: 'tinymce-5',
                    menubar: 'file edit view insert format tools table help',
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount codesample'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help | codesample',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
}

export default CreateTestComponent;