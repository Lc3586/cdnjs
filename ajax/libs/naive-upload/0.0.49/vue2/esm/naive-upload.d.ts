declare class vt {
    constructor(e: any, t: any);
    index: any;
    blob: any;
    size: any;
}
declare class Mt {
    getFileTypeByExtension(e: any): Promise<any>;
    getFileTypeByMIME(e: any): Promise<any>;
    getFileTypeImageUrl(e: any): string;
    getUnknowFileTypeImageUrl(): string;
}
declare class H {
    static equalError(e: any, t: any, n: any): boolean;
    static getInstance(e: any, t: any): H;
    moving(e: any, t: any): void;
    currentX: any;
    currentY: any;
    transX: any;
    transY: any;
    lastTransX: any;
    lastTransY: any;
    checkRestore(): boolean;
    start(e: any, t: any, n: any): void;
    flag: boolean | undefined;
    mouseMove: ((o: any) => void) | undefined;
    scroll: ((o: any) => void) | undefined;
    scrollX: any;
    scrollY: any;
    offset(e: any, t: any): void;
    offsetX: any;
    offsetY: any;
    save(): void;
    x: any;
    y: any;
    zIndex: any;
    position: any;
    transform: any;
    restore(): void;
    end(e: any): void;
}
declare class de {
    Reader: FileReader;
    readAsArrayBuffer(e: any): Promise<any>;
    close(): void;
}
declare let P: {
    new (): {};
    getSize(e: any, t?: number, n?: number): string;
};
declare var D: any;
declare class j {
    static getByExtension(e: any): any;
    static getByMIME(e: any): any;
}
declare class X {
    static getInstance(e?: number, t?: boolean, n?: boolean): Promise<any>;
    constructor(e: any, t: any);
    debug: any;
    enableWorker: any;
    workerSupported: boolean;
    checkFile(e: any, t: any, n: any): Promise<any>;
    appendData(e: any, t: any): Promise<void>;
    getResult(e: any): Promise<any>;
    reset(): Promise<void>;
    resetByIndex(e: any): Promise<void>;
    closeByIndex(e: any): Promise<void>;
    workerPostMessage(e: any, t: any): Promise<any>;
    handler(e: any, t: any): Promise<any>;
    finished: boolean | undefined;
    cancel(): Promise<void>;
    canceled: boolean | undefined;
    paused: boolean | undefined;
    pause(): Promise<void>;
    continue(): Promise<void>;
    close(): Promise<void>;
}
declare const kt: Blob;
declare var x: any;
declare const Ut: any;
declare var T: any;
declare class v {
    static convertFrom(e: any): v;
    constructor(e: any, t: any, n: any, u: any);
    r: any;
    g: any;
    b: any;
    a: any;
}
declare class N {
    constructor(e: any);
    file: any;
    size: any;
    objectURL: string | undefined;
}
declare var M: any;
declare let R: {
    new (): {};
};
declare class A {
    static s4(): string;
    static new(): string;
}
declare class C extends Error {
    static consoleWriteWithIndex(t: any, n: any): void;
    static consoleWrite(t: any): void;
    constructor(t: any, n: any);
    innerError: any;
}
declare class q {
    static getInstance(e: any, t: boolean | undefined, n: any, u?: boolean): Promise<any>;
    constructor(e: any, t: any, n: any);
    debug: any;
    enableWorker: any;
    workerSupported: boolean;
    apiService: any;
    uploadFile(e: any, t: any): Promise<any>;
    uploadChunkFile(e: any, t: any, n: any, u: any): Promise<void>;
    useWorkerUploadFile(e: any, t: any): Promise<any>;
    useWorkerUploadChunkFile(e: any, t: any, n: any, u: any): Promise<any>;
    workerPostMessage(e: any, t: any, n: any, u: any): Promise<any>;
    closeByIndex(e: any): Promise<void>;
    handler(e: any, t: any): Promise<any>;
    finished: boolean | undefined;
    delayTimes: number | undefined;
    cancel(): Promise<void>;
    canceled: boolean | undefined;
    paused: boolean | undefined;
    pause(): Promise<void>;
    continue(): Promise<void>;
    close(): Promise<void>;
}
declare const $t: Blob;
declare namespace Ht {
    function install(s: any): void;
    function install(s: any): void;
}
export { vt as ChunkFile, Mt as DefaultApiService, H as DraggingHelper, de as FileReadHelper, P as FileSizeHelper, D as FileType, j as FileTypeHelper, X as HashHelper, kt as HashWorkerScript, x as Layout, Ut as NaiveUpload, T as PreUploadChunkFileState, v as RGBAColor, N as RawFile, M as RunMode, R as Settings, A as SimpleGuid, C as UploadError, q as UploadHelper, $t as UploadWorkerScript, Ht as default };
