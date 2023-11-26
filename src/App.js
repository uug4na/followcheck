import Header from "./components/header";
import "./index.css";
import { useEffect } from "react";
import insta from "./insta.svg";
function App() {
  useEffect(() => {
    document.title = "FollowCheck";
  }, []);
  return (
    <div>
      <Header />
      <div className="flex flex-col bg-slate-900 h-screen">
        <div className="flex flex-col items-center">
          <div className="text-white font-mc tracking-widest text-lg mt-24">
            Enter your username
          </div>
          <div className="flex items-center infoClass rounded-md">
            <div className="w-6 h-6 mr-2 ml-2">
              <img src={insta} alt="Instagram Logo" />
            </div>
            <input
              placeholder="username"
              type="text"
              id="large-input"
              className="block p-4 w-[55vh] placeholder-styles text-white font-mc inputClass outline-none border-none focus:border-none"
            />
          </div>
          <div className="mt-6">
            <div className="border-[3px] rounded-md w-[61vh] border-6 p-4 py-7 border-10 infoClass text-white opacity-80">
              <div>
                Та өөрийн “Instagram Username”-ийн оруулан таныг дагаж байгаа
                болон буцаан дагаагүй хүмүүсийг ердөө 1K төгрөгөөр мэдэж болох
                юм.
              </div>
              <li>
                Таны хаяг нь “Public” тохиргоотой байх хэрэгтэйг анхааруулъя.
              </li>
              <li>
                Та манай үйлчилгээг ашигласнаар таны хаягт ямар нэгэн асуудал,
                аюул үүсэхгүй болно.
              </li>
              <br />
              <li>
                Манай үйлчилгээг сонгон үйлчлүүлж байгаа танд баярлалаа :)
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
