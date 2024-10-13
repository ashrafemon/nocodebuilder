export type WidgetType = {
    id: string;
    type: string;
    attributes: { [key: string]: string };
    elements?: WidgetType[];
};
