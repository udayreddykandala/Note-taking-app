import React from 'react';
import { saveItem } from '../utils/storage';

function FileUploader({ onFileUpload }) {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const key = `file_${Date.now()}`;
            await saveItem(key, file);
            onFileUpload({ key, name: file.name, value: file });
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    );
}

export default FileUploader;
