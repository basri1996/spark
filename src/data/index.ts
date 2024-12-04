import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import ArchiveIcon from "@mui/icons-material/Archive";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";



export const RiskOptions = [
  {
    id: "RISK_ASSESSMENT",
    name: "Risk Assessment",
  },
  {
    id: "CONSIDERED_FOR_APPROVAL",
    name: "Considered For Approval",
  },
  {
    id: "SENT_FOR_EVALUATION",
    name: "Sent For Eveluation",
  },
];

export const Currency = [
  {
    id: "USD",
    name: "USD",
  },
  {
    id: "GEL",
    name: "GEL",
  },
];
export const responseType = [
  {
    id: "1",
    label: "უპასუხა",
    icon: WifiCalling3Icon,
  },
  {
    id: "CLIENT_REJECTED_COMMUNICATION",
    label: "არ უპასუხა",
    icon: PhoneMissedIcon,
  },
];

export const responseTypeNext = [
  {
    id: "CLIENT_ACCEPTED_DEAL",
    label: "გაგრძელდეს განაცხადზე მუშაობა",
    icon: WifiCalling3Icon,
  },
  {
    id: "DEAL_DECLINED_BY_CLIENT",
    label: "არ გაგრძელდეს განაცხადზე მუშაობა",
    icon: PhoneMissedIcon,
  },
  {
    id: "COMMUNICATION_RESCHEDULED",
    label: "დაკავშირება მოხდეს",
    icon: PhoneMissedIcon,
  },
  {
    id: "CLIENT_REDIRECTED_TO_BRANCH",
    label: "განაცხადი ივსება ფილიალში",
    icon: PhoneMissedIcon,
  },
  {
    id: "CLIENT_FILLED_IN_BRANCH",
    label: "განაცხადი შევსებულია",
    icon: PhoneMissedIcon,
  },
];

export const ActionsType = [
  { name: "დარეკვა", id: "Call" },
  { name: "შეცვლა", id: "Modify" },
  { name: "სტატუსი", id: "Status" },
  { name: "ხელმოწერა", id: "Sign" },
  { name: "რისკი", id: "Risk" },
];

export const statusType = [
  {
    id: "ACTIVE",
    label: "Active",
    icon: CircleNotificationsSharpIcon,
  },
  {
    id: "ON_HOLD",
    label: "On Hold",
    icon: PhonePausedIcon,
  },
  {
    id: "ARCHIVED",
    label: "Archive",
    icon: ArchiveIcon,
  },
];

export const dealAcceptType = [
  {
    id: "SIGNIFY",
    label: "Signify",
    icon: HistoryEduIcon,
  },
  {
    id: "BRANCH",
    label: "Branch",
    icon: AccountBalanceIcon,
  },
];
export const subStatusUi = {
  TRYING_TO_COMMUNICATE: {
    color: "#3457D5",
    text: "დაკავშირება მოხდეს",
  },
  COMMUNICATION_RESCHEDULED: {
    text: "დაკავშირება მოხდეს",
    color: "#3457D5",
  },
  DECLINED_BY_CLIENT: {
    text: "არ სურს შევსება",
    color: "#3457D5",
  },
  REDIRECTED_TO_BRANCH: {
    text: "შესავსებია ფილიალში",
    color: "#3457D5",
  },
  CLIENT_FILLED_IN_BRANCH: {
    text: "შევსებულია ფილიალში",
    color: "#3457D5",
  },
  APPLICATION_TO_BE_FILLED: {
    text: "განაცხადი შესავსებია",
    color: "#3457D5",
  },
  APPLICATION_FILLED: {
    text: "განხილვაშია",
    color: "#3457D5",
  },
  LOAN_ACCEPTED: {
    text: "დამტკიცდა",
    color: "#006A4E",
  },
  LOAN_REJECTED: {
    text: "არ დამტკიცდა",
    color: "#9e1b32",
  },
  READY_TO_SIGN: {
    text: "ფილიალი",
    color: "#3457D5",
  },
  LOAN_GRANTED: {
    text: "გაიცა",
    color: "#006A4E",
  },
  LOAN_NOT_GRANTED: {
    text: "არ გაიცა",
    color: "#9e1b32",
  },
};

export const CommunicationMethods = [
  {
    id: "call",
    name: "ზარი",
  },
  {
    id: "chat_bbge",
    name: "ჩატი: bb.ge",
  },
  {
    id: "chat_internetBanking",
    name: "ინტერნეტ ბანკი",
  },
  {
    id: "chat_mobileBanking",
    name: "მობაილ ბანკი",
  },
  {
    id: "chat_facebook",
    name: "facebook chat",
  },
  {
    id: "email",
    name: "info@basisbank.ge",
  },
  {
    id: "facebook_comments",
    name: "Facebook კომენტარები",
  },
  {
    id: "other",
    name: "სხვა (კომენტარის ველი)",
  },
];

