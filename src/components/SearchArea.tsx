import axios from "axios";
import { useState } from "react";
import { DataTable } from "./DataTable";
import { Loading } from "./Loading";
import { MessageForUser } from "./MessageForUser";
import {ICar} from "./DataInterface"
// import { TranslateManufacture } from "./TranslateManufacture";

export const SearchArea = () => {
  const [registarationNum, setRegistarationNum] = useState("");
  const [carGovData, setCarGovData] = useState<ICar|{}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [carPhoto, setCarPhoto] = useState("");
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setRegistarationNum(value);
  };

  const handleClick = async () => {


    const registarationNumAPI = `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&limit=1&sort=mispar_rechev&q=${registarationNum}`;
    setCarGovData({});
    setIsLoading(true);
    setMessage("");

    axios
      .get(registarationNumAPI)
      .then(function (res) {
        const { result } = res.data;
        const [record] = result.records;
        return record;
      })
      .then(function (record) {
        if (record?._id && 6<registarationNum.length && registarationNum.length<9) {
          setCarGovData(record);
        } else {
          setMessage("לא נמצא מידע עבור מספר רכב זה");
          setIsLoading(false);
        }
        //setIsLoading(false);
        return record;
      })
      .then(function (record){
        const spaceIndex=(record.tozeret_nm.indexOf(" "));
        const options : any= {
          method: 'GET',
          url: 'https://google-translate20.p.rapidapi.com/translate',
          params: {text: record.tozeret_nm.slice(0,spaceIndex), tl: 'en', sl: 'he'},
          headers: {
            'x-rapidapi-host': 'google-translate20.p.rapidapi.com',
            'x-rapidapi-key': '8e625d6b52msh85f553583776bd7p1ccc76jsn49cd29f6b1be'
          }
        };
        axios.request(options).then(function (resp) {
            // console.log(resp.data.data.translation)
            return [resp.data.data.translation,record.kinuy_mishari,record.shnat_yitzur]   
        })
        .then(function(arr){
          console.log(arr[0],arr[1],arr[2])
          axios.get(`https://shrouded-caverns-77903.herokuapp.com/https://api.carsxe.com/images?key=0jbqfh2mt_e7ej87ls5_rysffms9d&year=${arr[2]}&make=${arr[0]}&model=${arr[1]}&format=json`)
          .then(function (res) {
          console.log(res)
          setCarPhoto(res.data.images[0].thumbnailLink);
          setIsLoading(false);   
        })
        })
        .catch(function (error) {
            console.error(error);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
  <div className="w-full h-full mr-2">
        <div className="w-full h-1/3 mt-2 mr-2">
            <div style={{backgroundImage:`url("https://static.wixstatic.com/media/08a2ae_627f43954fbb4adfa22e5ffe0f8503d9~mv2.png/v1/fill/w_350,h_83,al_c,q_85/plate.webp")`}} className="h-1/2 flex flex-col items-end justify-center text-black bg-cover bg-no-repeat">
                {/* flex flex-col items-center justify-center */}
                <input className="placeholder-blue-700" placeholder="מספר רכב" style={{background: "transparent",border: "none",fontSize:"4rem",fontWeight:"bold",width:"82%",height:"80%",maxWidth:"500px", textAlign:"center"}} value={registarationNum} onChange={handleChange} />
            </div>
            <div className="h-1/2 p-4 flex flex-col items-end justify-center">
                <button onClick={handleClick} type="button" className='flex max-w-sm w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-2xl uppercase font-bold shadow-md rounded-full mx-auto p-5'>
                    <div className="flex sm:flex-cols-12 gap-2">
                        <div className="col-span-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </div>
                        <div className="col-span-2 pt-2">מצא פרטים על הרכב</div>
                    </div>    
                </button>
            </div>
            {isLoading && <Loading />}   
            {message && <MessageForUser message={message} />} 
        </div>
        <div className="w-full h-2/3 mt-2 mr-2">
            <DataTable data={carGovData} carLink={carPhoto}/>
        </div>
  </div>

  );
};
