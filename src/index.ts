import { useRef } from 'react';
import * as Diff from 'diff';

interface CompareResult {
    count: number;
    value: string;
    added: boolean | undefined;
    removed: boolean | undefined;
}

export const useStringDiff = (oldString: string = '', newString: string | undefined = undefined): CompareResult[] => {
    let difference;
    const ref = useRef(oldString);
    if (newString) {
        difference = Diff.diffChars(oldString, newString);
    } else {
        difference = Diff.diffChars(ref.current, oldString);
        ref.current = oldString;
    }
    return difference;
};
