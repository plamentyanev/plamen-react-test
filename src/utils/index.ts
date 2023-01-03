import { IFile } from "../types/File";

export const innerSum = (file: Partial<IFile>) => {
  let sum = file.kb_size ?? 0;
  if (file.content?.length) {
    for (const childFile of file.content) {
      sum += innerSum(childFile);
    }
  }
  return sum;
}