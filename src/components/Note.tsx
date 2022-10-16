import '../styles/note.css'
import { Label } from '../types';

export type INoteProps = {
    title: string,
    content: string,
    labels: Array<Label>;
}

export default function Note(props: INoteProps) {
    return (
        <div className="note-wp">
            <div className="note">
                <div className="note-head">
                    <span className="note-title">
                        {props.title}
                    </span>
                    <div className="note-labels">
                        {
                            props.labels.map((label, index) => (
                                <div className="label">{label.name}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="note-content">
                    {props.content}
                </div>
            </div>
        </div>
    )
}