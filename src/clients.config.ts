export interface ClientConfig {
  name: string;
  formId: string;
  formHeight?: number;
}

export const clients: Record<string, ClientConfig> = {
  "ash-cooling": {
    name: "Ash Cooling",
    formId: "blsD0iPAJz6ZicA7KknF",
    formHeight: 627,
  },
  "top-tech-air": {
    name: "Top Tech Air",
    formId: "0wLecluTpeB9tCCvZlqq",
    formHeight: 698,
  },
};
