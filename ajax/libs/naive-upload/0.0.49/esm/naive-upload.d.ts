declare class yt {
    constructor(e: any, t: any);
    index: any;
    blob: any;
    size: any;
}
declare class Lt {
    getFileTypeByExtension(e: any): Promise<any>;
    getFileTypeByMIME(e: any): Promise<any>;
    getFileTypeImageUrl(e: any): string;
    getUnknowFileTypeImageUrl(): string;
}
declare class J {
    static equalError(e: any, t: any, s: any): boolean;
    static getInstance(e: any, t: any): J;
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
    mouseMove: ((r: any) => void) | undefined;
    scroll: ((r: any) => void) | undefined;
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
declare class Ce {
    Reader: FileReader;
    readAsArrayBuffer(e: any): Promise<any>;
    close(): void;
}
declare let z: {
    new (): {};
    getSize(e: any, t?: number, s?: number): string;
};
declare var E: any;
declare class ee {
    static getByExtension(e: any): any;
    static getByMIME(e: any): any;
}
declare class oe {
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
declare const wt: Blob;
declare var X: any;
declare const Dt: import("vue").DefineComponent<{
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
}, (r: any, l: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, any, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("error" | "setOpenApi" | "beforeCheck" | "afterCheck" | "afterCheckAll" | "afterUpload" | "afterUploadAll" | "update:modelValue")[], "error" | "setOpenApi" | "beforeCheck" | "afterCheck" | "afterCheckAll" | "afterUpload" | "afterUploadAll" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
declare var K: any;
declare class $ {
    static convertFrom(e: any): $;
    constructor(e: any, t: any, s: any, o: any);
    r: any;
    g: any;
    b: any;
    a: any;
}
declare class re {
    constructor(e: any);
    file: any;
    size: any;
    objectURL: string | undefined;
}
declare var q: any;
declare let Y: {
    new (): {};
};
declare class H {
    static s4(): string;
    static new(): string;
}
declare class D extends Error {
    static consoleWriteWithIndex(t: any, s: any): void;
    static consoleWrite(t: any): void;
    constructor(t: any, s: any);
    innerError: any;
}
declare class le {
    static getInstance(e: any, t: boolean | undefined, s: any, o?: boolean): Promise<any>;
    constructor(e: any, t: any, s: any);
    debug: any;
    enableWorker: any;
    workerSupported: boolean;
    apiService: any;
    uploadFile(e: any, t: any): Promise<any>;
    uploadChunkFile(e: any, t: any, s: any, o: any): Promise<void>;
    useWorkerUploadFile(e: any, t: any): Promise<any>;
    useWorkerUploadChunkFile(e: any, t: any, s: any, o: any): Promise<any>;
    workerPostMessage(e: any, t: any, s: any, o: any): Promise<any>;
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
declare const Et: Blob;
declare namespace vt {
    function install(f: any): void;
    function install(f: any): void;
}
export { yt as ChunkFile, Lt as DefaultApiService, J as DraggingHelper, Ce as FileReadHelper, z as FileSizeHelper, E as FileType, ee as FileTypeHelper, oe as HashHelper, wt as HashWorkerScript, X as Layout, Dt as NaiveUpload, K as PreUploadChunkFileState, $ as RGBAColor, re as RawFile, q as RunMode, Y as Settings, H as SimpleGuid, D as UploadError, le as UploadHelper, Et as UploadWorkerScript, vt as default };
