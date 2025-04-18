import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";

let nextId = 0;

function App() {
  const notify = () => toast("Wow so easy!");
  const [inputData, setInputData] = useState("");
  let [chores, setChores]: any = useState([]);

  const onClickSubmit = () => {
    if (inputData !== "") {
      setChores([
        ...chores,
        { id: nextId++, chore: inputData, isClicked: false },
      ]);
      setInputData("");
    } else {
      notify();
    }
  };

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      onClickSubmit();
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-blue-200 flex justify-center items-center">
        <div className="">
          <div className="grid grid-cols-5 gap-2 py-2">
            <input
              type="text"
              name="todoItem"
              value={inputData}
              onKeyDown={onEnterPress}
              onChange={(e) => setInputData(e.target.value)}
              className="col-span-4 p-3 h-full w-full rounded-xl not-focus:outline not-focus:outline-green-200 "
              placeholder="Enter your ToDo's"
            />
            <button
              className="bg-blue-500 text-white font-bold"
              onClick={onClickSubmit}
            >
              Submit
            </button>
          </div>
          <div className="bg-black/20 w-[50vw] h-[50vh] rounded-xl overflow-auto">
            <h1 className="text-gray-100 font-bold text-4xl text-center">
              TODO List
            </h1>
            {chores.map((item) => (
              <div className="flex items-center p-2 rounded-2xl justify-between bg-white/50 text-xl my-4 mx-4 wrap-anywhere">
                <div className={`${item.isClicked && "line-through"} w-[50%]`}>
                  {item.chore}
                </div>
                <span>{item.isClicked ? "1" : "0"}</span>
                <div className="flex gap-4">
                  <button
                    className="bg-[#02b505]"
                    onClick={() => {
                      item.isClicked = true;
                    }}
                  >
                    <img src="./tick.svg" width={40} alt="Tick Icon" />
                  </button>
                  <button
                    className="bg-[#fc030f]"
                    onClick={() =>
                      setChores(chores.filter((a) => a.id !== item.id))
                    }
                  >
                    <img
                      className="m-2"
                      src="./x.svg"
                      width={26}
                      alt="Cross Icon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;
