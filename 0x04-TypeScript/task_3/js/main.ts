/// <reference path="crud.d.ts"
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Saliva",
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {age: 23, ...row};

CRUD.updateRow(newRowID ,updatedRow, row);
CRUD.deleteRow(newRowID)