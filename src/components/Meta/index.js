import Head from 'next/head';

const Meta = ({ children, url, title, description, image }) => (
  <Head>
    <title>{title}</title>
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  </Head>
);

export default Meta;
