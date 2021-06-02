// Introduction to Modules

class abc {
    a: string;
    b: number;

    constructor(private _a: string, private _b: number){
        this.a = _a;
        this.b = _b;
    }
}

export { abc as cdf };