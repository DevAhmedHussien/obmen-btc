import { createContext } from "react";
import { useState,useEffect } from "react";
import axios from 'axios';

export let BtcContext = createContext([]);

export const BtcProvider = ({children})=>{

    const [bitcoinPrice, setBitcoinPrice] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
      const url = "https://api.coingecko.com/api/v3/simple/price";
      const params = {
          ids: "bitcoin,ethereum",   // Replace with the cryptocurrency IDs you want to retrieve
          vs_currencies: "rub",      // Specify the fiat currency as RUB for Russian Ruble
      };
      try {
          const response = await axios.get(url, { params });
  
          if (response.status === 200) {
              const data = response.data;
              setBitcoinPrice(data["bitcoin"]["rub"]);
              // setEthereumPrice(data["ethereum"]["rub"]);
          } else {
              console.log("Error occurred while fetching cryptocurrency prices.");
          }
      } catch (error) {
          console.log("Error occurred while fetching cryptocurrency prices:", error);
      }
  };
  
  fetchData();
    })
    return(
        <BtcContext.Provider value={bitcoinPrice}>
            {children}
        </BtcContext.Provider>
    )
}