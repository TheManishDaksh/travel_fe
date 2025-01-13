import React from 'react';
import { Link } from "react-router-dom";

 const PaymentPage = () => {

    return (
      <div>
        <header className="p-4 text-4xl font-bold text-orange-500">
          <h1 className="">
            <Link className="link" to="/">
              TravelO
            </Link>
          </h1>
        </header>
        <main className='flex justify-center text-3xl font-bold '>
          <h2> Payment Page</h2>
         </main>
         <p className='flex justify-center'>will be add soon...</p>
      </div>
    );
  };

  export default PaymentPage