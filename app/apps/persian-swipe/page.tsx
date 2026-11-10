import PersianSwipeLanding from "./PersianSwipeLanding";
import StructuredData from "../../components/StructuredData";
import { appMetadata, getApp, productStructuredData } from "../../content/apps";
const app = getApp("persian-swipe");
export const metadata = appMetadata(app);
export default function Page() {
  return <><StructuredData data={productStructuredData(app)} /><PersianSwipeLanding /></>;
}
