import './inf-Amei.css'

function Ameiinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
  function infTentativa() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarTentativa(obj);
    })
  })
  .catch()
  }
  function mostrarTentativa(partidas) {
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Romance[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[4].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[4].capa);
      document.getElementById('Romance-capaa4').append(capa);

      document.getElementById('Romance-tituloo4').append(tituloo);
      document.getElementById('Romance-Descricao4').append(descricaoo1);
      document.getElementById('Romance-autor4').append(autoor);
      document.getElementById('Romance-ano4').append(anoor);
      document.getElementById('Romance-licenca4').append(licenca);
      document.getElementById('Romance-tipo4').append(tipoo);
      document.getElementById('Romance-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa4' className='capa1'>


              <div id='Romance-titulo4' className='titulo1'>
                <b id='Romance-tituloo4'>TITULO :</b><br /> 
                <b id='Romance-autor4'>AUTOR :</b><br />
                <b id='Romance-ano4'>ANO :</b><br />
                <b id='Romance-licenca4'>LICENÇA :</b><br />
                <b id='Romance-tipo4'>TIPO :</b><br /><br />
                <b id='Romance-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1G7C0JsPvQCY0-BDIDHAXNx1D44xz6JD-/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Romance-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo4'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Ameiinf;

    




   