import React from "react";
import Cube from "./components/cube";
import Cubex from "./components/cubex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { faShopLock } from "@fortawesome/free-solid-svg-icons";
import Pagination from './components/pagination';



function App() {
  return (
    <div className="p-6 bg-[#11141d] w-screen min-h-screen h-full">
      <div className="flex  justify-around">
        <div className="flex justify-center flex-wrap gap-10 py-4 ">
          <Cube />
          <Cube />
          <Cube />
          <Cube />
        </div>
        <div className="border-2  border-dashed"></div>
        <div className="flex justify-center flex-wrap gap-10 py-4">
          <Cubex />
          <Cubex />
          <Cubex />
          <Cubex />
        </div>
      </div>
      <div className="text-[#fbfcfd] flex flex-col gap-y-4  mx-24 my-4">
        <div className="h-1 bg-white"></div>
        <div>
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-3xl font-semibold">
              Block <span className=" text-[#3fbad6]">667306</span>
            </h3>
            <p className="mr-4 text-lg">×</p>
          </div>
          <div className="bg-[#212236] p-4 grid grid-rows-4 grid-flow-col gap-x-8">
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold">
              <p className=" w-1/3">Hash</p>
              <p className="text-[#3fbad6]">000000....7c83bfa </p> <FontAwesomeIcon
                icon={faShopLock}
                className="text-white text-lg my-1 mx-2"
                style={{ fontSize: "10px" }} // Adjust the font size for thickness
              />
            </div>
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold">
              <p className=" w-1/3">TimeStamp</p>
              <p>2021-01-23 08:47(1 hour ago)</p>
            </div>
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold">
              <p className=" w-1/3">size</p>
              <p>1.39 MB</p>
            </div>
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold">
              <p className=" w-1/3">Weight</p>
              <p>3.99MWU</p>
            </div>
            
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold">
              <p className=" w-1/3">Total Fees </p>
              <p> 0.43 BTC(<span className="text-[#059033]">$13,700</span>)</p>
            </div>
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold ">
              <p className=" w-1/3">Subsidy + fees :</p>
              <p>6.68 BTC (<span className="text-[#059033]">$213,136</span>)</p>
            </div>
            <div className="px-2 py-2 text-[#c2c4d3]  tracking-tight text-sm font-semibold odd:bg-[#171b27] flex font-bold ">
              <p className=" w-1/3">Hash</p>
              <p><button className="bg-[#164DCD] hover:bg-[#164DCD] text-white text-center font-bold px-2">
  SpiderPool
</button>
</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className=" mb-4  flex  items-center justify-between ">
            <h3 className="text-2xl  font-semibold">2,075 transactions</h3>
            <Pagination
        page={1}
        totalPages={5} // Replace with your actual total number of pages
        handlePaginationClick={()=> {window.alert("hello");}}
      />
          </div>
          <div className="bg-[#212236] flex justify-between gap-x-10  p-4 w-full font-bold text-sm">
            <span className=" truncate  whitespace-nowrap  text-left text-[#3fbad6]">
              18175452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d
            </span>
            <span className=" whitespace-nowrap right-0">2021-01-23 08:47</span>
          </div>
        </div>
        <div className="bg-[#212236] p-2 flex gap-x-4 h-40 ">
          <div className="parent-container">
          <div className="flex justify-start   temp-1 my-3">
            
            {" "}
            <div className="text-white font-bold">
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-white text-lg font-bold mx-1"
                style={{ transform: 'scaleY(1.5)',color:"grey" }} 
              />{" "}
              Coinbase (Newly Generated Coins)
            </div>
            <div className="text-white font-bold">
              {"  "}
              *)'bj/SpiderPool*%/mmBmR 4cDECA=?& __uwC ..yy Ul %%${" "}
            </div>
          </div>
          <div>

          </div>
          </div>
          <div className="  flex justify-start  temp-2 my-3 font-bold">
            <div>bc1q4fv7z8mqk73...dxnzw6789486xx</div>
            <div className="text-white">
              OP_RETURN *!@*=CIN UC+=\(*R%#@!/n./,WA \$ _t{" "}
            </div>
            <div className="text-white">
              OP_RETURN *!@*=CIN UC+=\(*R%#@!/n./,WA \$ _t{" "}
            </div>
            <div className="text-white">
              OP_RETURN *!@*=CIN UC+=\(*R%#@!/n./,WA \$ _t{" "}
            </div>
          </div>
          <div className="flex  justify-end temp-3 m-3 font-bold">
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1"
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'00FF00' }}
              />
            </div>
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1 "
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'grey' }}
              />
            </div>
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1"
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'grey' }}
              />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
                6.666789 BTC
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#212236] flex justify-between gap-x-10  p-4 w-full">
          <span className=" truncate  whitespace-nowrap  text-left text-[#3fbad6] font-bold text-sm">
            18175452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d
          </span>
          <span className=" whitespace-nowrap right-0 font-bold">2021-01-23 08:47</span>
        </div>

        <div className="bg-[#212236] p-2 flex gap-x-4 h-20 ">
          <div className="parent-container">
          <div className="justify-start temp-1 my-3 font-bold">
          <div className="">
            <div>
              {" "}
              <FontAwesomeIcon
              icon={faRightLong}
             className="text-whitetext-lg font-bold mx-1"
             style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'red' }}
           />{" "}
              bc1q4fv7z8mqk73...dxnzw6789486xx
            </div>
            <div className="text-white font-bold">
              623.1 sat/vB-68,232 sat $ (
              <span className="text-[#059033]"> $21,77</span>)
            </div>{" "}
          </div>
          
          </div>
          <div className="text-xs font-bold my-3" >
       <p>0.00078228 BTC</p>
          </div>
          </div>
          <div className="  items-center justify-start  temp-2 my-3 font-bold">
            <div>bc1q4fv7z8mqk73...dxnzw6789486xx</div>
          </div>
          <div className="flex  justify-end temp-3 m-3 font-bold">
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1 "
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'00FF00' }}
              />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
                6.666789 BTC
              </button>{" "}
            </div>
          </div>
        </div>

        <div className="bg-[#212236] flex justify-between gap-x-10  p-4 w-full">
          <span className=" truncate  whitespace-nowrap  text-left text-[#3fbad6] font-bold text-sm">
            18175452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d
          </span>
          <span className=" whitespace-nowrap right-0 font-bold">2021-01-23 08:47</span>
        </div>
        
        <div className="bg-[#212236]  flex   gap-x-2 h-28 ">
        <div className="parent-container">
        <div className="flex justify-start temp-1 my-3 mx-1">
    <div className="font-bold">
      {" "}
      <FontAwesomeIcon
        icon={faRightLong}
        className="text-white text-lg font-bold mx-1"
        style={{ transform: 'scaleY(1.5)', marginTop: '-1px', color: 'red' }}
      />{" "}
      bc1q4fv7z8mqk73...dxnzw6789486xx
    </div>
    <div>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold rounded-full text-xs text-center mx-4 px-2">
        multisig 2 of 3
      </button>
      <div></div>
    </div>
    <div className="text-white font-bold">
      623.1 sat/vB-68,232 sat $ (
      <span className="text-[#059033]"> $21,77</span>)
    </div>{" "}
  </div>
          <div >
       <p className="font-bold my-3 text-xs">0.07834568 BTC</p>
          </div>
          </div>
          <div className="  flex space-between items-center justify-start temp-2 m-2 font-bold">
            <div>bc1q4fv7z8mqk73...dxnzw6789486xx</div>
            <div>bc1q4fv7z8mqk73...dxnzw6789486xx</div>
          </div>
         
          <div className="flex  justify-end temp-3 m-2 font-bold">
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1 "
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'00FF00' }}
              />
            </div>
            <div>
              3.4343234 BTC{" "}
              <FontAwesomeIcon
                icon={faRightLong}
                className="text-whitetext-lg mx-1"
                style={{ transform: 'scaleY(1.5)',marginTop: '-1px',color:'red' }}
              />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ">
                6.666789 BTC
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
