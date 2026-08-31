import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Masterclass from "./pages/Masterclass";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import Disclosure from "./pages/Disclosure";
import EarningsDisclaimer from "./pages/EarningsDisclaimer";
import TermsOfService from "./pages/TermsOfService";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "masterclass", Component: Masterclass },
      { path: "contact", Component: Contact },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "cancellation-refund-policy", Component: CancellationRefundPolicy },
      { path: "disclosure", Component: Disclosure },
      { path: "earnings-disclaimer", Component: EarningsDisclaimer },
      { path: "terms-of-service", Component: TermsOfService },
    ],
  },
]);
