import React from 'react';

function FileViewer({ file }) {
    if (!file) return null;

    const fileUrl = URL.createObjectURL(file.value);

    return (
        <div>
            <h2>Viewing {file.name}</h2>
            <iframe src={fileUrl} style={{ width: '100%', height: '500px' }}></iframe>
        </div>
    );
}

export default FileViewer;
