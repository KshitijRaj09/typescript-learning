import React from "react";

export interface Notes {
    id : number;
    heading: string,
    note : string;
}

export interface Notesstate {
    heading : string;
    note : string;
}

export interface AppProps {
    input : string;
    heading: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setHeading: React.Dispatch<React.SetStateAction<string>>;
    todoAddHandler : (e: React.FormEvent<HTMLFormElement>)=>void;
    notes: Notes[],
    setNotes: React.Dispatch<React.SetStateAction<Notes[]>>
}