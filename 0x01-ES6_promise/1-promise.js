export default function getFullResponseFromAPI(success){
    return new Promise((resolve, reject) => {
        
        success_object = {
            status: 200, 
            body: "Success"
        }

        if(success === true){
            resolve(success_object)
        }
        else{
            reject("This fake API is not working currently");
        }
    })
}