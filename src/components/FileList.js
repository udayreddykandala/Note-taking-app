import React from 'react';

function FileList({ files, onView, onDelete, onDownload }) {
    return (
        <div className="mt-3">
            <h2 className="mb-3">Files</h2>
            <ul className="list-group">
                {files.map(file => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={file.key}>
                        {file.name}
                        <div>
                            <button onClick={() => onDownload(file)} className="btn btn-primary btn-sm me-2">Download</button>
                            <button onClick={() => onView(file)} className="btn btn-secondary btn-sm me-2">View</button>
                            <button onClick={() => onDelete(file.key)} className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
