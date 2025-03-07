export default st;
declare class ee {
    constructor(e: any, t: any);
    index: any;
    blob: any;
    size: any;
}
declare class tt {
    getFileTypeByExtension(e: any): Promise<any>;
    getFileTypeByMIME(e: any): Promise<any>;
    getFileTypeImageUrl(e: any): string;
    getUnknowFileTypeImageUrl(): string;
}
declare class O {
    static equalError(e: any, t: any, s: any): boolean;
    static getInstance(e: any, t: any): O;
    moving(e: any, t: any): void;
    currentX: any;
    currentY: any;
    transX: any;
    transY: any;
    lastTransX: any;
    lastTransY: any;
    checkRestore(): boolean;
    start(e: any, t: any, s: any): void;
    flag: boolean | undefined;
    mouseMove: ((u: any) => void) | undefined;
    scroll: ((u: any) => void) | undefined;
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
declare class X {
    Reader: FileReader;
    readAsArrayBuffer(e: any): Promise<any>;
    close(): void;
}
declare let U: {
    new (): {};
    getSize(e: any, t?: number, s?: number): string;
};
declare var k: any;
declare class N {
    static getByExtension(e: any): any;
    static getByMIME(e: any): any;
}
declare class V {
    static getInstance(e?: number, t?: boolean, s?: boolean): Promise<any>;
    constructor(e: any, t: any);
    debug: any;
    enableWorker: any;
    workerSupported: boolean;
    checkFile(e: any, t: any, s: any): Promise<any>;
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
declare const te: Blob;
declare var T: any;
declare const ne: i.DefineComponent<{
    modelValue: {
        default: () => never[];
    };
    settings: {
        default: () => any;
    };
    apiService: null;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, (u: any, c: any) => i.VNode<i.RendererNode, i.RendererElement, {
    [key: string]: any;
}>, any, {}, {}, i.ComponentOptionsMixin, i.ComponentOptionsMixin, ("error" | "setOpenApi" | "beforeCheck" | "afterCheck" | "afterCheckAll" | "afterUpload" | "afterUploadAll" | "update:modelValue")[], "error" | "setOpenApi" | "beforeCheck" | "afterCheck" | "afterCheckAll" | "afterUpload" | "afterUploadAll" | "update:modelValue", i.VNodeProps & i.AllowedComponentProps & i.ComponentCustomProps, Readonly<i.ExtractPropTypes<{
    modelValue: {
        default: () => never[];
    };
    settings: {
        default: () => any;
    };
    apiService: null;
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onError?: ((...args: any[]) => any) | undefined;
    onSetOpenApi?: ((...args: any[]) => any) | undefined;
    onBeforeCheck?: ((...args: any[]) => any) | undefined;
    onAfterCheck?: ((...args: any[]) => any) | undefined;
    onAfterCheckAll?: ((...args: any[]) => any) | undefined;
    onAfterUpload?: ((...args: any[]) => any) | undefined;
    onAfterUploadAll?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    settings: any;
    modelValue: never[];
}>;
declare var M: any;
declare class A {
    static convertFrom(e: any): A;
    constructor(e: any, t: any, s: any, l: any);
    r: any;
    g: any;
    b: any;
    a: any;
}
declare class j {
    constructor(e: any);
    file: any;
    size: any;
    objectURL: string | undefined;
}
declare var R: any;
declare let I: {
    new (): {};
};
declare class v {
    static s4(): string;
    static new(): string;
}
declare class D extends Error {
    static consoleWriteWithIndex(t: any, s: any): void;
    static consoleWrite(t: any): void;
    constructor(t: any, s: any);
    innerError: any;
}
declare class Q {
    static getInstance(e: any, t: boolean | undefined, s: any, l?: boolean): Promise<any>;
    constructor(e: any, t: any, s: any);
    debug: any;
    enableWorker: any;
    workerSupported: boolean;
    apiService: any;
    uploadFile(e: any, t: any): Promise<any>;
    uploadChunkFile(e: any, t: any, s: any, l: any): Promise<void>;
    useWorkerUploadFile(e: any, t: any): Promise<any>;
    useWorkerUploadChunkFile(e: any, t: any, s: any, l: any): Promise<any>;
    workerPostMessage(e: any, t: any, s: any, l: any): Promise<any>;
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
declare const se: Blob;
declare namespace st {
    function install(f: any): void;
    function install(f: any): void;
}
import i = require("vue");
export { ee as ChunkFile, tt as DefaultApiService, O as DraggingHelper, X as FileReadHelper, U as FileSizeHelper, k as FileType, N as FileTypeHelper, V as HashHelper, te as HashWorkerScript, T as Layout, ne as NaiveUpload, M as PreUploadChunkFileState, A as RGBAColor, j as RawFile, R as RunMode, I as Settings, v as SimpleGuid, D as UploadError, Q as UploadHelper, se as UploadWorkerScript };
