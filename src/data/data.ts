import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import CircleNotificationsSharpIcon from "@mui/icons-material/CircleNotificationsSharp";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import ArchiveIcon from "@mui/icons-material/Archive";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

export const selectOptions = [
  {
    productCode: "CONSUMER_LOAN",
    name: "სამომხმარებლო სესხი",
  },
  {
    productCode: "MORTGAGE_LOAN",
    name: "იპოთეკური სესხი",
  },
  {
    productCode: "SECURED_CONSUMER_LOAN",
    name: "უზრუნველყოფილი სამომხმარებლო სესხი",
  },
  {
    productCode: "MEGO_CARD",
    name: "მეგობარათი",
  },
  {
    productCode: "OVERDRAFT",
    name: "ოვერდრაფტი",
  },
];

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
