import React, { FunctionComponent, ReactNode } from "react";

interface DraggableSourceProps {
    onDragStart(event: React.DragEvent<HTMLDivElement>): any;
    className?: string;
};

const DraggableSource: FunctionComponent<DraggableSourceProps> = (props) => {
    return (
        <div className={props.className} draggable={true} onDragStart={props.onDragStart}>
            {props.children}
        </div>
    );
};

interface DraggableDestinationProps {
    onDrop(event: React.DragEvent<HTMLDivElement>): any;
    children: ReactNode;
    className?: string;
};

const DraggableDestination: FunctionComponent<DraggableDestinationProps> = ({onDrop, children, className}) => {
    return (
        <div onDragOver={(event) => event.preventDefault()} onDrop={onDrop} className={className}>
            {children}
        </div>
    );
}

export { DraggableSource, DraggableDestination };