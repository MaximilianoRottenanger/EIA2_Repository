namespace A03_Formular {

    export interface Task {
        Title: string;
        For: string;
        Date: string;
        Time: string;
        Comment: string;
        Status: string;
    }

    export interface Tasks {
        [id: string]: Task
    }



    export let data: Tasks = {}
}