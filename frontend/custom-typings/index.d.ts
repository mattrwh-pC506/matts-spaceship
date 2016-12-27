declare let _development_: string;
declare let _production_: string;
declare let _development_tools_: string;
declare let Root_folder: string;
declare let log: any;
declare let configuration: any;

declare module 'autoprefixer' {
    interface IOptions {
        browsers: string | string[];
    }
    interface IAutoprefixer {
        (opts?: IOptions): NodeJS.ReadWriteStream;
    }
    const autoprefixer: IAutoprefixer;
    export = autoprefixer;
}
