import React, { useEffect, useState } from "react";
import { FileType, IFile } from "../types/File";
import Directory from "./Directory";
import { useFilesContext } from "../contexts/FilesContext";

const Main = () => {
  const { allFiles, totalFileSizes, totalSelectedFileSizes } = useFilesContext();
  const [data, setData] = useState<IFile>({
    type: FileType.DIRECTORY,
    content: []
  });
  useEffect(() => {
    setData(prev => ({
      ...prev,
      content: allFiles
    }))
  }, [allFiles])
  return (
    <div id="main-app">
      <Directory file={data}/>
      <h3 className="ml-4 mt-4">
        <b>Total size: {totalFileSizes}</b>
      </h3>
      <h3 className="ml-4 mt-4">
        <b>Total size of selected: {totalSelectedFileSizes}</b>
      </h3>
    </div>
  );
}

export default Main;