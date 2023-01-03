import { FileType, IFile } from "../types/File";
import File from "./File";
import React, { useCallback } from "react";

type DirectoryProps = {
  file: IFile;
  index?: number;
}
const Directory = ({ file, index }: DirectoryProps) => {
  const renderAction = useCallback((file: IFile, index: number) => {
    switch (file.type) {
      case FileType.DIRECTORY:
        return <Directory key={index} file={file} index={index}/>
      case FileType.FILE:
        return <File key={index} file={file} index={index}/>
      default:
        return null;
    }
  }, []);
  if (!file.filename) {
    return (
      <ul>
        {file.content?.map((f, index) => renderAction(f, index))}
      </ul>
    )
  }
  return (
    <ol>
      {(index || 0) + 1}. {file.filename}
      <ul>
        {file.content?.map((f, index) => renderAction(f, index))}
      </ul>
    </ol>
  )
}

export default Directory;