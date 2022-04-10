import { CSSProperties, useEffect, useState } from "react"
import Colors from "../assets/Colors"
import '../assets/scss/elements/TextWriting.scss'
import { random } from "../util/Utils"

type TextWritingProps = {
    /**
     * Questo sarà il testo che non cambierà
     */
    invariantText : string
    
    /**
     * Questo sarà il testo che verrà "animato" come scrittura
     */
    textToWrite : string[]

    invariantTextColor? : string
    textToWriteColor? : string
    style? : CSSProperties
}

const TextWriting = ({ invariantText, textToWrite,
    invariantTextColor = 'black', textToWriteColor = Colors.colorPrimary,
    style 
    } : TextWritingProps) => {

    const [index, setIndex] = useState(0)

    const [charIndex, setCharIndex] = useState(0)
    const [showingText, setShowingText] = useState('')
    const [action, setAction] = useState('write' as 'write' | 'erase')

    useEffect(() => {
        
        animateWriting()

    }, [ charIndex, action ])


    const animateWriting = () => {
        const currentText = textToWrite[index]
        
        setTimeout(() => {
            // Riporto l'indice a 0 quando è completa l'ultima stringa
            if (index >= textToWrite.length) {
                setIndex(0)
                setCharIndex(0)
                return
            }

            // Quando si sta cancellando e la stringa è vuota, si passa alla prossima
            if (action === 'erase' && showingText === '') {
                // Parola completata, si va alla prossima
                setShowingText('')
                setCharIndex(0)
                if (index + 1 >= textToWrite.length)
                    setIndex(0)
                else 
                    setIndex(index + 1)
                    
                setAction('write')

                return
            }

            // Se il testo è completo, si inizia a cancellare carattere per carattere
            if (showingText === currentText && action === 'write') {
                setAction('erase')
                return
            }

            if (action === 'write') {
                setShowingText(showingText + currentText[charIndex])
                setCharIndex(charIndex + 1)
            } else {
                setShowingText(showingText.substring(0, showingText.length - 1))
                setCharIndex(charIndex - 1)
            }

        }, random(50, 300))
    }
    
    return (
        <div className="text-writing-wrapper" style={style}>

            <h1 style={{ color: invariantTextColor }}>{ invariantText }</h1>
            <h1 className="animated-text ml-5"
                style={{ color: textToWriteColor }}>{ showingText }</h1>

        </div>
    )
}

export { TextWriting }