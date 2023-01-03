import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IFile } from "../types/File";
import { innerSum } from "../utils";

type FilesContextProps = {
  allFiles: IFile[];
  setAllFiles: (files: IFile[]) => void;
  selectedFiles: IFile[];
  toggleSelectedFile: (file: IFile) => void;
  totalFileSizes: number;
  totalSelectedFileSizes: number;
}

const FilesContext = createContext<FilesContextProps>({
  allFiles: [],
  setAllFiles: () => {},
  selectedFiles: [],
  toggleSelectedFile: () => {},
  totalFileSizes: 0,
  totalSelectedFileSizes: 0
});

type FilesContextProviderProps = {
  children: ReactNode;
}
const FilesContextProvider = ({ children }: FilesContextProviderProps) => {
  const [allFiles, setAllFiles] = useState<IFile[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<IFile[]>([]);

  const toggleSelectedFile = useCallback((file: IFile) => {
    setSelectedFiles(prev => {
      if (prev.includes(file)) {
        return prev.filter(f => f !== file);
      }
      return [...prev, file];
    });
  }, []);

  const getData = useCallback(async () => {
    try {
      const res = await fetch("https://static.uniify.io/public/test.json");
      const _data = await res.json();
      setAllFiles(_data);
    } catch (e) {}
  }, []);

  const totalFileSizes = useMemo(() => {
    return innerSum({ content: allFiles })
  }, [allFiles]);

  const totalSelectedFileSizes = useMemo(() => {
    return innerSum({ content: selectedFiles })
  }, [selectedFiles]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <FilesContext.Provider value={{
      allFiles,
      setAllFiles,
      selectedFiles,
      toggleSelectedFile,
      totalFileSizes,
      totalSelectedFileSizes
    }}>
      {children}
    </FilesContext.Provider>
  )
}

export const useFilesContext = () => {
  const context = useContext(FilesContext);
  if (context === undefined) {
    throw new Error("useFilesContext must be used inside FilesContext");
  }
  return context;
}

export default FilesContextProvider;