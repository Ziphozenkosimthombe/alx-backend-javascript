import { RowElement, RowID } from "./interface";


// containing the type declarations for each crud function.


export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

