export enum FileType {
  DIRECTORY = "directory",
  FILE = "file"
}
export interface IFile {
  filename?: string;
  type: FileType,
  content: IFile[];
  kb_size?: number;
}