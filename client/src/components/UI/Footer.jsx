import { Layout } from "antd";
const Footer = () => {
  const { Footer } = Layout;
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: "10px 50px",
      }}
    >
      ETMS©{year}
    </Footer>
  );
};

export default Footer;
