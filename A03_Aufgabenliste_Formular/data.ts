namespace A03_Formular {

    export interface Column {
        key: string;
        value: string;
    }

    export interface Data {
        [value: string]: Column[];
    }

    export let data: Data = {
        Tasks: [
            {Title:"Einkaufen", For:"Tim", Date:"20.01.25", Time:"10:00", Comment:"Brot,Eis,Kaffe", Status:"in Progress"},
            {Title:"Putzen", For:"Franz", Date:"22.02.25", Time:"09:35", Comment:"Nur Staub putzen", Status:"Pending"}
        ]
    }
}