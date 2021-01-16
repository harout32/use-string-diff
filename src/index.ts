import { useState } from "react";
import * as Diff from 'diff';


interface CompareResult {
    count: number;
    value: string;
    added: boolean | undefined;
    removed: boolean | undefined;
}

export const useStringDiff = (string: string = ''): CompareResult[] => {
    const [state, setState] = useState(string);
    const difference = Diff.diffChars(state, string);
    setState(string);
    return difference;
};
