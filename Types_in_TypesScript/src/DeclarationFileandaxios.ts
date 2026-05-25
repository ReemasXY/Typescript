// declaration file (d.ts, modules ko lib ko folder ma gara here ni hunxa) le chai hints ra error tha paune kam garxa
// kunai package ma d.ts file banera auxa bhane kunai ma install garna parxa
// axios ma by default install bhara auxa (but kunai kunai still hudaina)
// so hints ra error chai dekhauxa ts ma 

import {AxiosResponse, isAxiosError} from "axios";// Axios Response datatype ho 
import axios from "axios";
axios.get('https://sameer.com').then(res=>{
    console.log(res.data)
})

//but in some cases installing the packages doesn't provide d.ts files jasle garda hints ra error audaina 
// so to install the declaration file of these we use following
// npm i -D @types/libraryName

//using ts and axios togetther

interface Todo{
    userId: number;
    name: string,
    age: number,
}

const fetchData= async()=>{
 try {
       const response: AxiosResponse<Todo>= await axios.get('https://example.com/data')
    //AxiosResponse le yo axios ko yeuta response ho bhanera bujauxa
    //Todo le chai tyo response ko data chai todo datatype ko hunxa bhanxa
    console.log(response.data.userId)
 } catch (err: any) {
    if(isAxiosError(err))
    {
        console.log(err.message)
    }
 }
}

