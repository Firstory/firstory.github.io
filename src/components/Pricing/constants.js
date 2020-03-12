export const free = 1;
export const premium = 2;
export const enterprise = 4;
export const developing = 8;

export const planBits = {
  FREE: 1,
  PREMIUM: 2,
  ENTERPRISE: 4,
};

export const featureList = {
  basicAnalytics: free | premium | enterprise,
  appRecord: free | premium | enterprise,
  personalSite: free | premium | enterprise,
  embeddedPlayer: free | premium | enterprise,
  scheduling: free | premium | enterprise,
  customUrl: free | premium | enterprise,
  removeWaterMark: premium | enterprise,
  advancedAnalytics: premium | enterprise | developing,
  topicPublish: premium | enterprise | developing,
  advancedSocialShare: premium | enterprise | developing,
  paywall: premium | enterprise | developing,
  sponsorship: premium | enterprise | developing,
  multiMember: enterprise | developing,
  multiShow: enterprise | developing,
};

export const plans = {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  ENTERPRISE: 'ENTERPRISE',
};
