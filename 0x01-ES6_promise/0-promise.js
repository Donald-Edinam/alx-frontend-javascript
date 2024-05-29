export default function getResponseFromAPI(){
    const success = true;
    return new Promise((resolve, reject) => {
        if(!success){
            reject();
        }
        else{
            resolve();
        }
    })
}