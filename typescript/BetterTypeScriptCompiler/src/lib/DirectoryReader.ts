import * as fs from "fs";

export interface DirectoryReader {
    readDirectoriesFrom(directory: string): string[];
}

export class DirectoryReaderNode implements DirectoryReader {
    public readDirectoriesFrom(directory: string): string[] {
        const files = fs.readdirSync(directory, { encoding: "utf8" });
        const subDirectories: string[] = [];
        for (const file of files) {
            const absFile = directory + "/" + file;
            const stat = fs.statSync(absFile);
            if (stat.isDirectory()) {
                subDirectories.push(absFile);
            }
        }
        return subDirectories;
    }
}
