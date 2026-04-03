import type React from "react";

export interface UploadZoneProps {
    label: string;
    file: File | null;
    onclear: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface User {
    id?: string;
    name?: string;
    email?: string;
}

export interface Project {
    id: string;
    name?: string;
    usrId?: string;
    user?: User;
    productName?: string;
    productDescription?: string;
    userPrompt?: string; 
    aspectRatio?: string;
    generatedImage?: string;
    generatedVideo?: string;
    isGenerating: boolean;
    isPublished: boolean;
    error?: string;
    createdAt: Date | string;
    updateAt?: Date | string;
    uploadedImages: string[];
    
}