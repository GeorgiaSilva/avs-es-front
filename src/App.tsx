import Header from "./section/header"
import Footer from "./section/header copy"
import dog from './assets/undraw_dog_jfxm 1.png'

function App() {


  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-[#fef4e6] ">
        <Header />
        <div className="flex flex-1  pt-16 justify-center align-center content-center ">
          <div className="  px-8  pb-8 left-0  flex-col justify-end items-start gap-[32px] ">
            <div className="self-stretch text-[#2f2e41] text-[64px] font-bold font-['Be Vietnam'] uppercase">Carinho e cuidado</div>
            <div className="self-stretch text-[#5a5773] text-[32px] font-semibold font-['Be Vietnam'] capitalize ">para todos os membros da sua família animal</div>

            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                <button className=" px-6 py-2 bg-[#f08c00] border-4 text-3xl text-white rounded-xl">Entrar</button>
                <button className=" px-6 py-2 bg-[#f08c00] text-3xl rounded-xl text-white">Cadastrar</button>
                
            </div>            
          </div>
          <img src={dog} alt="" className="h-80" />
        </div>

      <Footer />
    </div>
    </>
  )
}

export default App
