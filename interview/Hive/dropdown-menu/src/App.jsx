import { useState } from 'react';

import './App.css';

import { DropDownMenu } from './components/DropdownMenu';

function App() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5'
    ];

    return (
        <div className="app-container">
            <h1>Hive Frontend Assessment</h1>
            <DropDownMenu
                isOpen={isOpen}
                items={items}
                setIsOpen={setIsOpen}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
        </div>
    );
}

export default App;
