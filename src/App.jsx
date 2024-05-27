import React from "react";

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="max-container pt-10">
        <h1 className="text-white text-3xl text-center mb-3">Murodil's projects</h1>
        <p className="text-2xl text-white mb-8">My Works</p>  
        <ul className="mt-10 bg-slate-700 p-5 h-full grid grid-cols-2 ">
          <li>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title mb-5">1. Sneakers</h2>
                <div className="card-actions flex items-center">
                  <div className="mr-5">
                    <a href="https://github.com/smurodil/sneakers">
                      <button className="btn btn-primary w-[110px]">Github</button>
                    </a>
                  </div>
                  <div>
                    <a href="https://sneakers-tawny.vercel.app/">
                      <button className="btn btn-secondary w-[110px]">Vercel</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title mb-5">2. Password Generator</h2>
                <div className="card-actions flex items-center">
                  <div className="mr-5">
                    <a href="https://github.com/smurodil/password-generator">
                      <button className="btn btn-primary w-[110px]">Github</button>
                    </a>
                  </div>
                  <div>
                    <a href="https://password-generator-alpha-rose.vercel.app/">
                      <button className="btn btn-secondary w-[110px]">Vercel</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
