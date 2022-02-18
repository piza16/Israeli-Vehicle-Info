//interface I
import {ChooseColor} from "./ChooseColor"

export const DataTable = (props: any) => {
    console.log(props.data);
  
    return (
      <div className="w-100 h-100 flex flex-col items-center justify-center text-center">
        {props.data?._id && (
        <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-2 overflow-x-auto">
            <div className="inline-block w-80 shadow rounded-lg overflow-hidden bg-contain bg-bottom bg-no-repeat bg-white" style={{backgroundImage:`url(${props.carLink})`}}>
               <table className="min-w-full leading-normal">
                   <thead>
                       <tr>
                           <th
                               className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               נתונים
                           </th>
                           <th
                               className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                               מפרט
                           </th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   {props.data.mispar_rechev}
                               </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   מספר רכב
                               </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   {props.data.tozeret_nm}
                               </p>
                            </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   יצרן
                               </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                    {props.data.kinuy_mishari}
                               </p>
                            </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   דגם
                                </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   {props.data.ramat_gimur}
                                </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   רמת גימור
                                </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   {props.data.tzeva_rechev}
                                </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   צבע הרכב
                                </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                {props.data.shnat_yitzur}
                                </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                               שנת ייצור
                                </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   {new Date(props.data.tokef_dt).toLocaleDateString('en-GB')}
                                </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                               תוקף הטסט
                                </p>
                           </td>
                       </tr>
                       <tr>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                               {props.data.zmig_kidmi}+{props.data.zmig_ahori}
                                </p>
                           </td>
                           <td className="px-2 py-2 border-b border-gray-200 bg-none text-sm">
                               <p className="text-blue-700 font-bold whitespace-no-wrap">
                                   צמיגים אחורי/קדמי
                                </p>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </div>
           {props.data?.kvutzat_zihum && <div className="flex flex-col items-center justify-center text-center">
                <h1 className="pl-10 pt-0 sm:pt-5 text-white sm:pl-80"><span className="text-xl" style={{color:(ChooseColor(props.data.kvutzat_zihum))}}>{props.data.kvutzat_zihum }</span> קבוצת זיהום</h1>
                <div className="mt-2 ml-10 sm:ml-80 h-4 relative w-60 rounded-full overflow-hidden">
                    <div className=" w-full h-full bg-gray-200 absolute "></div>
                    <div className=" h-full absolute" style={{width:(100/15*props.data.kvutzat_zihum)+"%",backgroundColor:(ChooseColor(props.data.kvutzat_zihum))}}></div>
                </div>
            </div>}
       </div>            
        )}
      </div>
    );
  };
    // <div>
    //     <p> Car Reg Number: {props.data.mispar_rechev} </p>
    //     <p> Manufcturer: {props.data.tozeret_nm} </p>
    //     <p> Year of Manufcture: {props.data.shnat_yitzur} </p>
    //     <p>Tires Size: {props.data.zmig_kidmi} + {props.data.zmig_ahori}</p> 
    // </div> 