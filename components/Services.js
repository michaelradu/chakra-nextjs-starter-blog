import EcommerceService from "./EcommerceService";
import PaginaWebService from "./WebPageService";
import UXUI from "./UXUI";

export default function CollapseEx() {
  return (
    <>
      <h2 className="services_title">Services</h2>
      <div className="services">
        <EcommerceService />
        <PaginaWebService />
        <UXUI />
      </div>
    </>
  );
}
