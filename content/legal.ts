// DRAFT TEMPLATES. Not legal advice. They describe how Klin is designed to work and must be checked against the shipped
// app and reviewed by a qualified lawyer (NDPA and GDPR) before publication. Text in [square brackets] must be filled in.

export type LegalSection = { id: string; title: string; body: string[]; list?: string[] };

export const privacy: LegalSection[] = [
  {
    id: 'who',
    title: 'Who we are',
    body: ['Klin is provided by [legal entity name], [registered address] (“we”, “us”). We decide why and how your personal data is used. Contact: [privacy contact email].'],
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: ['We collect what we need to run a private space for two people, and no more.'],
    list: [
      'Account details: your first name, email address, date of birth (to confirm you are 18 or over), time zone and, if you add one, a profile photo.',
      'Relationship details: what you call your partner, your relationship status and start date if you choose to add them, and who is in your space.',
      'What you create: messages, photos, videos and voice notes, memories, calendar events, daily answers, mood entries, diary entries, letters, lists, places, songs and bucket-list items.',
      'Calls: that a call took place, between whom, when and for how long. Call audio and video pass through our calling provider and are not recorded or stored by us.',
      'Your device: a push-notification token, device type, operating system and app version.',
      'Purchases: whether you have an active Klin Plus subscription. Payment details stay with Apple or Google; we never see your card.',
      'Waitlist: the email address you give us if you ask to hear when Klin opens. We use it to send one launch email, and nothing else.',
      'Support: what you send us when you contact support or report something.',
      'Analytics and error reports, if you allow analytics (see below). These contain events such as screens visited, not the content of your messages or entries.',
    ],
  },
  {
    id: 'use',
    title: 'Why we use it',
    body: ['We use your data to provide Klin to you and your partner, keep it secure, send the notifications you ask for, handle subscriptions, answer support requests and meet legal obligations. [Legal bases to be confirmed by counsel, for example contract, legitimate interests, consent and legal obligation.] We do not sell your data and we do not use it for advertising.'],
  },
  {
    id: 'who-sees',
    title: 'Who can see what',
    body: ['Only the two people in a space can open its shared messages, photos, memories, calendar, journals and letters.'],
    list: [
      'Private diary entries, private mood notes and private calendar events are visible only to the person who wrote them.',
      'Your partner sees a daily answer only after you have answered, unless you choose to show it sooner.',
      'A letter is visible to the recipient only once it has been delivered.',
      'Klin staff use admin tools that show account and relationship details such as status and plan. They do not show message, diary, mood-note or letter content. If you report something, we see only what you choose to attach to the report.',
    ],
  },
  {
    id: 'encryption',
    title: 'How we protect it',
    body: [
      'Your data is encrypted in transit and at rest. Access to each space is restricted by database rules so one couple cannot reach another’s data, and media is served through short-lived private links.',
      'Klin is not end-to-end encrypted. That means our servers can process your content in order to run the app. If this changes we will say so here and in the app.',
    ],
  },
  {
    id: 'assistant',
    title: 'The assistant',
    body: [
      'The assistant is optional and you can turn it off in Privacy settings. It starts with no access to your messages, diary or mood notes. It sees only what you type to it and what you explicitly choose to attach, and the app shows you what will be sent before you send it.',
      'Your request is sent through our servers to our AI provider, [AI provider], so it can reply. [Provider data-use terms to be confirmed, including whether content is used for training and how long it is kept.] Your conversations with the assistant are private to you and you can delete them at any time. The assistant is not a therapist and does not diagnose anything. If a conversation suggests you are in distress, it will point you to support.',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics and cookies',
    body: [
      'On this website we use analytics only if you say yes in the banner. We use PostHog, and we do not use advertising cookies or trackers. You can change your choice by clearing this site’s stored data in your browser.',
      'In the app, we collect product analytics only with your consent, and we use error monitoring (Sentry) to fix crashes. Neither includes the content of your messages or entries.',
    ],
  },
  {
    id: 'providers',
    title: 'Who we share data with',
    body: ['We use service providers (processors) to run Klin. They process data only on our instructions.'],
    list: [
      'Supabase: database, file storage and sign-in. [Region: to be confirmed.]',
      'LiveKit: voice and video calls.',
      'OpenAI: the assistant, only when you use it.',
      'RevenueCat, Apple and Google: subscriptions and payments.',
      'Expo: push notifications.',
      'Sentry: error monitoring. PostHog: analytics, with consent.',
      'Vercel: website hosting.',
      '[Email provider]: account and security emails.',
    ],
  },
  {
    id: 'transfers',
    title: 'Transfers outside your country',
    body: ['Some providers process data outside Nigeria and the European Economic Area. [Transfer safeguards, for example standard contractual clauses and NDPA transfer requirements, to be completed with counsel.]'],
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: ['We keep your data while your account is open.'],
    list: [
      'Deleted messages and entries are removed from the app straight away and purged from our systems within 30 days.',
      'If you leave a space, shared content stays read-only for 30 days so you can export it, then it is deleted. [To be confirmed.]',
      'If you delete your account there is a 14 day period to change your mind, after which your personal data is deleted.',
      'Waitlist email addresses are deleted after the launch email has been sent, or sooner if you ask us to.',
      'Notifications are kept for 90 days, call records for 12 months, and support tickets for 24 months after they close.',
      'Records of administrative actions are kept for longer for accountability and contain no message content.',
    ],
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: [
      'Under the Nigeria Data Protection Act and, where it applies, the GDPR, you can ask to access your data, correct it, delete it, export it, restrict or object to how we use it, and withdraw consent at any time. Most of this you can do in the app (Profile, then Account). For anything else, contact [privacy contact email].',
      'You can complain to the Nigeria Data Protection Commission, or to your local data protection authority if you are in the EEA or UK.',
    ],
  },
  {
    id: 'age',
    title: 'Age',
    body: ['Klin is for people aged 18 and over. We ask for your date of birth when you sign up and do not create accounts for anyone younger.'],
  },
  {
    id: 'changes',
    title: 'Changes',
    body: ['If we change this policy in a way that matters, we will tell you in the app before it takes effect. The date at the top shows when it was last updated.'],
  },
];

export const terms: LegalSection[] = [
  {
    id: 'using',
    title: 'Using Klin',
    body: ['Klin is a private app for two people. By creating an account you agree to these terms and to our Privacy Policy. You must be 18 or over and able to enter into a binding agreement.'],
  },
  {
    id: 'account',
    title: 'Your account',
    body: ['Keep your sign-in details safe. You are responsible for what happens under your account. Tell us if you think someone else has got into it.'],
  },
  {
    id: 'space',
    title: 'Your space',
    body: ['A space has exactly two members, and each person can be in one active space at a time. Joining needs both people to agree. Either of you can leave at any time. We will show you what happens to shared content before you confirm.'],
  },
  {
    id: 'content',
    title: 'What you share',
    body: ['What you write and upload stays yours. You give us permission to store it, process it and show it to your partner as needed to run Klin, and nothing more. Only share things you have the right to share.'],
  },
  {
    id: 'rules',
    title: 'What is not allowed',
    body: ['Please do not use Klin to harass, threaten, stalk or monitor another person, to share illegal content or content involving anyone under 18, to impersonate someone, or to attack or misuse the service. You can report content in the app. We may suspend accounts that break these rules.'],
  },
  {
    id: 'assistant',
    title: 'The assistant',
    body: ['The assistant offers suggestions and is not a substitute for professional advice. It is not a therapist and does not diagnose. It can be wrong. If you are in danger or need urgent help, contact local emergency services.'],
  },
  {
    id: 'plus',
    title: 'Klin Plus',
    body: [
      'Klin Plus is an optional subscription bought through the App Store or Google Play. Price, billing period and any free trial are shown before you confirm, and nothing is charged without your confirmation. It renews automatically until you cancel in your store account. If either partner subscribes, Plus covers both members of the space for as long as the subscription is active. [Refund and trial terms to be completed.]',
      'If a subscription ends, nothing you saved is deleted. Features that need Plus stop being available for new content.',
    ],
  },
  {
    id: 'availability',
    title: 'Availability and changes',
    body: ['We work to keep Klin running but cannot promise it will always be available or error free. We may change or stop features, and we will give notice of important changes.'],
  },
  {
    id: 'ending',
    title: 'Ending your account',
    body: ['You can delete your account in the app at any time. We may suspend or close an account that breaks these terms, and we will tell you why unless the law says we cannot.'],
  },
  {
    id: 'liability',
    title: 'Liability and governing law',
    body: ['[Limitation of liability, disclaimers and governing law to be drafted by counsel. Nothing here limits rights you have under law that cannot be excluded.]'],
  },
  {
    id: 'contact',
    title: 'Contact',
    body: ['[Legal entity name], [address], [contact email].'],
  },
];
