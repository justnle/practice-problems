import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export const DropDownMenu = ({
    isOpen,
    items,
    selectedItems,
    setIsOpen,
    setSelectedItems
}) => {
    const dropdownRef = useRef(null);

    const handleItemClick = (itemIndex) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.some((item) => item.index === itemIndex)) {
                return prevSelectedItems.filter(
                    (selectedItem) => selectedItem.index !== itemIndex
                );
            }

            return [
                ...prevSelectedItems,
                { index: itemIndex, value: items[itemIndex] }
            ];
        });
    };

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectAll = () => {
        setSelectedItems(items.map((item, index) => ({ index, value: item })));
    };

    const handleDeselectAll = () => {
        setSelectedItems([]);
    };

    const renderSelectedItemNames = () => {
        if (selectedItems.length > 0) {
            return (
                <span className="dropdown-menu__selected-items">
                    {selectedItems
                        .map((selectedItem) => selectedItem.value)
                        .join(', ')}
                </span>
            );
        }

        return (
            <span className="dropdown-menu__placeholder">Select an item</span>
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                isOpen
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, setIsOpen]);

    return (
        <div className="dropdown-menu" ref={dropdownRef}>
            <button
                onClick={handleToggleMenu}
                className="dropdown-menu__button"
            >
                {renderSelectedItemNames()}
                <span className="dropdown-menu__icon">
                    {isOpen ? '▲' : '▼'}
                </span>
            </button>
            {isOpen && (
                <ul className="dropdown-menu__list">
                    <div className="dropdown-menu__select-all">
                        <button onClick={handleSelectAll}>Select All</button>
                        <button onClick={handleDeselectAll}>
                            Deselect All
                        </button>
                    </div>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="dropdown-menu__item"
                            onClick={() => handleItemClick(index)}
                        >
                            <input
                                className="dropdown-menu__checkbox"
                                checked={selectedItems.some(
                                    (selectedItem) =>
                                        selectedItem.index === index
                                )}
                                readOnly
                                type="checkbox"
                            />
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

DropDownMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedItems: PropTypes.arrayOf(
        PropTypes.shape({
            index: PropTypes.number.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    setIsOpen: PropTypes.func.isRequired,
    setSelectedItems: PropTypes.func.isRequired
};
