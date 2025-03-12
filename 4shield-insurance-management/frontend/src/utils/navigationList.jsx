import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ArticleIcon from "@mui/icons-material/Article"
import PublishIcon from "@mui/icons-material/Publish"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import PaymentsIcon from "@mui/icons-material/Payments"

const navigationList = [
  {
    title: "Register for insurance",
    path: "insurance",
    icon: <BusinessCenterIcon />,
    children: [
      {
        title: "Asset information",
        path: "asset-info"
      },
      {
        title: "Personal information",
        path: "personal-info"
      },
      {
        title: "Payment information",
        path: "payment-info"
      },
      {
        title: "Insurance list",
        path: "insurance-list"
      }
    ]
  },
  {
    title: "Personal contract",
    path: "personal-contract",
    icon: <ArticleIcon />,
    children: [
      {
        title: "List of contract",
        path: "contract-list"
      },
      {
        title: "Contract details",
        path: "contract-detail"
      }
    ]
  },
  {
    title: "Submit a claim",
    path: "claim",
    icon: <PublishIcon />,
    children: [
      {
        title: "Insurance contract",
        path: "insurance-contract"
      },
      {
        title: "Claim information",
        path: "claim-info"
      },
      {
        title: "List of claims",
        path: "claim-list"
      }
    ]
  },
  {
    title: "Personal profile",
    path: "personal-profile",
    icon: <Diversity3Icon />,
    children: [
      {
        title: "Profile information",
        path: "profile-info"
      },
      {
        title: "Security & Login settings",
        path: "security-setting"
      }
    ]
  },
  {
    title: "Payment pay",
    path: "payment",
    icon: <PaymentsIcon />,
    children: [
      {
        title: "Payment pay",
        path: "asset-info"
      },
      {
        title: "Payment history",
        path: "personal-info"
      }
    ]
  }
]

export default navigationList
