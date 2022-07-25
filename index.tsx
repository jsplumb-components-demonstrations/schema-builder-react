import React, { useState, useEffect, useRef } from 'react';

import { createRoot } from 'react-dom/client';

import { SchemaComponent, PaletteComponent, InspectorComponent } from "@jsplumb-components/schema-react"

function DemoComponent(props) {

    const schema = useRef(null)

    useEffect(() => {
        schema.current.loadUrl('./schema-1.json', () => {
            schema.current.zoomToFit()
        })
    }, [])

    function undo() {
        schema.current.undo()
    }

    function redo() {
        schema.current.redo()
    }

    return <>
        <div className="container">
            <PaletteComponent schemaId="mySchema"/>
            <SchemaComponent ref={schema} id="mySchema"/>
            <div className="rhs">
                <div id="undoredo">
                    <button onClick={() => undo()}>Undo</button>
                    <button onClick={() => redo()}>Redo</button>
                </div>
                <InspectorComponent schemaId="mySchema"/>
            </div>
        </div>
        </>
}

const c = createRoot(document.querySelector("#main"))
c.render(<DemoComponent/>)
