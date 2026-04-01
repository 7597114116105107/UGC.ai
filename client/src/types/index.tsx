import type React from "react";

export interface UploadZoneProps {
    label: string;
    file: File | null;
    onclear: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}