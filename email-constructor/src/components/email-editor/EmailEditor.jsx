import { Bold, Eraser, Italic, Strikethrough, Underline } from 'lucide-react'
import React, {useRef, useState} from 'react'
import styles from './EmailEditor.module.css'
import parse from 'html-react-parser'

export function EmailEditor() {

    const [text, setText] = useState("Hey! \n Lorem  Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n Illum earum expedita quia nesciunt soluta vero incidunt!\nInventore nam ducimus iste natus. Soluta laboriosam,\nrepellendus neque nemo porro at? Est, dolorem!");

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
        }
        return selectedText;
    }

    return (
        <>
            <h1>Почта</h1>
            <div className={styles.preview}>{parse(text)}</div>
            <div className={styles.card}>

          <textarea ref={textRef}
                    className={styles.editor}
                    spellCheck='false'
                    onSelect={updateSelection}
                    onChange={e => setText(e.target.value)}
                    value={text}>
            {text}
          </textarea>
                <div className={styles.actions}>
                    <div className={styles.tools}>
                        <button onClick={() => setText('')}>
                            <Eraser size={18}/>
                        </button>
                        <button onClick={() => applyFormat('bold')}>
                            <Bold size={18}/>
                        </button>
                        <button>
                            <Italic size={18}/>
                        </button>
                        <button>
                            <Underline size={18}/>
                        </button>
                        <button>
                            <Strikethrough size={18}/>
                        </button>
                    </div>
                    <button>Отправить</button>
                </div>
            </div>
        </>
    )
}
