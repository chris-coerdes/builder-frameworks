import React, { FunctionComponent, ReactNode } from "react";

interface DraggableSourceProps {
    onDragStart(event: React.DragEvent<HTMLDivElement>): any;
    children?: ReactNode;
    className?: string;
}

const DraggableSource: FunctionComponent<DraggableSourceProps> = (props) => {
    return (
        <div className={props.className} draggable={true} onDragStart={props.onDragStart}>
            {props.children}
        </div>
    );
};

interface DraggableDestinationProps {
    onDrop(event: React.DragEvent<HTMLDivElement>): any;
    children?: ReactNode;
    className?: string;
}

const DraggableDestination: FunctionComponent<DraggableDestinationProps> = (props) => {
    return (
        <div onDragOver={(event) => event.preventDefault()} onDrop={props.onDrop} className={props.className}>
            {props.children}
        </div>
    );
};

export { DraggableSource, DraggableDestination }