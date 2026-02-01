import Contact from "./Contact"

export default function Home() {
  return (
    <>
      {/* HERO section */}
      <section className="hero">
        <center><h1>Weboldal fejlesztés kedvező áron</h1></center>
       <center>
        <p>
            <br></br>
           <h2>React</h2> 
            <br></br>
            <h2>TypeScript</h2>
            <br></br>
            <h2>Vite</h2>
            <br></br>
           <h2>Vanilla CSS</h2> 
            <br></br>
            <h2>Node js</h2>
            <br></br>
            <h2>MSSQL
           </h2>
           <br></br>
            <h2>MySQL
           </h2>
            
        </p>
</center>
      
      </section>

      {/* Szolgáltatások section */}
      <section className="section">
        <center><h2>Szolgáltatások</h2></center>
        
        <div className="cards">
          <div className="card">
            <h3>Landing page</h3>
            <p>Modern, egyedi bemutatkozó oldalak vállalkozóknak.</p>
            <h1>150.000 Ft</h1>
          </div>


          <div className="card">
            <h3>Frontend </h3>
            <p>React,VanillaCSS,Vite,Typescript</p>
            <br></br>
            <h1>100.000 Ft</h1>
          </div>
          <div className="card">
            <h3>Karbantartás</h3>
            <p>Az elkészült szoftver vagy weboldal további updatelése,karbantartása meghatározott ideig, egyedi ár alapján.</p>
          </div>
          

           <div className="card">
            <h3>Backend </h3>
            <p>NodeJS, MSSQL, MySQL</p>
            <h1>100.000 Ft</h1>
          </div>

           <div className="card">
            <h3>Fullstack</h3>
            <p>Fullstack webfejlesztés</p>
            <p>Ár megegyezés szerint</p>
          </div>
          
           <div className="card">
            <h3>Egyedi szoftverfejlesztés </h3>
            <p>C#, Python</p>
            <p>Ár megegyezés szerint</p>
            
          </div>
          
        </div>
        
      </section>

      
      <Contact />
    </>
  )
}
