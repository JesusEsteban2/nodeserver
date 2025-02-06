export class HtmlError extends Error {
    //statusCode: number; //No es necesario incluido en el constructor.
    //status: string; //No es necesario incluido en el constructor.
    constructor(
        message: string,
        public statusCode: number,
        public status: string,
    ) {
        super(message);
        this.name = 'HtmlError';
        // this.statusCode = statusCode;
        // this.status = status;
    }
}

// const e = new Error('Error message');
