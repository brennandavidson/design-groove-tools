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
  // Add more clients here:
  // "client-slug": {
  //   name: "Client Name",
  //   formId: "formIdFromLeadConnector",
  // },
};
