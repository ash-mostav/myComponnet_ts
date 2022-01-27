import React, { useState } from "react";
import { Container, SmallBox, StyledTask, TrashCan } from "./DnDtest.Styles";
interface TaskShape {
    id: number;
    name: string;
    done: boolean;
}
interface IDragProps {
    onDragLeave?: () => void;
    onDragEnter?: () => void;
    onDragEnd?: () => void;
    onDragOver?: () => void;
    onDrop?: () => void;
    tasks?: TaskShape[];
    isdragged?: boolean;
    children?: React.ReactNode;
}
const TaskList: React.FC<IDragProps> = ({ ...props }) => {
    const [task, settask] = useState<TaskShape[]>([
        {
            id: 1,
            name: "wake up",
            done: false
        },
        {
            id: 2,
            name: "read react",
            done: false
        },
        {
            id: 3,
            name: "read again",
            done: false
        },
        {
            id: 4,
            name: "practice react",
            done: false
        },
        {
            id: 5,
            name: "have a dinner 😁",
            done: false
        },
        {
            id: 6,
            name: "go to sleep",
            done: true
        },
        {
            id: 7,
            name: "repeat()",
            done: true
        }
    ]);
    const [isdragged, setDragged] = useState<boolean>(true)

    const onDragStart = (e: any) => {
        let element = e.currentTarget;
        element.classList.add("dragged");
        // setDragged(true);
        e.dataTransfer.setData("text/plain", e.currentTarget.id);
        e.dataTransfer.effectAllowed = "move";
    };
    const onDragEnd = (e: any) => {
        // setDragged(false);
        e.currentTarget.classList.remove("dragged");
    };
    const onDragEnter = (e: any) => {
        e.preventDefault();
        // setDragged(false);
        let element = e.currentTarget;

        element.classList.add("dragged-over");
        e.dataTransfer.dropEffect = "move";
    };
    const onDragLeave = (e: any) => {
        let currentTarget = e.currentTarget;
        let newTarget = e.relatedTarget;
        if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
            return;
        e.preventDefault();
        // setDragged(true);
        let element = e.currentTarget;
        element.classList.remove("dragged-over");
    };
    const onDragOver = (e: any) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };
    const onDrop = (e: any, value: any) => {
        e.preventDefault();
        e.currentTarget.classList.remove("dragged-over");
        let data = e.dataTransfer.getData("text/plain");
        // setDragged(true);
        settask([...task.map((item: any) => {
            if (item.id == data) item.done = value;
            return item;
        })]);
    };
    const onDropDelete = (e: any) => {
        e.preventDefault();
        let elementtodelete = e.currentTarget;
        elementtodelete.classList.remove("dragged-over");
        let data = e.dataTransfer.getData("text/plain", elementtodelete.id);
        // setDragged(true);
        settask([...task.filter((item: any) => {
            if (item.id != data)
                return item;
        })]);
    };

    let pending = task.filter(t => !t.done);
    let done = task.filter(t => t.done);


    return (
        <Container>
            <SmallBox
                className="pending"
                onDragLeave={e => onDragLeave(e)}
                onDragEnter={e => onDragEnter(e)}
                onDragEnd={e => onDragEnd(e)}
                onDragOver={e => onDragOver(e)}
                onDrop={e => onDrop(e, false)}

            >
                <h3>pending</h3>
                {pending.map((item: any) => (
                    <DraggedDiv
                        className={"" + !isdragged ? "task-pending dragged" : "dragged-over"}
                        key={item.name}
                        id={item.id}
                        onDragStart={(e: any) => onDragStart(e)}
                        onDragEnd={(e: any) => onDragEnd(e)}
                        dragged={isdragged}

                    >
                        {item.name}
                    </DraggedDiv>
                    // <div
                    //     className="task"
                    //     key={item.name}
                    //     id={item.id}
                    //     draggable
                    //     onDragStart={e => onDragStart(e)}
                    //     onDragEnd={e => onDragEnd(e)}
                    // >
                    //     {item.name}
                    // </div>
                ))}
            </SmallBox>
            <TrashCan
                onDragLeave={(event: any) => onDragLeave(event)}
                onDragEnter={(event: any) => onDragEnter(event)}
                onDragEnd={(event: any) => onDragEnd(event)}
                onDragOver={(event: any) => onDragOver(event)}
                onDrop={(event: any) => onDropDelete(event)}
            >
                🗑
            </TrashCan>
            <SmallBox
                className={"done"}
                onDragLeave={(event: any) => onDragLeave(event)}
                onDragEnter={(event: any) => onDragEnter(event)}
                onDragEnd={(event: any) => onDragEnd(event)}
                onDragOver={(event: any) => onDragOver(event)}
                onDrop={(event: any) => onDrop(event, true)}
            >
                <h3>Done</h3>
                {done.map((item: any) => (
                    <DraggedDiv
                        className={"" + !isdragged ? "task-done dragged" : "dragged-over"}
                        key={item.name}
                        id={item.id}
                        onDragStart={(e: any) => onDragStart(e)}
                        onDragEnd={(e: any) => onDragEnd(e)}
                        dragged={isdragged}

                    >
                        {item.name}
                    </DraggedDiv>
                    // <div
                    //     className={"task" + isdragged ? "dragged" : "dragged-over"}
                    //     key={item.name}
                    //     id={item.id}
                    //     draggable
                    //     onDragStart={e => onDragStart(e)}
                    //     onDragEnd={e => onDragEnd(e)}
                    // >

                    //     {item.name}
                    // </div>
                ))}
            </SmallBox>
        </Container>
    );
}

export default TaskList;
interface IDraggedDiv {
    onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
    dragged?: boolean;
    draggable?: boolean;
    className?: string;
    id?: any;
}

const DraggedDiv: React.FC<IDraggedDiv> = ({ children, ...props }) => {
    return (
        <StyledTask
            {...props}
        >
            {children}
        </StyledTask>
    )
}

DraggedDiv.defaultProps = {
    draggable: true
}