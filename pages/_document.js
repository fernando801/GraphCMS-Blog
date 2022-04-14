import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=Poppins' rel='stylesheet'/>
        </Head>
        <body className='font-sans '>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
