export interface ITemplate {
    id?: string;
    type: string;
    subsections: ISubsection[];
}

export interface IFieldTemplate {
    label: string;
    max?: number;
    size: string;
    placeholder: string;
    html: string;
}

export interface IField {
    type: string;
    template: IFieldTemplate;
    show: any;
    id: string;
    required?: boolean;
    list: string;
}

export interface ISubsection {
    id: string;
    type: string;
    label: string;
    show: string;
    fields: IField[];    
}