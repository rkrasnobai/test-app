export interface TariffModel {
  additionalOptions: {};
  campaign: {};
  contractTerm: {
    downloadSpeed: {
      amount: string;
      content: {text: string},
    },
    uploadSpeed: {
      content: {text: string}
    }
  };
  cost: {
    effectiveCost: {
      amount: string
      caption: {text: string}
      content: {text: string}
      unit: string
    }
  };
  product: {
    id: string;
  };
  provider: {
    id: string;
    content: {text: string}
  };
  rank: string;
  remarks: Type[];
  requiresAvailabilityCheck: boolean;
  signup: {};
}

export interface Type {
  type: string;
}
