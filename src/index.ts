import { useRef } from 'react';
import * as Diff from 'diff';

interface CompareResult {
    count: number;
    value: string;
    added: boolean | undefined;
    removed: boolean | undefined;
}

export const useStringDiff = (string: string = ''): CompareResult[] => {
    const ref = useRef(string);
    const difference = Diff.diffChars(ref.current, string);
    ref.current = string;
    return difference;
};
