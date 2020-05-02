// Type definitions for non-npm package vscode-gradle 2.7
// Project: https://github.com/badsyntax/vscode-gradle
// Definitions by: Richard Willis <https://github.com/badsyntax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

import * as jspb from 'google-protobuf';

export class Output extends jspb.Message {
    getMessage(): string;
    setMessage(value: string): void;

    getOutputType(): Output.OutputTypeMap[keyof Output.OutputTypeMap];
    setOutputType(value: Output.OutputTypeMap[keyof Output.OutputTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> };
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
    interface AsObject {
        message: string;
        outputType: OutputTypeMap[keyof OutputTypeMap];
    }

    interface OutputTypeMap {
        STDERR: 0;
        STDOUT: 1;
    }

    const OutputType: OutputTypeMap;
}

export function runTask(
    projectFolder: string,
    taskName: string,
    args?: ReadonlyArray<string>,
    onOutput?: (output: Output) => void,
): Promise<void>;
