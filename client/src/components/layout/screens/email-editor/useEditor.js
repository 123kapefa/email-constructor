import { useRef, useState } from 'react'

export function useEditor() {
	const [textUserTo, setTextUserTo] = useState('');
	const [textTitle, setTextTitle] = useState('')
	const [textContext, setTextContext] = useState('');
	
	const [selectionStart, setSelectionStart] = useState(0)
	const [selectionEnd, setSelectionEnd] = useState(0)
	
	const textRef = useRef (null)
	
	const updateSelection = () => {
		if (!textRef.current) return
		setSelectionStart(textRef.current.selectionStart)
		setSelectionEnd(textRef.current.selectionEnd)
	}
	
	const applyFormat = (type) => {
		const beforeText = text.substring(0, selectionStart)
		const selectedText = text.substring(selectionStart, selectionEnd)
		const afterText = text.substring(selectionEnd)
		
		setText(beforeText + applyStyle(type, selectedText) + afterText)
		
		if(selectedText.length === 0) return
	}
	
	const applyStyle = (type, selectedText) => {
		switch (type) {
			case 'bold':
				selectedText = '<b>' + selectedText + '</b>';
				break;
			case 'italic':
				selectedText = '<i>' + selectedText + '</i>';
				break;
			case 'underline':
				selectedText = '<u>' + selectedText + '</u>';
				break;
			case 'strikethrough':
				selectedText = '<s>' + selectedText + '</s>';
				break;
		}
		return selectedText;
	}
	
	return {
		textUserTo,
		setTextUserTo,
		textTitle,
		setTextTitle,
		textContext,
		setTextContext,
		textRef,
		applyFormat,
		updateSelection
	}
}