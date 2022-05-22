import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ColorPicker() {
    let [color, setColor] = useContext(ThemeContext) // llamada al contexto
    return (
        <div>
            <input
                type="color"
                value="#FFF"
                onChange={(e) => setColor(e.target.value)
                } />
            <p>El color: {color}</p> {/* imprimiendo el contexto declarado desde App.js */}
        </div>
    )
}