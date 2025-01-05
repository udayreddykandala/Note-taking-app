// Using localForage for simplicity and to leverage the IndexedDB with an easy API.
import localForage from 'localforage';

localForage.config({
    driver: localForage.INDEXEDDB,
    name: 'NotesApp',
    version: 1.0,
    storeName: 'appData', // Data will be stored here.
    description: 'Handles notes and files for the NotesApp'
});

const saveItem = async (key, data) => {
    await localForage.setItem(key, data);
};

const getItem = async (key) => {
    return await localForage.getItem(key);
};

const getAllItems = async () => {
    let items = [];
    await localForage.iterate((value, key) => {
        items.push({ key, value });
    });
    return items;
};

const removeItem = async (key) => {
    await localForage.removeItem(key);
};

export { saveItem, getItem, getAllItems, removeItem };
