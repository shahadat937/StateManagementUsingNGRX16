export interface SharedState{
    isLoading:boolean,
    errorMessage:string,
    user: any | null;

}
const initialState={
    isLoading:false,
    errorMessage:'',
     user: null
}


