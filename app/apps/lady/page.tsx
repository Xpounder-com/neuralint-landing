import AppProductPage from "../../components/AppProductPage";
import { appMetadata, getApp } from "../../content/apps";
const app = getApp("lady");
export const metadata = appMetadata(app);
export default function Page() { return <AppProductPage app={app} />; }
