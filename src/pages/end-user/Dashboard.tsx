import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTokens } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Fade, Grow, LinearProgress } from "@mui/material";
import Header from "../../components/Header";
import allCoins from "../../constants/coin_info";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("dashboard screen");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Fade in={true} timeout={1000}>
        <div className="flex flex-col h-screen gap-8 pt-12 pl-24 pr-24">
          <h1>Welcome to Mode Start</h1>

          <input
            placeholder="Search for project to fund"
            className="p-4 rounded-md text-custom-black"
          ></input>
          <div className="flex flex-col gap-12 ">
            <div className="flex justify-between items-end pb-2 border-b-[1px] border-b-secondary-2">
              <h3 className="">New Ideas</h3>
              <button className="p-4 rounded-sm bg-primary text-custom-black">
                Publish New Idea
              </button>
            </div>

            <div className="grid grid-cols-3 gap-12">
              {allCoins.map((coin) => {
                const fundingProgress =
                  (coin.current_funds / coin.goal_funds) * 100;
                const progressWidth =
                  fundingProgress > 100 ? 100 : fundingProgress;
                const progressStyle = { width: `${progressWidth}%` };

                return (
                  <Grow
                    in={true}
                    style={{
                      transformOrigin: "0 0 0",
                    }}
                    {...(true ? { timeout: 1000 } : {})}
                  >
                    <div className="bg-custom-grey flex flex-col items-center p-6 justify-between cursor-pointer" onClick={() => navigate("/coinpage", {state: coin})}>
                      <img
                        src={coin.logo}
                        className="w-40 h-40 rounded-full p-4 m-4"
                      ></img>
                      <h3>{coin.name}</h3>
                      <p className="font-thin">{coin.token}</p>

                      <p className="text-center mt-8">{coin.description}</p>
                      <div className="bg-gray-200 rounded-full bg-custom-black w-10/12 mt-10">
                        <div
                          className="bg-primary text-xs font-medium text-custom-black text-center p-0.5 leading-none rounded-full w-10/12"
                          style={progressStyle}
                        >
                          {fundingProgress.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </Grow>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Dashboard;
