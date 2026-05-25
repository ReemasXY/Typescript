interface Todo{
    userId: number;
    name: string,
    age: number,
}

const fetchData= async()=>{
 try {
       const response= await fetch('https://example.com/data')

       if(!response.ok){
        throw new Error("HTTP error here")
       }
       const data: Todo = await response.json();
    //AxiosResponse le yo axios ko yeuta response ho bhanera bujauxa
    //Todo le chai tyo response ko data chai todo datatype ko hunxa bhanxa

 } catch (err: any) {
  
 }
}
