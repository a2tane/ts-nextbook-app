import { useCallback, useEffect } from "@storybook/addons";
import { CloudUploadIcon } from "components/atoms/IconButton";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const isDragEvt = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer;
};

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null;
};

/**
 * イベントから入力されたファイルを取得
 * @param e DragEventかChangeEvent
 * @returns Fileの配列
 */
const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent): File[] => {
  if (isDragEvt(e)) {
    return Array.from(e.dataTransfer.files);
  } else if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files);
  }

  return [];
};

// ファイルのContent-Type
type FileType =
  | "image/png"
  | "image/jpeg"
  | "image/jpg"
  | "image/gif"
  | "video/mp4"
  | "video/quicktime"
  | "application/pdf";

interface DropzoneProps {
  value?: File[];
  name?: string;
  acceptedFileTypes?: FileType[];
  width?: number | string;
  height?: number | string;
  hasError?: boolean;
  onDrop?: (files: File[]) => void;
  onChange?: (files: File[]) => void;
}

type DropzoneRootProps = {
  isFocused?: boolean;
  hasError?: boolean;
  width: string | number;
  height: string | number;
};

const DropzoneRoot = styled.div<DropzoneRootProps>`
  border: 1px dashed
    ${({ theme, isFocused, hasError }) => {
      if (hasError) {
        return theme.colors.dangeer;
      } else if (isFocused) {
        return theme.colors.black;
      } else {
        return theme.colors.border;
      }
    }};
    border-radius: 8px;
    cursor: pointer;
    width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)}
    height: ${({ height }) =>
      typeof height === "number" ? `${height}px` : height}
`;

const DropzoneContent = styled.div<{
  width: string | number;
  height: string | number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}px` : height};
`;

const DropzoneInputFile = styled.input`
  display: none;
`;

//ドロップゾーン
const MyDropzone = (props: DropzoneProps) => {
  const {
    onDrop,
    onChange,
    value = [],
    name,
    acceptedFileTypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"],
    hasError,
    width = "100%",
    height = "200px",
  } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType)
      )
    );

    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);

    const files = value.concat(
      getFilesFromEvent(e).filter((f) =>
        acceptedFileTypes.includes(f.type as FileType)
      )
    );

    if (files.length == 0) {
      return window.alert(
        `次のファイルフォーマットは指定できません${acceptedFileTypes.join(",")}`
      );
    }
    onDrop && onDrop(files);
    onChange && onChange(files);
  };

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(false);
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFocused(true);
  }, []);

  const handleClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (inputRef.current && value && value.length == 0) {
      inputRef.current.value = "";
    }
  }, [value]);

  return (
    <>
      <DropzoneRoot
        ref={rootRef}
        isFocused={isFocused}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
        onClick={handleClick}
        hasError={hasError}
        width={width}
        height={height}
        data-testid="dropzone"
      >
        {/**dummy input */}
        <DropzoneInputFile
          ref={inputRef}
          type="file"
          name={name}
          accept={acceptedFileTypes.join(",")}
          onChange={handleChange}
          multiple
        />
        <DropzoneContent width={width} height={height}>
          <CloudUploadIcon size={24}></CloudUploadIcon>
          <span style={{ textAlign: "center" }}>デバイスからアップロード</span>
        </DropzoneContent>
      </DropzoneRoot>
    </>
  );
};

MyDropzone.defaultProps = {
  acceptedFileTypes: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
  hasError: false,
};

export default MyDropzone;
