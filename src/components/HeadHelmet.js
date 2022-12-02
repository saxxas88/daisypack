import React from "react";
import { Helmet } from "react-helmet-async";
import favicon from '../../public/favicon.ico'
export default function HeadHelmet({
  title,
  description,
  hasFacebook,
  hasTwitter,
  name,
  type
}) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title || "Site"}</title>
      <link rel="icon" type="image/x-icon" href={favicon} />
      <meta
        name="description"
        content={description || "This is a description"}
      />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      {hasFacebook && title && description && type && (
        <>
          <meta property="og:type" content={type} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
        </>
      )}
      {/* End Facebook tags */}
      {/* Twitter tags */}
      {hasTwitter && title && description && type && name && (
        <>
          <meta name="twitter:creator" content={name} />
          <meta name="twitter:card" content={type} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </>
      )}
      {/* End Twitter tags */}
   
    </Helmet>
  );
}
