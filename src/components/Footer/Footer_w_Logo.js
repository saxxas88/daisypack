import React from "react";

const FooterCol = ({ data }) => {
  return (
    data && (
      <div>
        <span className="footer-title">{data?.title_col}</span>
        {data?.links &&
          data?.links?.map((el) => (
            <a key={el?.title} href={el?.link} className="link link-hover">
              {el?.title}
            </a>
          ))}
      </div>
    )
  );
};

const FooterSocial = ({ data }) => {
  return (
    data &&
    data?.map((el) => (
      <a key={el?.name} href={el?.link} target="__blank" className="link link-hover">
        {el?.logo}
      </a>
    ))
  );
};
function Footer_w_Logo({ siteData, linkCol1, linkCol2, linkCol3, social }) {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
      {siteData && siteData?.logo && siteData?.logo}
        <p>
          {siteData && siteData?.name && siteData?.name}
          <br />
          {siteData && siteData?.info && siteData?.info}
        </p>
        <div>
          <div className="grid grid-flow-col gap-4">
            <FooterSocial data={social} />
           
          </div>
        </div>
      </div>

      <FooterCol data={linkCol1} />
      <FooterCol data={linkCol2} />
      <FooterCol data={linkCol3} />
    </footer>
  );
}

export default Footer_w_Logo;
