import React from "react";
import png from "public/infinity-logo.png";
import Image from "next/image";

const OmerCompenent = () => {
  return (
    <div className="flex flex-1 flex-row items-center justify-center gap-10 overflow-y-auto bg-gradient-to-b from-[#2e026d] to-[#15162c]  text-white">
      <kbd className="kbd bg-accent text-black">◀︎</kbd>
      <div className="carousel carousel-end max-w-7xl space-x-4 rounded-box">
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure className="bg-blue-100">
              <Image
                src={png}
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </figure>
            <div className="card-body items-end ">
              <h2 className="card-title ">אינפיניטי</h2>
              <p>קרן פנסיה אינפיניטי</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">לחץ כאן</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">לחץ כאן</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card glass w-72">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <kbd className="kbd bg-accent text-black">▶︎</kbd>
    </div>
  );
};

export default OmerCompenent;
