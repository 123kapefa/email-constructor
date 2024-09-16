import { useRef, useState } from 'react';
import { applyStyle } from './applyStyle';

export function useEditor() {
    const [text, setText] = useState('Enter email...');
    const [selectionStart, setSelectionStart] = useState(0);
    const [selectionEnd, setSelectionEnd] = useState(0);

    const textRef = useRef(null);

    const updateSelection = () => {
        if (!textRef.current) return;
        setSelectionStart(textRef.current.selectionStart);
        setSelectionEnd(textRef.current.selectionEnd);
    };

    const applyFormat = (type) => {
        const selectedText = text.substring(selectionStart, selectionEnd); // Get selected text

        if (!selectedText) return;

        const before = text.substring(0, selectionStart); // Text before the selection
        const after = text.substring(selectionEnd); // Text after the selection

        setText(before + applyStyle(type, selectedText) + after); // Update text with formatted selection
    };

    return { text, applyFormat, updateSelection, setText, textRef };
}