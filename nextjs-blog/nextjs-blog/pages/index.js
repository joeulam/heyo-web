import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title class="head">Heyo health</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome back!
        </h1>
      <div id="midblock">
        <div id="Loginblock">
          <div id="login">
            Login
          </div>
          <div id="subtext">
            Keep your finance in track
          </div>
        </div>
        <div>
          
        </div>
      </div>
        
      </main>

      <footer>
      </footer>

      <style jsx>{`
        .head{
          margin: auto;

        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
