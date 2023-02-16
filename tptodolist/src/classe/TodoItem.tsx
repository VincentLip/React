export class TodoItem {
    private static _count = 0;
    // private _id: number;
    // private _isDone: boolean;

    constructor(
        public title: string, 
        public description: string, 
        public dueDate: string,
        public isDone:boolean,
        
        ) 
        
        {
        // this._id = ++TodoItem._count;
        // this._isDone = false;
    }
}
