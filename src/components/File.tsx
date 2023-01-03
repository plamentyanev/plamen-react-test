import { IFile } from "../types/File";
import { useFilesContext } from "../contexts/FilesContext";

type FileProps = {
  file: IFile;
  index?: number;
}
const File = ({ file, index }: FileProps) => {
  const {
    selectedFiles,
    toggleSelectedFile
  } = useFilesContext();
  return (
    <ol>
      {(index || 0) + 1}.
      <input
        type="checkbox"
        className="mx-2"
        checked={selectedFiles.includes(file)}
        onClick={() => toggleSelectedFile(file)}
      />
      {file.filename}
    </ol>
  )
}

export default File;