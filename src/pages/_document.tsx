import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="OneDrive Vercel Index" />
          <link rel="icon" href="/favicon.ico" />
          
          
          <style>
body{background-image:url(https://e5.lizonglin.site/api/raw/?path=/%E4%B8%89%E5%B9%B4%E6%A8%A1%E6%8B%9F/%E9%BB%91%E6%96%99/%E7%A7%83%E5%B4%BD%E4%B8%8D%E6%98%AF%E5%9D%8F%E5%A5%B3%E4%BA%BA/%E7%A7%83%E5%B4%BD.jpg&odpt=2899ace7b972b6807a53e70a58f282c41d7b689cbce5e1b2adb1772c904a3b08);background-repeat:no-repeat;background-position:center}

 </style>
          
          
          
          
          <link rel="preconnect" href="https://fonts.loli.net" />
          <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
