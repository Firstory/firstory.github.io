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
  removeWaterMark: free | premium | enterprise,
  multiMember: free | premium | enterprise,
  paywall: premium | enterprise | developing,
  sponsorship: premium | enterprise | developing,
  advancedAnalytics: premium | enterprise | developing,
  topicPublish: premium | enterprise | developing,
  advancedSocialShare: premium | enterprise | developing,
  multiShow: enterprise | developing,
};

export const plans = {
  FREE: 'FREE',
  PREMIUM: 'PREMIUM',
  ENTERPRISE: 'ENTERPRISE',
};
